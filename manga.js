/**
 * Manga .js
 *
 * Summary:
 * This website works like a photoshop document, where each render layer is a div that's turned
 * off and on from state functions
 * 
 *  
 * Features
 * 
 * (1) Alters each Div in the index.html using css scripting 
 * (2) Functions as a static database for a small site
 * (3) Turns on / off pages using css tag modification and inner html to create new buttons
 * (4) Each Function is a trigger for a new page on the Website
 * (5) Every function is a different state of the landing page that is rendered / helper functions
 * (6) Every function call constructs the new page with inner html and styling tags from styles.css
 * 
 * 
 * 
 * To Do
 * (1) Proper State Management Using a simple state machine
 * (2) Fix Ads Code in header
 * (3) Add New Tag for recent updates (1/2)
 * 
 * 
 * Bugs:
 * (1) Using static pages clears the global window state reloading the database from scratch whenever on the landing page
 * (2) window.wiki is tet to a html element instead of a string text
 */




// Get Div Elements from the DOM as constants

// Manga Div Elements
const mangaList = document.getElementById('mangaList');
const chapterList = document.getElementById('chapterList');
const mangaReader = document.getElementById('mangaReader');

//ads elements
const adsContainer = document.getElementById("advertising");

// misc elements
const carousel = document.querySelector(".carousel");


// Character Div Elements
const wiki = document.getElementById('wiki');
const games = document.getElementById('games');
const whitepaper = document.getElementById('whitepaper');
//const shop = document.getElementById("shop");

//Video Div Elements
const videoContainer = document.getElementById('videoGallery');


//Price div elements
const priceContainer = document.getElementById("price-display");


// State Management
window.currentManga = null; // preserves current manga read state
window.wiki = null;
var currentChapter = null;
var currentPageIndex = 0;


// Image Header carusoel Interactivity for pause on hover
const track = document.querySelector(".carousel-track");

//console.log("Track Debug : ", track);

track.addEventListener("mouseover", () => {
    track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
});



/*
*  
* Toggles Visibility On /Off Each Dom Element
* 
*/

function setCarouselVisibility(isVisible) {
    // toggles the visibility of the carousel
    if (isVisible == true) {
        carousel.classList.remove("hidden"); // Show the carousel
    } else {
        carousel.classList.add("hidden"); // Hide the carousel
    }
}

function setMangaListVisibility(isVisible) {
    // toggles the visibility of the manga list
    if (isVisible == true) {
        mangaList.classList.remove("hidden"); // Show the carousel
    } else {
        mangaList.classList.add("hidden"); // Hide the carousel
    }
}


function setChapterListVisibility(isVisible) {
    // toggles the visibility of the chapter list
    if (isVisible == true) {
        chapterList.classList.remove("hidden"); // Show the carousel
    } else {
        chapterList.classList.add("hidden"); // Hide the carousel
    }
}

function setMangaReaderVisibility(isVisible) {
    // toggles the visibility of the manga reader
    if (isVisible == true) {
        mangaReader.classList.remove("hidden"); // Show the carousel
    } else {
        mangaReader.classList.add("hidden"); // Hide the carousel
    }
}



function setGamesListVisibility(isVisible) {
    // toggles the visibility of the games list
    if (isVisible == true) {
        games.classList.remove("hidden"); // Show the carousel
    } else {
        games.classList.add("hidden"); // Hide the carousel
    }
}

function setWhitePaperVisibility(isVisible) {
    // toggles the visibility of the games list
    if (isVisible == true) {
        whitepaper.classList.remove("hidden"); // Show the carousel
    } else {
        whitepaper.classList.add("hidden"); // Hide the carousel
    }
}


function setAdsVisibility(isVisible) {
    // toggles the visibility of the games list
    if (isVisible == true) {
        adsContainer.classList.remove("hidden"); // Show the carousel
    } else {
        adsContainer.classList.add("hidden"); // Hide the carousel
    }
}





function setWiKiVisibility(isVisible) {
    {
        // toggles the visibility of the games list
        if (isVisible == true) {
            wiki.classList.remove("hidden"); // Show the carousel
        } else {
            wiki.classList.add("hidden"); // Hide the carousel
        }
    }
}

function setAnimeVisibility(isVisible) {
    {
        // toggles the visibility of the games list
        if (isVisible == true) {
            videoContainer.classList.remove("hidden"); // Show the carousel
        } else {
            videoContainer.classList.add("hidden"); // Hide the carousel
        }
    }
}


