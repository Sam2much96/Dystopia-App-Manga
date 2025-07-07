/*

All Stripe Frontend Functionality in a single script

Features:
(1) Frontend for resolving stripe session id to the checkout page
(2) The session ID tells Stripe which Checkout session to open.
(3) Stripe already knows the product, price, etc., because your serverless function created it.
(4) The user is then redirected to Stripe’s secure hosted payment page.
*/




/**
 * 
 * Navigation UI settings 
 * 
 */



// load shop items with db call
async function loadShopItems() {

    if (window.shopItems == null) {

        // Load Remote Database
        // to do : (1) simplify shop json data to api database call

        try {
            const response = await fetch("/data/shop.json"); // Adjust path if necessary // to do: fetch data using api code
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json(); // Parse JSON

            window.shopItems = data;
            console.log(`✅ Loaded Shop Database 1`, data); // Check if the data loads correctly

            //save data base data to local storage for checkout page usage
            sessionStorage.setItem('products', JSON.stringify(data));
            console.log("session data saved");

        } catch (error) {
            console.error("Error loading manga collection:", error);
        }

    }

}



export function renderShop() {
    //renders character bio from character bio.txt
    console.log("✅ Rendering Shop");

    const shop = document.getElementById("shop");


    console.log("shop debug : ", shop);

    //console.log("shop debug 2: ",window.shopItems);
    // render each shop item
    shop.innerHTML = `    
    <h1>Today's Deal</h1>
    <div class="shop-items">
        ${window.shopItems.map(item => `
            <a href='./checkout.html?item=${item.id}'>
            <div class="pasha-image">
                <img src="${item.image}" alt="${item.name}" width="240" height="240">                
                <p>${item.description}</p>
                <!-- convert cent price to dollar price-->
                <h2>US $${(item.new/100).toFixed(2)}</h2>
                <h4 class="crossed">US $${(item.price/100).toFixed(2)}</h4>
                <button>-${item.discount}%</button>                
            </div>
            </a>
        `).join('')}
    </div>
    `
    
    // the buy quantity form + UI
    
    /** 
    `<!-- api call to serverless stripe backend api + forms to submit purchase data-->
        <form action="/api/create-checkout-session" method="POST">
                  <!-- quantity setter UI-->
                    <div class="quantity-setter">
                    <button class="increment-btn" id="subtract" disabled type="button">-</button>
                    <input 
                        type="number" 
                        id="quantity-input" 
                        min="1" value="1" 
                        name="quantity" 
                    />
                    <button class="increment-btn" id="add" type="button">+</button>
                    </div>
                    <p class="sr-legal-text">Number of copies (max 10)</p>

                    <button type="submit" id="submit">Buy</button>
                </form>`
    */
  // The max and min number of photos a customer can purchase
    //var MIN_PHOTOS = 1;
    //var MAX_PHOTOS = 10;

    // changes the buy inout quantity
    //var quantityInput = document.getElementById('quantity-input');

    //console.log("quantity input debug: ", quantityInput);

    // bug :  doesn't work for all items
    //quantityInput.addEventListener('change', function (e) {
        // Ensure customers only buy between 1 and 10 photos
    //    if (quantityInput.value < MIN_PHOTOS) {
    //        quantityInput.value = MIN_PHOTOS;
    //    }
    //    if (quantityInput.value > MAX_PHOTOS) {
    //        quantityInput.value = MAX_PHOTOS;
    //    }
   // });


    /* Method for changing the product quantity when a customer clicks the increment / decrement buttons */

    // get the add button ui element
    //var addBtn = document.getElementById("add");
    //var subtractBtn = document.getElementById("subtract");

    // lambda function for the shop item increase & decrease ui button
    //var updateQuantity = function (evt) {
    //if (evt && evt.type === 'keypress' && evt.keyCode !== 13) {
    //    return;
    //}
    //var delta = evt && evt.target.id === 'add' && 1 || -1;

    //addBtn.disabled = false;
    //subtractBtn.disabled = false;

    // Update number input with new value.
    //quantityInput.value = parseInt(quantityInput.value) + delta;

    // Disable the button if the customers hits the max or min
    //if (quantityInput.value == MIN_PHOTOS) {
    //    subtractBtn.disabled = true;
    //}
    //if (quantityInput.value == MAX_PHOTOS) {
    //    addBtn.disabled = true;
    //}
    //};


    // add click event ui event listener to button click
    //addBtn.addEventListener('click', updateQuantity);
    //subtractBtn.addEventListener('click', updateQuantity);



}

await loadShopItems();

// render the shop
renderShop();
