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
 * (3) Add New Tag for recent updates
 */





/**
 * Manga DataBase
 * 
 * Features:
 * (1) Manga Collection Database
 * (2) Used for Rendering The Landing Page Manga List & Manga Cards
 * 
 * TO Do:
 * (1) Optimize database for faster load times (done)
 * 
 * 
 * 
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
const shop = document.getElementById("shop");



// State Management
let currentManga = null;
let currentChapter = null;
let currentPageIndex = 0;


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



function setShopVisibility(isVisible) {
    // toggles the visibility of the games list
    if (isVisible == true) {
        shop.classList.remove("hidden"); // Show the carousel
    } else {
        shop.classList.add("hidden"); // Hide the carousel
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

function openUrl(url) {

    // open url to a new page
    //console.log("opening url: ", url);

    //open url in the same tab
    //window.location.href = url;
    window.open(url, "_blank");
}


//Navigation UI settings




export function renderShop() {
    //renders character bio from character bio.txt
    console.log("Rendering Shop");

    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setGamesListVisibility(false);
    setCarouselVisibility(true);
    setWhitePaperVisibility(false);
    setShopVisibility(true);
    setWiKiVisibility(false);

    shop.innerHTML = `    
    <h1>Shop</h1>
    <div class="shop-items">
        ${window.shopItems.map(item => `
            <div class="shop-item">
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <a href="${item.image}" download="${item.name}.jpg" class="download-btn">
                    Download
                </a>
            </div>
        `).join('')}
    </div>

    `
}

export function renderWhitePaperRoadMap() {
    // show the whitepaper / roadmap
    console.log("Whitepaper Render Triggered");


    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setGamesListVisibility(false);
    setCarouselVisibility(true);
    setWhitePaperVisibility(true);
    setShopVisibility(false);
    setWiKiVisibility(false);

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
                    <li>📈 Q2 2025 - New Features Integration ( Digital Marketplace & Onchain Save states)</li>
                    <li>🌎 Q3 2025 - Community Engagement & User Acquisition Campaign</li>
                    <li>🚀 Q4 2025 - Steam Plaform Alpha Launch</li>
                    <li>🚀 Q1 2026 - Nintendo Switch Plaform Alpha Launch</li>
                </ul>
            </div>
        </div>
    `;
}

function showLoadingAnimation() {
    //show loading animation for pages that a still loading with css + png image rotations
}

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









export function showChapters(manga) {
    /**
     * Show Chapters for a Manga
     *
     *
     */
    console.log("Show Chapters");

    currentManga = manga;

    //turn off image carousel
    setCarouselVisibility(false);
    setMangaListVisibility(false);
    setChapterListVisibility(true);
    setMangaReaderVisibility(false);
    setWhitePaperVisibility(false);
    setShopVisibility(false);
    setWiKiVisibility(false);


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
export function showReader(chapterNumber) {
    const chapter = currentManga.chapters.find(c => c.number === chapterNumber);
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
    setShopVisibility(false);

    // make the manga reader full screen
    mangaReader.style.display = 'block';

    renderPage();
}

function insertAds() {
    /**
     * Insert Adsense Ads Into Final Pages
     * 
     * called in render page function
     * inserts ads on the last page of the manga chapter
     * Replace "YOUR_AD_SLOT" with your actual AdSense ad slot ID. 
     *
     */


    console.log("inserting ads");
    setAdsVisibility(true);
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

    mangaReader.appendChild(adsContainer);


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
    if (window.platform === "Desktop") {
        const currentPage = currentChapter.pages[currentPageIndex];

        // Modifies the site via Inner HTML
        mangaReader.innerHTML = `
                <button class="btn" onclick="showChapters(currentManga)">← Back to Chapters</button>
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


    }

    // Mobile VIew
    if (window.platform === "Mobile") {
        console.log("Rendering Webtoon Layout");

        // Modifies the site via Inner HTML
        mangaReader.innerHTML = `
        <button class="btn" onclick="showChapters(currentManga)">← Back to Chapters</button>
        <h2>Chapter ${currentChapter.number}: ${currentChapter.title}</h2>
        <div id="mangaPages">
            ${currentChapter.pages.map((page, index) => `
                <img class="manga-page" src="${page}" alt="Page ${index + 1}">
            `).join('')}
        </div>
    `;

        insertAds();

        // Add double-click zoom functionality
        // using css scale transfrom
        const readerImage = document.getElementById("mangaPages");
        let isZoomed = false;

        readerImage.addEventListener("dblclick", () => {
            isZoomed = !isZoomed;
            if (isZoomed) {
                readerImage.style.transform = "scale(2) translateY(1000px)";  // Zoom in and move down
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
    setShopVisibility(false);
    setWiKiVisibility(false);
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
    try {
        const response = await fetch("/data/manga.json"); // Adjust path if necessary
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON
        //console.log(data); // Check if data is correctly fetched

        // Store it in mangaCollection
        //const mangaCollection2 = data;

        window.mangaCollection = data

        // Use mangaCollection as needed
        //console.log(mangaCollection2);
    } catch (error) {
        console.error("Error loading manga collection:", error);
    }
}


async function loadCharacterBio() {
    try {
        const response = await fetch("/public/Dystopia characters bio.txt"); // Path to your text file
        if (!response.ok) {
            throw new Error("Failed to load text file");
        }
        window.wiki = await response.text(); // Convert response to text

    } catch (error) {
        console.error("Error loading text:", error);
    }
}


// Home Screen & Landing Page
// Render Manga List by modifying the Manga List Div in the Dom
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
    setShopVisibility(false);
    setWiKiVisibility(false);

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

export function renderWiKi() {
    console.log("Characters List Render Triggered");

    mangaList.innerHTML = '';

    // Turn of chapter list & Manga Renders via css + js


    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setGamesListVisibility(false);
    setWhitePaperVisibility(false);
    setCarouselVisibility(true);
    setShopVisibility(false);
    setWiKiVisibility(true);
    wiki.innerText = window.wiki;
}

async function loadGameCollection() {
    try {
        const response = await fetch("/data/games.json"); // Adjust path if necessary
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON
        //console.log(data); // Check if data is correctly fetched

        // Store it in mangaCollection
        //const mangaCollection2 = data;

        window.gamesCollection = data

        // Use mangaCollection as needed
        //console.log(mangaCollection2);
    } catch (error) {
        console.error("Error loading games collection:", error);
    }
}


async function loadShopItems() {
    try {
        const response = await fetch("/data/shop.json"); // Adjust path if necessary
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON

        window.shopItems = data

    } catch (error) {
        console.error("Error loading manga collection:", error);
    }
}


// Load Database from json
await loadMangaCollection();
await loadGameCollection();
await loadShopItems();
await loadCharacterBio();

// Attach functions to `window` to make them available in the global scope
window.renderGamesList = renderGamesList;
window.renderMangaList = renderMangaList;
window.renderShop = renderShop;
window.renderWhitePaperRoadMap = renderWhitePaperRoadMap;
window.renderWiKi = renderWiKi;




// Load Landing page
renderMangaList();

// Debug Browser type
detectBrowser();