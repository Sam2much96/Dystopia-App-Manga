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
 * 
 * 
 * To Do
 * (1) Proper State Management Using a simple state machine
 * (2) Fix Ads Code in header
 * (3) Add New Tag for recent updates
 */



// Image Header carusoel Interactivity for pause on hover
const track = document.querySelector(".carousel-track");

track.addEventListener("mouseover", () => {
    track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
});



// 
// Manga Collection Data
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
                title: "Kpo Kop (Police)",
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
            }
        ],
        genre: ["Fantasy", "Adventure", "Videogame"],
        likes: 342
    },
    {
        id: 2,
        title: "Cyber Pulse",
        description: "A futuristic cyberpunk thriller in a neon-lit metropolis.",
        coverImage: "https://i.imgur.com/ABC456.jpg",
        chapters: [
            {
                number: 1,
                title: "Digital Frontier",
                pages: [
                    "https://i.imgur.com/cyberpage1.jpg",
                    "https://i.imgur.com/cyberpage2.jpg"
                ]
            }
        ],
        genre: ["Sci-Fi", "Cyberpunk"],
        likes: 512
    }
];




// Get Div Elements from the DOM as constants

// Manga Div Elements
const mangaList = document.getElementById('mangaList');
const chapterList = document.getElementById('chapterList');
const mangaReader = document.getElementById('mangaReader');

// misc elements
const carousel = document.querySelector(".carousel");


// State Management
let currentManga = null;
let currentChapter = null;
let currentPageIndex = 0;


function visibility(layer) {
    /**
     * Toggles Visibility On /Off Each Dom Element
     */


}

function setCarouselVisibility(isVisible) {
    // toggles the visibility of the carousel
    if (isVisible == true) {
        carousel.classList.remove("hidden"); // Show the carousel
    } else {
        carousel.classList.add("hidden"); // Hide the carousel
    }
}


// Home Screen
// Render Manga List by modifying the Manga List Div in the Dom
function renderMangaList() {
    //console.log("Render Manga List: ", mangaList.style.display);

    mangaList.innerHTML = '';

    // Turn of chapter list & Manga Renders via css
    // set Manga list display to empty string
    mangaList.style.display = "";
    chapterList.style.display = 'none';
    mangaReader.style.display = 'none';

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
function showChapters(manga) {
    //console.log("Show Chapters");

    currentManga = manga;

    //turn off image carousel
    setCarouselVisibility(false);

    mangaList.style.display = 'none'; // hide the mangaList page via css scripting
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
    chapterList.style.display = 'none';

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



// Load Langind Page
renderMangaList();