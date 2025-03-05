// netlify/functions/renderPage.js

// Replicating your manga.js chapter data
//To DO: replace with jsoon data loads
const chapters = [
    {
        id: 1,
        title: "Dystopia App",
        description: "You are a Fourth Worlder, Survive!",
        coverImage: "assets/manga/dystopia_app/cover/cover 1dd.png",
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
                title: "Police!",
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

            },
            {
                number: 4,
                title: "Artbook 1",
                pages: [
                    "assets/manga/dystopia_app/cover/title-art_2.webp",
                    "assets/manga/dystopia_app/cover/shot 100.jpg",
                    "assets/manga/dystopia_app/cover/concept_art_2.webp",
                    "assets/manga/dystopia_app/cover/raw 3 Dystopia Bckgrnd-1.webp",
                    "assets/manga/dystopia_app/cover/pg 3.webp",
                    "assets/manga/dystopia_app/cover/Background 004.jpg",
                    "assets/manga/dystopia_app/cover/shot 58.png",
                    "assets/manga/dystopia_app/cover/file000p0.jpg",
                    "assets/manga/dystopia_app/cover/shot 57.png",
                    "assets/manga/dystopia_app/cover/shot 100.jpg",
                    "assets/manga/dystopia_app/cover/pg 25.jpg",
                    "assets/manga/dystopia_app/cover/cover 1dd.png",
                    "assets/manga/dystopia_app/cover/cover 2.jpg",
                    "assets/manga/dystopia_app/cover/chap 6 cover art 2.jpg",
                    "assets/manga/dystopia_app/cover/Background and foreground assets shot  6.jpg",
                    "assets/manga/dystopia_app/cover/shot 58.png",
                    "assets/manga/dystopia_app/cover/shot 49.png",
                    "assets/manga/dystopia_app/cover/concept_art.webp",
                    "assets/manga/dystopia_app/cover/shot 39 background.webp",
                    "assets/manga/dystopia_app/cover/cover 2.jpg"

                ]
            },
            {
                number: 5,
                title: "The Hunt for Worlogog",
                pages: [
                    "assets/manga/dystopia_app/chap4/Cover 2.webp",
                    "assets/manga/dystopia_app/chap4/pg 1.webp",
                    "assets/manga/dystopia_app/chap4/pg 2.webp",
                    "assets/manga/dystopia_app/chap4/pg 3.webp",
                    "assets/manga/dystopia_app/chap4/pg 4.webp",
                    "assets/manga/dystopia_app/chap4/pg 5.webp",
                    "assets/manga/dystopia_app/chap4/pg 6.webp",
                    "assets/manga/dystopia_app/chap4/pg 7.webp",
                    "assets/manga/dystopia_app/chap4/pg 8.webp",
                    "assets/manga/dystopia_app/chap4/pg 9.webp",
                    "assets/manga/dystopia_app/chap4/pg 10.webp",
                    "assets/manga/dystopia_app/chap4/pg 11.webp",
                    "assets/manga/dystopia_app/chap4/pg 12.webp",
                    "assets/manga/dystopia_app/chap4/pg 13.webp",
                    "assets/manga/dystopia_app/chap4/pg 14.webp",
                    "assets/manga/dystopia_app/chap4/pg 15.webp",
                    "assets/manga/dystopia_app/chap4/pg 16.webp",
                    "assets/manga/dystopia_app/chap4/pg 17.webp",
                    "assets/manga/dystopia_app/chap4/pg 18.webp",
                    "assets/manga/dystopia_app/chap4/pg 19.webp",
                    "assets/manga/dystopia_app/chap4/pg 20.webp",
                    "assets/manga/dystopia_app/chap4/pg 21.webp",
                    "assets/manga/dystopia_app/chap4/pg 22.webp"
                ]
            },
            {
                number: 6,
                title: "Aarin's Story",
                pages: [
                    "assets/manga/dystopia_app/chap5/chap 1 cover page.webp",
                    "assets/manga/dystopia_app/chap5/1.jpg",
                    "assets/manga/dystopia_app/chap5/a1.webp",
                    "assets/manga/dystopia_app/chap5/b1.webp",
                    "assets/manga/dystopia_app/chap5/b2.webp",
                    "assets/manga/dystopia_app/chap5/b3.webp",
                    "assets/manga/dystopia_app/chap5/b4.webp",
                    "assets/manga/dystopia_app/chap5/b5.webp",
                    "assets/manga/dystopia_app/chap5/b6.jpg",
                    "assets/manga/dystopia_app/chap5/b6.5.webp",
                    "assets/manga/dystopia_app/chap5/b7.webp",
                    "assets/manga/dystopia_app/chap5/b8.jpg",
                    "assets/manga/dystopia_app/chap5/b9.jpg",
                    "assets/manga/dystopia_app/chap5/b10.webp",
                    "assets/manga/dystopia_app/chap5/b11.webp",
                    "assets/manga/dystopia_app/chap5/b12.webp",
                    "assets/manga/dystopia_app/chap5/b13.webp",
                    "assets/manga/dystopia_app/chap5/b14.webp",
                    "assets/manga/dystopia_app/chap5/b15.jpg",
                    "assets/manga/dystopia_app/chap5/b16.webp",
                    "assets/manga/dystopia_app/chap5/b17.webp",
                    "assets/manga/dystopia_app/chap5/b18.jpg",
                    "assets/manga/dystopia_app/chap5/b19.webp",
                    "assets/manga/dystopia_app/chap5/b20.jpg",
                    "assets/manga/dystopia_app/chap5/b21.webp",
                    "assets/manga/dystopia_app/chap5/b22.webp",
                    "assets/manga/dystopia_app/chap5/b23.webp",
                    "assets/manga/dystopia_app/chap5/b24.webp",
                    "assets/manga/dystopia_app/chap5/b25.webp",
                    "assets/manga/dystopia_app/chap5/b26.webp",
                    "assets/manga/dystopia_app/chap5/b27.webp"
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
                title: "DragonBall Z Sparking Zero",
                pages: [
                    "assets/manga/freedom king/ep1.webp"
                ]
            },
            {
                number: 2,
                title: "Digital Frontier",
                pages: [
                    "assets/manga/freedom king/ep3.jpg",
                ]
            },
            {
                number: 3,
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


exports.handler = async (event, context) => {
    const chapterNumber = event.queryStringParameters.chapter || "1";
    const chapter = findChapter(chapterNumber);

    if (!chapter) {
        return {
            statusCode: 404,
            headers: { "Content-Type": "text/html" },
            body: "<p>Chapter not found.</p>",
        };
    }

    const imagesHtml = renderPages(chapter);
    const htmlContent = generateHtmlContent(chapterNumber, imagesHtml);

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: htmlContent,
    };
};

function findChapter(chapterNumber) {
    for (const manga of chapters) {
        const chapter = manga.chapters.find(c => c.number.toString() === chapterNumber);
        if (chapter) return chapter;
    }
    return null;
}

function renderPages(chapter) {
    return chapter.pages.map(
        (src, index) => `
            <img src="${src}" alt="Manga Chapter ${chapter.number} Page ${index + 1}" style="max-width: 100%; margin-bottom: 20px;" />`
    ).join("");
}

function generateHtmlContent(chapterNumber, imagesHtml) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dystopia App Manga - Chapter ${chapterNumber}</title>
        <meta name="description" content="Read Chapter ${chapterNumber} of Dystopia App Manga.">
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <header>
          <h1>Dystopia App Manga</h1>
        </header>
        <main>
          <h2>Chapter ${chapterNumber}</h2>
          <div id="manga-container">
            ${imagesHtml}
          </div>
        </main>
        <footer>
          <p>&copy; ${new Date().getFullYear()} Dystopia App Manga</p>
        </footer>
        <script src="/manga.js"></script>
      </body>
    </html>`;
}
