//generate-sitemap.js (Generate Sitemap for AdSense & SEO)

import { writeFileSync, readFileSync } from 'fs';

const baseUrl = "https://dystopia-app.site";
const lastMod = new Date().toISOString().split('T')[0]; // Today's date

const mangaDatabase = JSON.parse(readFileSync("./data/manga.json", "utf-8"));


console.log(`✅ Loaded Sitemap Database`); // Check if the data loads correctly

//const animeDatabase = JSON.parse(readFileSync("./data/anime.json", "utf-8"));
//console.log(`✅ Loaded Sitemap Database 2`); // Check if the data loads correctly



let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${baseUrl}/</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>1.0</priority>
    </url>`;

// Add main manga page
sitemapContent += `
    <url>
        <loc>${baseUrl}/index.html</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>0.4</priority>
    </url>`;

//add privacy policy
sitemapContent += `
    <url>
        <loc>${baseUrl}/policy.html</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>0.9</priority>
    </url>`;

mangaDatabase.forEach(({ id, title, chapters }) => {
    //const mangaSlug = title.toLowerCase().replace(/\s+/g, "-"); // Convert title to URL slug



    // Add chapter list page
    sitemapContent += `
    <url>
        <loc>${baseUrl}/dist/manga/${id}/chapterlist.html</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>0.85</priority>
    </url>`;

    // Add chapter pages
    chapters.forEach(({ number }) => {
        sitemapContent += `
    <url>
        <loc>${baseUrl}/dist/manga/${id}/chapter-${number}.html</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>0.8</priority>
    </url>`;
    });
});


// Add YouTube videos from anime.json
// To DO: add video duration data to database
/** 
animeDatabase.forEach(({ title, description, thumbnail, videoUrl, videoId, duration }) => {
    sitemapContent += `
    <url>
        <loc>${baseUrl}/anime</loc> 
        <video:video>
            <video:thumbnail_loc>${thumbnail}</video:thumbnail_loc>
            <video:title>${title}</video:title>
            <video:description>${description}</video:description>
            <video:content_loc>https://www.youtube.com/watch?v=${videoId}</video:content_loc>
            <video:player_loc>${videoUrl}</video:player_loc>
            <video:duration>${duration}</video:duration> 
            <video:publication_date>${lastMod}</video:publication_date>
            <video:category>Animation</video:category>
            <video:uploader>Inhumanity Studios</video:uploader>
        </video:video>
    </url>`;
});
*/

sitemapContent += "\n</urlset>";

writeFileSync("sitemap.xml", sitemapContent, "utf8");

console.log("✅ Sitemap.xml generated successfully!");
