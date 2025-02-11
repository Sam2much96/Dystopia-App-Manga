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
 * (1) Optimize database for faster load times
 * 
 * BUGs:
 * (1) Breaks out when js file is placed in header instead of body
 * 
 */

const mangaCollection = [
    {
        id: 1,
        title: "Dystopia App",
        description: "YOu are a Fourth Worlder, Survive!",
        coverImage: "assets/manga/dystopia_app/chap1/cover 1.webp",
        chapters: [
            {
                number: 1,
                title: "The Money Heist",
                pages: [
                    "assets/manga/dystopia_app/chap1/cover 2.webp",
                    "assets/manga/dystopia_app/chap1/cover 1.webp",
                    "assets/manga/dystopia_app/chap1/pg 1.webp",
                    "assets/manga/dystopia_app/chap1/pg 2.webp",
                    "assets/manga/dystopia_app/chap1/pg 3.webp",
                    "assets/manga/dystopia_app/chap1/pg 4.webp",
                    "assets/manga/dystopia_app/chap1/pg 5.webp",
                    "assets/manga/dystopia_app/chap1/pg 6.webp",
                    "assets/manga/dystopia_app/chap1/pg 7.webp",
                    "assets/manga/dystopia_app/chap1/pg 8.webp",
                    "assets/manga/dystopia_app/chap1/pg 9.webp",
                    "assets/manga/dystopia_app/chap1/pg 10.webp",
                    "assets/manga/dystopia_app/chap1/pg 11.webp",
                    "assets/manga/dystopia_app/chap1/pg 12.webp",
                    "assets/manga/dystopia_app/chap1/pg 13.webp",
                    "assets/manga/dystopia_app/chap1/pg 14.webp",
                    "assets/manga/dystopia_app/chap1/pg 15.webp",
                    "assets/manga/dystopia_app/chap1/pg 16.webp",
                    "assets/manga/dystopia_app/chap1/pg 17.webp",
                    "assets/manga/dystopia_app/chap1/pg 18.webp"
                ]
            },
            {
                number: 2,
                title: "Police",
                pages: [
                    "assets/manga/dystopia_app/chap2/cover page.webp",
                    "assets/manga/dystopia_app/chap2/cover 2.webp",
                    "assets/manga/dystopia_app/chap2/Pg 1.webp",
                    "assets/manga/dystopia_app/chap2/Pg 2.webp",
                    "assets/manga/dystopia_app/chap2/Pg 3.webp",
                    "assets/manga/dystopia_app/chap2/Pg 4.webp",
                    "assets/manga/dystopia_app/chap2/Pg 5.webp",
                    "assets/manga/dystopia_app/chap2/Pg 6.webp",
                    "assets/manga/dystopia_app/chap2/Pg 7.webp",
                    "assets/manga/dystopia_app/chap2/Pg 8.webp",
                    "assets/manga/dystopia_app/chap2/Pg 9.webp",
                    "assets/manga/dystopia_app/chap2/Pg 10.webp",
                    "assets/manga/dystopia_app/chap2/Pg 11.webp",
                    "assets/manga/dystopia_app/chap2/Pg 12.webp",
                    "assets/manga/dystopia_app/chap2/Pg 13.webp",
                    "assets/manga/dystopia_app/chap2/Pg 14.webp",
                    "assets/manga/dystopia_app/chap2/Pg 15.webp",
                    "assets/manga/dystopia_app/chap2/Pg 16.webp",
                    "assets/manga/dystopia_app/chap2/Pg 17.webp",
                    "assets/manga/dystopia_app/chap2/Pg 18.webp",
                    "assets/manga/dystopia_app/chap2/Pg 19.webp",
                    "assets/manga/dystopia_app/chap2/Pg 20.webp",
                    "assets/manga/dystopia_app/chap2/Pg 21.webp",
                ]
            },
            {
                number: 3,
                title: "Neo Sud",
                pages: [
                    "assets/manga/dystopia_app/chap3/Cover 1.webp",
                    "assets/manga/dystopia_app/chap3/pg 1.webp",
                    "assets/manga/dystopia_app/chap3/pg 2.webp",
                    "assets/manga/dystopia_app/chap3/pg 3.webp",
                    "assets/manga/dystopia_app/chap3/pg 4.webp",
                    "assets/manga/dystopia_app/chap3/pg 5.webp",
                    "assets/manga/dystopia_app/chap3/pg 6.webp",

                ]

            }
        ],
        genre: ["Fantasy", "Action", "Videogame"],
        likes: 342
    },
    {
        id: 2,
        title: "Freedom King",
        description: "A comedy slice of life series about a group of wacky college friends.",
        coverImage: "assets/manga/freedom king/coverart.png",
        chapters: [
            {
                number: 1,
                title: "Digital Frontier",
                pages: [
                    "assets/manga/freedom king/ep3.jpg",
                ]
            },
            {
                number: 2,
                title: "Care To Share",
                pages: [
                    "assets/manga/freedom king/ep2.jpg",
                ]
            }
        ],
        genre: ["Slice of Life", "Comedy"],
        likes: 512
    }
];


