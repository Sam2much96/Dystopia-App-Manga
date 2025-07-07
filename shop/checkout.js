const params = new URLSearchParams(window.location.search);
const item = params.get('item'); // 'John'
//const age = params.get('age');   // '25'

// to do: map to selected item id, fetch addtional data from shop database api, create checkout shop styling
console.log("page checkout parameters: ",item);

// this fetches the product json database from the store landing page without propagating unnecessay api calls
const productsJson = sessionStorage.getItem('products');

// to do : (1) use the item id and the presaved database to render a checking page that serialises to the UI form for the object
// to do : (2) verify test transaction registers on website

if (productsJson) {
  const products = JSON.parse(productsJson); // works. THank God!

  window.shopItems = products;
  console.log("database debug : ", products);
} else {
  // Fallback: redirect back or fetch again if needed
  console.error("No data found in sessionStorage");
  // window.location.href = '/';
}

var shop = document.getElementById("shop");
var item_ = window.shopItems[item];

console.log("shop debug: ", shop);
//console.log("Item debug: ",item_); // works

shop.innerHTML = `<div class="shop-items">
            <a href='./checkout.html?item=${item_.id}'>
            <div class="pasha-image">
                <img src="${item_.image}" alt="${item_.name}" width="240" height="240">                
                <p>${item_.description}</p>
                <!-- convert cent price to dollar price-->
                <h2>US $${(item_.new/100).toFixed(2)}</h2>
                <h4 class="crossed">US $${(item_.price/100).toFixed(2)}</h4> <h3> -${item_.discount}% off </h3>
            </div>
            </a>
    </div>`;


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
    var MIN_PHOTOS = 1;
    var MAX_PHOTOS = 10;

    // changes the buy inout quantity
    var quantityInput = document.getElementById('quantity-input');

    console.log("quantity input debug: ", quantityInput);

    // bug :  doesn't work for all items
    quantityInput.addEventListener('change', function (e) {
        // Ensure customers only buy between 1 and 10 photos
        if (quantityInput.value < MIN_PHOTOS) {
            quantityInput.value = MIN_PHOTOS;
        }
        if (quantityInput.value > MAX_PHOTOS) {
            quantityInput.value = MAX_PHOTOS;
        }
    });


    /* Method for changing the product quantity when a customer clicks the increment / decrement buttons */

    // get the add button ui element
    var addBtn = document.getElementById("add");
    var subtractBtn = document.getElementById("subtract");

    // lambda function for the shop item increase & decrease ui button
    var updateQuantity = function (evt) {
    if (evt && evt.type === 'keypress' && evt.keyCode !== 13) {
        return;
    }
    var delta = evt && evt.target.id === 'add' && 1 || -1;

    addBtn.disabled = false;
    subtractBtn.disabled = false;

    // Update number input with new value.
    quantityInput.value = parseInt(quantityInput.value) + delta;

    // Disable the button if the customers hits the max or min
    if (quantityInput.value == MIN_PHOTOS) {
        subtractBtn.disabled = true;
    }
    if (quantityInput.value == MAX_PHOTOS) {
        addBtn.disabled = true;
    }
    };


    // add click event ui event listener to button click
    addBtn.addEventListener('click', updateQuantity);
    subtractBtn.addEventListener('click', updateQuantity);
