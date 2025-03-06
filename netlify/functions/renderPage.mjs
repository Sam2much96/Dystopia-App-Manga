/**
 * Renders Pages Dynamically Using Netlify's Serverless functions
 * Used for less popular/ new manga uploads
 * Is slower than generated static pages
 * 
 * @param {*} event 
 * @returns 
 */

export async function handler(event, context) {
    console.log("Serverless func debug: ", event);
    const { path } = event;
    const match = path.match(/\/manga\/([^/]+)\/chapter\/(\d+)/);

    if (!match) {
        return {
            statusCode: 404,
            body: "Not Found",
        };
    }

    const mangaId = match[1];
    const chapter = match[2];

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Read ${mangaId} - Chapter ${chapter} online.">
            <title>${mangaId} - Chapter ${chapter}</title>
        </head>
        <body>
            <h1>${mangaId} - Chapter ${chapter}</h1>
            <p>Read this chapter dynamically generated!</p>
            <img src="/images/${mangaId}/ch${chapter}/page1.jpg" alt="Manga Page">
        </body>
        </html>
    `;

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: html,
    };
};