function openUrl(url) {

    // open url to a new page
    //console.log("opening url: ", url);

    //open url in the same tab
    //window.location.href = url;
    window.open(url, "_blank");
}

/** 
export async function fetchPrice() {
    const url = "https://free-api.vestige.fi/asset/2717482658/price";
    //console.log("Container Debug: ", priceContainer);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("✅ Prices Fetched   ");

        const data = await response.json();
        //console.log("Price Data:", data);

        // Extract and format price data to 11th decimal
        const priceUSD = data.USD.toFixed(11);
        const priceEUR = data.EUR.toFixed(11);
        const priceGBP = data.GBP.toFixed(11);
        const priceBTC = data.BTC.toFixed(11);
        const priceAlgo = data.price.toFixed(11);

        priceContainer.innerHTML = `
            <br>
            ALGO: ${priceAlgo}<br>
            USD: ${priceUSD}<br>
            EUR: ${priceEUR}<br>
            GBP: ${priceGBP}<br>
            BTC: ${priceBTC}
        `;


    } catch (error) {
        console.error("Error fetching price:", error);
    }
}

*/
// Fetch price on page load
//fetchPrice();

// Optionally refresh price every 30 seconds
//setInterval(fetchPrice, 30000);



export function renderWhitePaperRoadMap() {
    // show the whitepaper / roadmap
    console.log("Whitepaper Render Triggered");


    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setGamesListVisibility(false);
    setCarouselVisibility(true);
    setWhitePaperVisibility(true);
    setWiKiVisibility(false);
    setAnimeVisibility(false);

    const whitepaperImg = "assets/misc/whitepaper.jpeg";
    const title = "the project's whitepaper and roadmap"

    whitepaper.style.display = "block";
    whitepaper.innerHTML = `
        <div class="whitepaper-container">
            <h1 class="whitepaper-title">${title}</h1>
            <img src="${whitepaperImg}" alt="${title}" class="whitepaper-image">
            
            <p class="whitepaper-content">
                The Dystopia project aims to bring the future of digital entertainment emcompassing 
                comics, cartoons and video games under one platform; creating worlds that our players can
                bild, engage with and interract with. The project started in 2013 as an idea and has been in active development
                since 2020.
                Our whitepaper outlines the vision, mission, and strategy for our project's future.
                This includes key milestones, innovative technology, and a roadmap that will shape our journey.

                Our Tokenomics plans to make Sud deflationary by burning 1 Billion $SUD Tokens and 
                revenue raised from advertising and staking would be used to buy back more $Sud


                
            </p>

            <div class="roadmap-section">
                <h2 class="roadmap-title">Project Roadmap</h2>
                <ul class="roadmap-list">
                    <li>✅ Q4 2024 - Android Platform Beta Launch</li>
                    <li>🚀 Q1 2025 - Web Plaform Alpha & $SUD Token Launch</li>
                    <li>📈 Q3 2025 - New Features Integration ( Digital Marketplace & Onchain Save states)</li>
                    <li>🌎 Q4 2025 - Community Engagement & User Acquisition Campaign</li>
                    <li>🚀 Q1 2026 - Steam Plaform Alpha Launch</li>
                    <li>🚀 Q2 2026 - Nintendo Switch Plaform Alpha Launch</li>
                </ul>
            </div>
        </div>
    `;
}

//function showLoadingAnimation() {
//show loading animation for pages that a still loading with css + png image rotations
//}

export function detectBrowser() {
    /**
     * Platform Detection is Buggy On Mobile with Embedded Webbrowsers
     * It detects them as desktops 
     *
     */
    const userAgent = navigator.userAgent.toLowerCase();
    let browser = 'unknown';
    let platform = 'unknown';

    // Detect browser
    if (userAgent.includes('chrome')) {
        browser = 'Chrome';
    } else if (userAgent.includes('firefox')) {
        browser = 'Firefox';
    } else if (userAgent.includes('safari')) {
        browser = 'Safari';
    } else if (userAgent.includes('edge')) {
        browser = 'Edge';
    } else if (userAgent.includes('opera') || userAgent.includes('opr')) {
        browser = 'Opera';
    }

    // Detect platform
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)) {
        platform = 'Mobile';
    } else {
        platform = 'Desktop';
    }

    console.log(`Browser: ${browser}, Platform: ${platform}`);

    //save browser and platform to globals
    window.browser = browser
    window.platform = platform
    //return { browser, platform };
}