// Games Collection from itchio
const gamesCollection = [
    {
        id: 1,
        title: "Dystopia App",
        description: "YOu are a Fourth Worlder, Survive!",
        coverImage: "assets/manga/dystopia_app/cover/R9_00024.webp",
        url: "https://inhumanity-arts.itch.io/dystopia-app",
        likes: 500,
        genre: ["Action", "RPG"],
    },
    {
        id: 2,
        title: "Cuboids",
        description: "Life as a 2D Cube in a 3D Cuboid World",
        coverImage: "assets/games/cuboid.png",
        url: "https://inhumanity-arts.itch.io/cuboids",
        likes: 140,
        genre: ["HyperCasual", "Point & Click"],
    },
    {
        id: 3,
        title: "Tapping Bird",
        description: "An intersellar flappy bird game!",
        coverImage: "assets/games/tappingBird.png",
        url: "https://inhumanity-arts.itch.io/tapping-bird",
        likes: 186,
        genre: ["casual", "Point & Click"],

    }];


// Get Div Elements from the DOM as constants

// Manga Div Elements
const mangaList = document.getElementById('mangaList');
const chapterList = document.getElementById('chapterList');
const mangaReader = document.getElementById('mangaReader');

// misc elements
const carousel = document.querySelector(".carousel");


// Character Div Elements
const char_wiki = document.getElementById('wiki');
const games = document.getElementById('games');
const whitepaper = document.getElementById('whitepaper');




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



function openUrl(url) {

    // open url to a new page
    //console.log("opening url: ", url);

    //open url in the same tab
    //window.location.href = url;
    window.open(url, "_blank");
}


//Navigation UI settings


function renderGamesList() {
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

    //games.style.display = "";
    console.log(games.style.display);

    //creates a Manga Card div for each element in the Manga Collection Constant
    gamesCollection.forEach(game => {

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

function renderCharactersList() {
    //renders character bio from character bio.txt
    console.log("Characters List Render Triggered");
}

function renderWhitePaperRoadMap() {
    // show the whitepaper / roadmap
    console.log("Whitepaper Render Triggered");


    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setGamesListVisibility(false);
    setCarouselVisibility(true);
    setWhitePaperVisibility(true);

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


// Home Screen & Landing Page
// Render Manga List by modifying the Manga List Div in the Dom
function renderMangaList() {
    console.log("Render Manga List Triggered ");

    mangaList.innerHTML = '';

    // Turn of chapter list & Manga Renders via css + js


    setMangaListVisibility(true);
    setChapterListVisibility(false);
    setMangaReaderVisibility(false);
    setGamesListVisibility(false);
    setWhitePaperVisibility(false);
    setCarouselVisibility(true);

    //creates a Manga Card div for each element in the Manga Collection Constant
    mangaCollection.forEach(manga => {

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

// Show Chapters for a Manga
// TO DO:
// (1) Drag & Drop
// (2) Panel View
// (3) Music
// (4) Animated Gif Pages
// (5) Pinch to zoom (Mobile)

function showChapters(manga) {
    //console.log("Show Chapters");

    currentManga = manga;

    //turn off image carousel
    setCarouselVisibility(false);
    setMangaListVisibility(false);
    setChapterListVisibility(true);
    setMangaReaderVisibility(false);
    setWhitePaperVisibility(false);

    //mangaList.style.display = 'none'; // hide the mangaList page via css scripting
    chapterList.style.display = 'block'; // change the styling of the website to full screen

    // create Button to go back to homescreen/ render Manga List
    chapterList.innerHTML = `
                <button class="btn" onclick="renderMangaList()">← Back to Manga List</button>
                <h1>${manga.title}</h1>
                <p>${manga.description}</p>
                ${manga.chapters.map(chapter => `
                    <div class="chapter-item" onclick="showReader(${chapter.number})">
                        Chapter ${chapter.number}: ${chapter.title}
                    </div>
                `).join('')}
            `;
}

// Show Manga Reader
function showReader(chapterNumber) {
    const chapter = currentManga.chapters.find(c => c.number === chapterNumber);
    currentChapter = chapter;
    currentPageIndex = 0;

    // hide the chapter list 
    //chapterList.style.display = 'none';
    setCarouselVisibility(false);
    setWhitePaperVisibility(false);
    setGamesListVisibility(false);
    setMangaListVisibility(false);
    setChapterListVisibility(false);
    setMangaReaderVisibility(true);


    // make the manga reader full screen
    mangaReader.style.display = 'block';

    renderPage();
}

// Render Current Manga Page
function renderPage() {
    //console.log("Render Page");
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


    // Add double-click zoom functionality
    // using css scale transfrom
    const readerImage = document.getElementById("readerImage");
    let isZoomed = false;

    readerImage.addEventListener("dblclick", () => {
        isZoomed = !isZoomed;
        if (isZoomed) {
            readerImage.style.transform = "scale(2)";  // Zoom in
            readerImage.style.cursor = "zoom-out";
        } else {
            readerImage.style.transform = "scale(1)";  // Reset to normal
            readerImage.style.cursor = "zoom-in";
        }
    });

    // Apply CSS for smooth zoom effect
    readerImage.style.transition = "transform 0.3s ease";
    readerImage.style.cursor = "zoom-in";  // Initial cursor state
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





// Load Landing Page
renderMangaList();