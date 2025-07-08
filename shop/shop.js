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

    var shopJson = sessionStorage.getItem('products');

    if (!shopJson && !window.shopItems) {

        console.log("debug 1: ",shopJson);
        console.log("debug 2: ", window.shopItems);

        // Load Remote Database
        // to do : (1) simplify shop json data to api database call (done)
        // check if the session alrady has the shop products data cached

        try {
            const response = await fetch("/api/shop"); // Adjust path if necessary // to do: fetch data using api code
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json(); // Parse JSON
            shopJson = data;
            window.shopItems = data;
            console.log(`✅ Loaded Shop Database 1`); // Check if the data loads correctly

            //save data base data to local storage for checkout page usage
            sessionStorage.setItem('products', JSON.stringify(data));
            console.log("session data saved");

        } catch (error) {
            console.error("Error loading manga collection:", error);
        }

    }
    if (shopJson && !window.shopItems ) {
        window.shopItems = JSON.parse(shopJson); // parse shop db back to json
        console.log(`✅ Loaded Shop Database 2`)
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
    


}

await loadShopItems();

// render the shop
renderShop();
