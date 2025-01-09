// TO Do:
// (1) DOcument Code
// (2) Fix ads code in header tags
// Java script
// Manga Collection Data
const mangaCollection = [
    {
        id: 1,
        title: "Dystopia App",
        description: "YOu are a Fourth Worlder, Survive!",
        coverImage: "https://i.imgur.com/FmbY1NG.jpeg",
        chapters: [
            {
                number: 1,
                title: "The Money Heist",
                pages: [
                    "https://i.imgur.com/FmbY1NG.jpeg",
                    "https://i.imgur.com/4X7qvxg.png",
                    "https://i.imgur.com/er29q1L.jpeg",
                    "https://i.imgur.com/6Cz6An3.jpeg",
                    "https://i.imgur.com/oxatfZz.jpeg",
                    "https://i.imgur.com/GASGr1g.jpeg",
                    "https://i.imgur.com/Yj2yEnZ.jpeg",
                    "https://i.imgur.com/Zh76kmj.jpeg",
                    "https://i.imgur.com/GHwi5JK.jpeg",
                    "https://i.imgur.com/fyWTMaI.jpeg",
                    "https://i.imgur.com/3JND1Dv.jpeg",
                    "https://i.imgur.com/PZQyGKw.jpeg",
                    "https://i.imgur.com/BIGgLQY.jpeg",
                    "https://i.imgur.com/GocQYND.jpeg",
                    "https://i.imgur.com/STnJQY9.jpeg",
                    "https://i.imgur.com/6zfbnmW.jpeg",
                    "https://i.imgur.com/EszeAQc.jpeg",
                    "https://i.imgur.com/1G1uznq.jpeg",
                    "https://i.imgur.com/XsnEtDm.jpeg",
                    "https://i.imgur.com/uFo1tZ1.jpeg"
                ]
            },
            {
                number: 2,
                title: "Kpo Kop (Police)",
                pages: [
                    "https://i.imgur.com/wUt8rzf.jpeg",
                    "https://i.imgur.com/qSqoZBZ.jpeg"
                ]
            }
        ],
        genre: ["Fantasy", "Adventure"],
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

// DOM Elements
const mangaList = document.getElementById('mangaList');
const chapterList = document.getElementById('chapterList');
const mangaReader = document.getElementById('mangaReader');

// State Management
let currentManga = null;
let currentChapter = null;
let currentPageIndex = 0;

// Render Manga List
function renderMangaList() {
    mangaList.innerHTML = '';
    chapterList.style.display = 'none';
    mangaReader.style.display = 'none';

    mangaCollection.forEach(manga => {
        const mangaCard = document.createElement('div');
        mangaCard.className = 'manga-card';
        mangaCard.innerHTML = `
                    <img src="${manga.coverImage}" alt="${manga.title}">
                    <div class="manga-card-content">
                        <h2>${manga.title}</h2>
                        <p>${manga.genre.join(', ')}</p>
                        <div>❤️ ${manga.likes} Likes</div>
                    </div>
                `;
        mangaCard.onclick = () => showChapters(manga);
        mangaList.appendChild(mangaCard);
    });
}

// Show Chapters for a Manga
function showChapters(manga) {
    currentManga = manga;
    mangaList.style.display = 'none';
    chapterList.style.display = 'block';

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

    chapterList.style.display = 'none';
    mangaReader.style.display = 'block';

    renderPage();
}

// Render Current Page
function renderPage() {
    const currentPage = currentChapter.pages[currentPageIndex];

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

// Initialize App
renderMangaList();