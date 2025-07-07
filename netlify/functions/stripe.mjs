/* Stripe backend Server API 
*
* Features:
* (1) Routes Successfull stripe payments to success and failure pages
* (2) Returns a stripe session id
* (3) Contructs a payment id for the frontend stripe session
* (4) Sends an HTTP 303 redirect response back to the browser, pointing to session.url, which is the Stripe-hosted Checkout page
*/

// to do:
// (1) Add shop item images  
// (2)
// (3) Connect to frontend (done)
// (4) Deconstruct api call to include payment parameters for the shop frontend (done)


import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {apiVersion: '2020-08-27'});

export default async function handler(request) {
  console.log(process.env.STRIPE_SECRET_KEY);
    
  if (request.method !== 'POST') { // error catcher for non post requests
      console.log("form debug: ", request.body);
      return new Response('Method Not Allowed', { status: 405 });
    }
  
    //fetch all product details from the shop db
    const filePath = join(process.cwd(), "data", "../data/shop.json");
    const rawData = readFileSync(filePath, "utf-8"); // Read raw JSON as string
    const shopData = JSON.parse(rawData); // now it’s an array
    

    const domainURL = process.env.DOMAIN;
    //console.log("Domain Url debug: ", domainURL);


    try {

      // Parse the request body
      const bodyText = await request.text();
      const formData = new URLSearchParams(bodyText);
     
      const quantity = parseInt(formData.get('quantity'), 10) || 1;
      const itemId = formData.get('itemId');
      // for debug purposes only
      //console.log("quantity: ", quantity,"/ item id: ", itemId);
      //console.log('shopData:', shopData);
      //console.log('isArray:', Array.isArray(shopData));
      const item = shopData.find(i => i.id === 0);
      
      //console.log("shop item: ",item);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description : item.description,
          },
          unit_amount: item.price,
        },
        quantity: quantity,
      }],
      success_url: `${domainURL}/shop/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainURL}/shop/canceled.html`,
    });

    return new Response(null, { // redirects to stripe checkout page with these payment parameters
      status : 303,
      headers: {
        Location : session.url,
      }
    })

    //return new Response(JSON.stringify({ id: session.id }), {
    //  statusCode: 200,
    //  headers: { 'Content-Type': 'application/json' },
    //})

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }


}