// Depreciated
export function showChapters(manga) {
    /**
     * Show Chapters for a Manga
     * 
     * Depreciated on landing page
     * Rewriting as pregeneratd html functions + static links
     *
     */
    console.log("Show Chapters");

    window.currentManga = manga;

    //turn off image carousel
    setCarouselVisibility(false);
    setMangaListVisibility(false);
    setChapterListVisibility(true);
    setMangaReaderVisibility(false);
    setWhitePaperVisibility(false);
    setWiKiVisibility(false);
    setAnimeVisibility(false);

    chapterList.style.display = 'block'; // change the styling of the website to full screen

    // Get the latest chapter number
    const latestChapterNumber = Math.max(...manga.chapters.map(ch => ch.number));



    // Create button to go back to homescreen/render manga list
    chapterList.innerHTML = `
        <button class="btn" onclick="renderMangaList()">← Back to Manga List</button>
        <h1>${manga.title}</h1>
        <p>${manga.description}</p>
        ${manga.chapters.map(chapter => `
            <div class="chapter-item" onclick="showReader(${chapter.number})">
                Chapter ${chapter.number}: ${chapter.title} 
                ${chapter.number === latestChapterNumber ? '<span class="new-icon">new</span>' : ''}
            </div>
        `).join('')}
    `;
}


// Show Manga Reader
// Need Refactoring for serverless function use
export function showReader(chapterNumber) {
    const chapter = window.currentManga.chapters.find(c => c.number === chapterNumber);
    currentChapter = chapter;
    currentPageIndex = 0;

    // hide all other states

    setCarouselVisibility(false);
    setWhitePaperVisibility(false);
    setGamesListVisibility(false);
    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(true);
    setWiKiVisibility(false);
    setAnimeVisibility(false);

    // make the manga reader full screen
    mangaReader.style.display = 'block';

    renderPage();
}

export function insertAds() {
    /**
     * Insert Adsense Ads Into Final Pages
     * 
     * called in render page function
     * inserts ads on the last page of the manga chapter
     * Replace "YOUR_AD_SLOT" with your actual AdSense ad slot ID. 
     * 
     * Ezoic Ads Documentation
     * 
     * https://docs.ezoic.com/docs/ezoicads/dynamic-content/
     *
     */


    console.log("inserting ads -Depreciated");
    setAdsVisibility(true);

    //adsense ads are depreciated until June 2025
    /**
    adsContainer.innerHTML = `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3900377589557710"
     crossorigin="anonymous"></script>
<!-- Dystopia App 1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3900377589557710"
     data-ad-slot="3917381126"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    `;

    adsContainer.innerHTML = `
    <div id="ezoic-pub-ad-placeholder-101"></div>
<script>
    ezstandalone.cmd.push(function() {
        ezstandalone.showAds(101)
    });
</script>

    `

    mangaReader.appendChild(adsContainer);
*/

}


export function renderPage() {
    /**
     * Renders Manga Pages
     * 
     * TO DO:
     * 
     * (1) Drag & Drop
     * (2) Panel View
     * (3) Music
     * (4) Animated Gif Pages
     * (5) Pinch to zoom (Mobile) 
     * (6) Export function to Netlify api for SSR (Server Side Rendering)
     */
    //window.platform = "Mobile"

    // Desktop View

    const currentPage = currentChapter.pages[currentPageIndex];

    // Modifies the site via Inner HTML
    mangaReader.innerHTML = `
                <button class="btn" onclick="showChapters(window.currentManga)">← Back to Chapters</button>
                <h2>Chapter ${currentChapter.number}: ${currentChapter.title}</h2>
                <div class="navigation">
                    <button class="btn" onclick="prevPage()" ${currentPageIndex === 0 ? 'disabled' : ''}>
                        Previous
                    </button>
                    <button class="btn" onclick="nextPage()" ${currentPageIndex === currentChapter.pages.length - 1 ? 'disabled' : ''}>
                        Next
                    </button>
                </div>
                <img id="readerImage" src="${currentPage}" alt="Page ${currentPageIndex + 1}">
                <div id="pageIndicator">
                    Page ${currentPageIndex + 1} of ${currentChapter.pages.length}
                </div>
            `;

    // Add AdSense only on the last page
    if (currentPageIndex === currentChapter.pages.length - 1) {
        insertAds();
    }

    // Turn off AdSense only any other page
    if (currentPageIndex !== currentChapter.pages.length - 1) {
        setAdsVisibility(false);
    }



    // Mobile View
    // depreciated in favour of static pre-generated html chapters


    // Add double-click zoom functionality
    // using css scale transfrom
    const readerImage = document.getElementById("readerImage");
    let isZoomed = false;

    readerImage.addEventListener("dblclick", () => {
        isZoomed = !isZoomed;
        if (isZoomed) {
            readerImage.style.transform = "scale(2) translateY(10px)";  // Zoom in and move down
            readerImage.style.cursor = "zoom-out";
        } else {
            readerImage.style.transform = "scale(1) translateY(0)";  // Reset to normal
            readerImage.style.cursor = "zoom-in";
        }
    });

    // Apply CSS for smooth zoom effect
    readerImage.style.transition = "transform 0.3s ease";
    readerImage.style.cursor = "zoom-in";  // Initial cursor state
}




