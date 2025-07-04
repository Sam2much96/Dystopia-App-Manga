/* Stripe backend Server API 
*
* Features:
* (1) Routes Successfull stripe payments to success and failure pages
* (2) Returns a stripe session id
* (3) Contructs a payment id for the frontend stripe session
* (4) Sends an HTTP 303 redirect response back to the browser, pointing to session.url, which is the Stripe-hosted Checkout page
*/

// to do:
// (1) 
// 
// (3) Connect to frontend
// (4) Deconstruct api call to include payment parameters for the shop frontend

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {apiVersion: '2020-08-27'});

export default async function handler(request) {
  
  // to do : 
  // (1) Map to different endpoit states, like checkout,
    const domainURL = process.env.DOMAIN;
    console.log("Domain Url debug: ", domainURL);
    try {

    //Create a stripe session for this item at this amount to be paid in stripe secure checkout

    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Cool Item',
          },
          unit_amount: 5000,
        },
        quantity: 1,
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


