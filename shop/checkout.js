/**
 * 
 * to do:
 * 
 * (1) Link reviews panel to chat subsystem backend
 * (2) Connect Reviews Render implmentation to Chat database backend
 * (3) Scale checkout image size down on stripe for faster load times
 */

const params = new URLSearchParams(window.location.search);
const item = params.get('item'); // fetch item params for the checkout from the url 


// to do: map to selected item id, fetch addtional data from shop database api, create checkout shop styling
console.log("page checkout parameters: ",item);

// this fetches the product json database from the store landing page without propagating unnecessay api calls
const productsJson = sessionStorage.getItem('products');

// to do : (1) use the item id and the presaved database to render a checking page that serialises to the UI form for the object
// to do : (2) verify test transaction registers on website

if (productsJson) {
  const products = JSON.parse(productsJson); // works. THank God!

  window.shopItems = products;
  
  //console.log("database debug : ", products);
  console.log("✅ Loaded Shop Db from session");

} else {
  // Fallback: redirect back or fetch again if needed
  console.error("No data found in sessionStorage");
  // window.location.href = '/';
}

// The max and min number of photos a customer can purchase
var MIN_PHOTOS = 1;
var MAX_PHOTOS = 10;

// changes the buy inout quantity
var quantityInput = document.getElementById('quantity-input');

var descriptionPanel = document.getElementById("description-panel");
var imageSlider = document.getElementsByClassName("image-slider")[0];//document.getElementById("image-slider");
var reviewsPanel = document.getElementById("reviews-panel");

// get the add button ui element
// for the disabled checkout ui / serverless backend api call
var addBtn = document.getElementById("add");
var subtractBtn = document.getElementById("subtract");

var userItem = window.shopItems[item];

//console.log("slider debug: ", imageSlider); // works
//console.log("Item debug: ",userItem); // works




// render the item's thumbnails
imageSlider.innerHTML =`
              <img id="main-image" src=${userItem.image} alt="Product">  
                <!-- Thumbnails -->
                <div class="thumbnails">
                <img src=${userItem.thumbnail_1} alt="" data-src=${userItem.thumbnail_1}>
                <img src=${userItem.thumbnail_2} alt="" data-src=${userItem.thumbnail_2}>
                <img src=${userItem.thumbnail_3} alt="" data-src=${userItem.thumbnail_3}>
                <img src=${userItem.thumbnail_4} alt="" data-src=${userItem.thumbnail_4}>
                </div>

`;

// render the item page description
descriptionPanel.innerHTML = `
<h2>Description</h2>
<p>${userItem.description}</p>
                <!-- convert cent price to dollar price-->
                <h2>US $${(userItem.new/100).toFixed(2)}</h2>
                <h4 class="crossed">US $${(userItem.price/100).toFixed(2)}</h4> 
                <h3> -${userItem.discount}% off </h3>
            </div>
            </a>
    </div>`;

// renders the checkout reviews
// temporarily disabled
// to do : (1) connect reviews to backend db
//reviewsPanel.innerHTML = `
//<h2>Reviews</h2>
//<div class="review">
//<strong>John Doe</strong>
//<p>Great product!</p>
//</div>
//<div class="review">
//<strong>Jane Smith</strong>
//<p>Loved it. Would buy again.</p>
//</div>
//`;    


// console.log("quantity input debug: ", quantityInput);

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


/* Checkout Form UI Logic
* Method for changing the product quantity 
* when a customer clicks the increment / decrement buttons 
*/



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


// shop page thumbnail 
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnails img');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const src = thumb.getAttribute('data-src');
    mainImage.setAttribute('src', src);
  });
});

// connect buy button to item's stripe product url
// possibly until the serverless api is properly audited 12 Jul 2025

document.getElementById("submit").addEventListener("click", () => { // works
    // connect the buy button to stripe either test or main
    // use stripe_test for testing in test mode or sandbox mode

    console.log("opening url: ", userItem.stripe_buy);
    window.location.href = userItem.stripe_buy;

});

/**
 * Redundant Depreciated code
 * 
 * // checkout form to api
 * <form action="/api/create-checkout-session" method="POST">
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