export function renderGamesList() {
    //renders a Games cards list from itchio
    console.log("Games List Render Triggered");

    games.innerHTML = '';

    // Turn of chapter list & Manga Renders via css + js


    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setWhitePaperVisibility(false);
    setGamesListVisibility(true);
    setCarouselVisibility(true);
    setWiKiVisibility(false);
    setAnimeVisibility(false);
    //console.log(games.style.display);

    //creates a Manga Card div for each element in the Manga Collection Constant
    window.gamesCollection?.forEach(game => {

        // create a Game card for each Manga
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card'; // set div class id for css styling
        gameCard.innerHTML = `
                    <img src="${game.coverImage}" alt="${game.title}">
                    <div class="game-card-content">
                        <h2>${game.title}</h2>
                        <p>${game.genre.join(', ')}</p>
                        <div>❤️ ${game.likes} Likes</div>
                    </div>
                `; gameCard.onclick = () => openUrl(game.url); // map Card Div to show Chapters function

        games.appendChild(gameCard);
    });

}



// Page Navigation
function nextPage() {
    if (currentPageIndex < currentChapter.pages.length - 1) {
        currentPageIndex++;
        renderPage();
    }
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        renderPage();
    }
}

//double tap to zoom in / out

async function loadMangaCollection() {

    // check if data collection has previously been saved in the session
    // this fetches the product json database from the store landing page without propagating unnecessay api calls
    const mangaJson = sessionStorage.getItem('manga');
    var manga = null;
    // to do : (1) use the item id and the presaved database to render a checking page that serialises to the UI form for the object
    // to do : (2) verify test transaction registers on website

    if (mangaJson) {
        const manga = JSON.parse(mangaJson); // works. THank God!

        window.mangaCollection = manga;

        console.log(`✅ Loaded Manga Database 1: `); // Check if the data loads correctly
    } else {
        // Fallback: redirect back or fetch again if needed
        console.error("No data found in sessionStorage");
        

        // Load Local database securely, slower with some processing and cache
        // read local database for faster load times and lower network requirements
        const response = await fetch("/api/manga"); 
        if (!response.ok) {
            
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON
        //console.log(data); // Check if data is correctly fetched

        // Store it in mangaCollection globals and to the page's session
        window.mangaCollection = data;
        sessionStorage.setItem('manga', JSON.stringify(data));

        console.log(`✅ Loaded Manga Database 2`); // Check if the data loads correctly
    }


}


async function loadCharacterBio() {
    // bug: (1) some other object sets window.wiki before this function, i need to find out which
    // (2) wiki data is a text and should be proper formatted into a html page
    
    //console.log("Loading character wiki: ", window.wiki);
    if (window.wiki == null) {
        try {
            // to do : (1) depreciate text format in favour of html formatted data
            const response = await fetch("/data/Dystopia characters bio.txt"); // Path to your text file
            if (!response.ok) {
                throw new Error("Failed to load text file");
            }
            window.wiki = await response.text(); // Convert response to text
            //console.log("wiki debug 1: ", window.wiki);
            console.log(`✅ Loaded Characters Database`);

        } catch (error) {
            console.error("Error loading text:", error);
        }
    }

}



async function loadGameCollection() {

    if (window.gamesCollection == null) {

        // Remote Fetch database from backend with Async
        try {
            const response = await fetch("/data/games.json"); // Adjust path if necessary
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json(); // Parse JSON

            window.gamesCollection = data
            console.log(`✅ Loaded Games Database 1`); // Check if the data loads correctly

        } catch (error) {
            console.error("Error loading games collection:", error);
        }

    }

}



async function loadAnimationDb() {



    // Load Remote Database

    try {
        const response = await fetch("/data/anime.json"); // Adjust path if necessary
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON

        window.anime = data;
        console.log(`✅ Loaded Animation Database`); // Check if the data loads correctly

    } catch (error) {
        console.error("Error loading Animation Database:", error);
    }



}



// Home Screen & Landing Page
// Render Manga List by modifying the Manga List Div in the Dom
// modify code to add to the static mangalist by running some comparison logic with the database and staic pages
export function renderMangaList() {
    console.log("Render Manga List Triggered ");

    mangaList.innerHTML = '';

    // Turn of chapter list & Manga Renders via css + js


    setMangaListVisibility(true);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setGamesListVisibility(false);
    setWhitePaperVisibility(false);
    setCarouselVisibility(true);
    setWiKiVisibility(false);
    setAnimeVisibility(false);

    //console.log("manga db debug: ", window.mangaCollection);

    //creates a Manga Card div for each element in the Manga Collection Constant
    window.mangaCollection.forEach(manga => {

        // create a manga card for each Manga
        const mangaCard = document.createElement('div');
        mangaCard.className = 'manga-card';
        mangaCard.innerHTML = `
                    <img src="${manga.coverImage}" alt="${manga.title}">
                    <div class="manga-card-content">
                        <h2>${manga.title}</h2>
                        <p>${manga.genre.join(', ')}</p>
                        <div>❤️ ${manga.likes} Likes</div>
                    </div>
                `; mangaCard.onclick = () => showChapters(manga); // map Card Div to show Chapters function

        mangaList.appendChild(mangaCard);
    });



}


export function renderAnimationList() {
    console.log("render anime list triggered");

    // this code bloc is being refactored to instead open a url to the playlist in the animation db
    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setGamesListVisibility(false);
    setWhitePaperVisibility(false);
    setCarouselVisibility(true);
    setWiKiVisibility(false);
    setAnimeVisibility(true);
    // creates a video card for each element in the animation database
    // to do:
    // (1) create static image thumbnail for all the hosted videos in anime db
    // (2) link each static image to the url programmatically

    // debug the window anime db
    //console.log("window anime dbg: ", window.anime);

    window.anime.forEach(video => {

        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        //      document.getElementById("videoPlayer").innerHTML = `
        //   <iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen></iframe>
        // `;

        videoCard.innerHTML = `
       <iframe width="560" height="315" src="${video.videoUrl}" frameborder="0" allowfullscreen></iframe>

      `;

        videoContainer.appendChild(videoCard);
    });

}

export function renderWiKi() {
    console.log("Characters List Render Triggered");

    //mangaList.innerHTML = '';

    // Turn of chapter list & Manga Renders via css + js


    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setGamesListVisibility(false);
    setWhitePaperVisibility(false);
    setCarouselVisibility(true);
    setWiKiVisibility(true);
    setAnimeVisibility(false);

    //  debug the wiki text
    // window.wiki is improperly loaded
    //console.log("wiki debug: ", window.wiki );
    
    wiki.innerText = window.wiki;
}




// Load Database from json
await loadAnimationDb();
await loadMangaCollection(); // disabled if favour of static page rendering refactor
await loadGameCollection();
await loadCharacterBio();



// Attach functions to `window` to make them available in the global scope
window.renderGamesList = renderGamesList;
window.renderMangaList = renderMangaList;
window.renderWhitePaperRoadMap = renderWhitePaperRoadMap;
window.renderWiKi = renderWiKi;
window.showReader = showReader;
window.showChapters = showChapters;
window.nextPage = nextPage;
window.prevPage = prevPage;
window.renderAnimationList = renderAnimationList;



//window.fetchPrice = fetchPrice;

// fetch price data from api 
// update api to use version 2
//fetchPrice();

// Load Landing page
renderMangaList();

// Debug Browser type
detectBrowser();


