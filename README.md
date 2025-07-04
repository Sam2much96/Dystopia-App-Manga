**Dystopia App Manga Website**

# TO DO

(1) Fix this shit (1/2)
(2) Document it (1/3)
(3) Store setup /page inn address path
(4) .svg pages for translations (0/5)
(5) batch inking using inkscape

# Features:

(1) Static rendered pages for seo

📌 Functions:
1️⃣ Auto generates static manga pages in html for each entry in the manga database.
2️⃣ Set up a Netlify function (render.js) to dynamically serve HTML.
(3) Static Manga Chapter Generator
(4) Sitemap generator for manga and animated video content

Recent Updates that improve your Dystopia App Manga site for AdSense, SEO, and fast rendering on Netlify:
✅ Step 1: Enable Static & Dynamic Rendering

🔹 Pre-render important manga pages as static HTML (faster for crawlers).
🔹 Dynamically render other pages using Netlify Functions (render.js).

📌 Action:
1️⃣ Create generate-pages.js to pre-render key manga pages.
2️⃣ Set up a Netlify function (render.js) to dynamically serve HTML.
3️⃣ Add \_redirects to create clean URLs.
✅ Step 2: Make Pages SEO-Friendly

🔹 Use <meta> tags in every page for better indexing.
🔹 Ensure titles and descriptions match the manga content.

📌 Action:
1️⃣ Update render.js to include <title> and <meta name="description">.
2️⃣ Use readable, structured URLs like /manga/onepiece/chapter/1010.
✅ Step 3: Generate a Sitemap

🔹 Helps AdSense & Googlebot index all pages.
🔹 Ensures new manga chapters get discovered fast.

📌 Action:
1️⃣ Create generate-sitemap.js to generate sitemap.xml.
2️⃣ Run it during Netlify deployment (netlify.toml).
3️⃣ Submit sitemap.xml to Google Search Console.
✅ Step 4: Optimize for AdSense Crawlers

🔹 Ensure all pages return full HTML (not just JavaScript-rendered content).
🔹 Use static pre-rendering for key manga chapters.
🔹 Test with Google’s "Mobile-Friendly Test" and "URL Inspection" tools.

📌 Action:
1️⃣ Check that all manga pages load properly without JavaScript execution.
2️⃣ Test a sample page in Google Search Console → URL Inspection.
✅ Step 5: Improve Performance on Netlify

🔹 Use Netlify Redirects (\_redirects) to simplify URLs.
🔹 Enable Netlify Caching for faster page loads.
🔹 Optimize images (WebP format) to reduce load time.

📌 Action:
1️⃣ Store images in /public or a CDN for fast delivery.
2️⃣ Set up caching rules in netlify.toml.
3️⃣ Use \_redirects for clean URLs.

Static pre-rendering (generate-pages.js)
✔ Dynamic HTML rendering (render.js + \_redirects)
✔ SEO-optimized pages (titles, meta descriptions)
✔ sitemap.xml generated & submitted
✔ AdSense crawler verification (URL Inspection test)
✔ Netlify optimizations (caching, images, redirects)

# Login Netlify for testing

`npx netlify login`

# Check Netlify Account Status

`npx netlify status`

# Locally Debug and Test with

`npx netlify --version && npx netlify dev`

# Check Netlify's Status

`netlify status`

Check Netlify's Logs
`netlify logs`

Debug Redirects and Headers
`netfliy dev --debug`

Test Serverless Functins Locally
`netlify functions:serve`

Test Build Locally Befor Deploying
`netlify build`

Test A Deploy without affecting Production
`netlify deploy --build --draft`

Run functions locally `netlify dev`
List available functions `netlify functions:list`
Test GET function `curl http://localhost:8888/.netlify/functions/<function-name>`
Test POST function `curl -X POST http://localhost:8888/.netlify/functions/<function-name> -d '{}'`
Debug logs `netlify dev --debug`
Serve only functions `netlify functions:serve`
Deploy for testing `netlify deploy --build --draft`

How to Build & Test

Run `npm run generate && npx netlify dev --verbose`

API Database
call `https://dystopia-app.site/api/manga` to fetch securely manga database for the side as json

🖼️ Dynamic Resizing

Dynamic resizing is the process of modifying images on the fly before delivering them to the user. Instead of storing multiple versions of the same image in different sizes, a server or image processing service resizes the image dynamically based on the request.
🔍 Example of Dynamic Resizing in Action

Imagine you have a manga cover stored as:
https://example.com/manga/dystopia_app/cover.png
Without Dynamic Resizing (Static)

    You must manually create and store multiple versions of the image:
        Full size: cover-large.png (1200px)
        Medium size: cover-medium.png (600px)
        Thumbnail: cover-small.png (150px)
    This takes up more storage and slows down deployment.

With Dynamic Resizing

    The server automatically resizes the image when requested.
    Instead of storing different versions, you can request on-the-fly resizing:

https://example.com/manga/dystopia_app/cover.png?width=600

    If a user requests width=600, the server sends back an optimized 600px-wide version.
    This reduces bandwidth and improves page speed.

🌍 Implementing Multilingual Support Without Duplicating/Modifying Images

If you want to add multiple languages to your manga site without duplicating images, you can apply a similar approach to dynamic resizing, but for text overlays and metadata instead of images.
🔥 Best Approaches for Multilingual Support (Without Image Duplication)
1️⃣ Dynamic Text Overlays (Server-Side Image Processing)

    Instead of modifying images, use a serverless function (Netlify, Cloudflare Workers) or an image CDN (Cloudinary, Imgix, etc.) to overlay translated text dynamically onto existing images.
    The image remains the same, but the text is added on request based on the user's language preference.

Example (Cloudinary Dynamic Overlay)

<img src="https://res.cloudinary.com/demo/image/upload/l_text:Arial_50:Hola!/manga/dystopia_app/cover.png" />

    The URL dynamically overlays "Hola!" onto the existing image without modifying the original file.

2️⃣ JSON-Based Translations + Client-Side Overlay

    Instead of modifying images, store translated text separately in JSON files and overlay it using CSS or JavaScript.
    This is lightweight and fast, requiring no image duplication.

Example JSON Translation File (translations.json)

{
"en": {
"title": "Dystopia App",
"description": "You are a Fourth Worlder, Survive!"
},
"es": {
"title": "Aplicación Distópica",
"description": "Eres un Cuarto Mundialista, ¡Sobrevive!"
}
}

How to Use It in JavaScript

async function loadTranslation(lang) {
const res = await fetch("/data/translations.json");
const translations = await res.json();
document.getElementById("title").innerText = translations[lang].title;
document.getElementById("description").innerText = translations[lang].description;
}

// Detect user language or default to English
const userLang = navigator.language.startsWith("es") ? "es" : "en";
loadTranslation(userLang);

🔹 Advantages:
✅ No image modification needed.
✅ Works without server-side processing.
✅ Lightweight & SEO-friendly when paired with prerendering.
3️⃣ URL-Based Language Switching (SEO-Friendly)

    Use URL parameters (?lang=es) or subdirectories (/es/manga/dystopia_app/).
    This tells search engines that multiple language versions exist.

Example URL Structure

https://example.com/manga/dystopia_app/ (Default English)
https://example.com/es/manga/dystopia_app/ (Spanish Version)

How It Works:

    Store all text separately in a JSON or database.
    Serve the same images, but dynamically load the translated text based on the URL.
    Use hreflang meta tags to tell search engines about different language versions.

Example HTML Meta Tag for SEO

<link rel="alternate" hreflang="en" href="https://example.com/manga/dystopia_app/" />
<link rel="alternate" hreflang="es" href="https://example.com/es/manga/dystopia_app/" />

4️⃣ Server-Side Rendering with Netlify Functions

    Instead of using JavaScript to replace text after the page loads, prerender the correct language using a Netlify function.

Example Netlify Function (getManga.js)

export async function handler(event) {
const lang = event.queryStringParameters.lang || "en";
const translations = {
en: { title: "Dystopia App", description: "You are a Fourth Worlder, Survive!" },
es: { title: "Aplicación Distópica", description: "Eres un Cuarto Mundialista, ¡Sobrevive!" }
};

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(translations[lang])
    };

}

🔹 How It Works:

    Fetches the correct language before rendering the page.
    Works well with static page generation.

🚀 Which Approach is Best for You?
Approach Pros Cons
Dynamic Text Overlays (Cloudinary, Sharp.js) No image duplication, works on any device Needs an image processing server/CDN
JSON-Based Translation (Client-Side JavaScript) Fast, easy, SEO-friendly with prerendering Requires JavaScript to display translations
URL-Based Language Switching (/es/manga/...) Best for SEO, fully static Requires separate URLs per language
Server-Side Rendering (Netlify Functions, API Calls) Fully dynamic, no JS needed Slightly slower, needs a backend
🎯 Best Combination for Your Manga Site

    For SEO & Performance: Use URL-based language switching (/es/manga/...) with hreflang meta tags.
    For Simplicity: Use JSON-based translations with client-side JavaScript.
    For Image-Heavy Content: Use dynamic text overlays with Cloudinary or a Netlify Function.

🔹 API redirects

Netlify.Toml redirects api calls to the backend smartcontract getDapp,mjs

✅ 1. Sync Netlify Environment Variables Locally

Run the following command in your project directory:

netlify

# Build And Deploy Smart Contract TO Testnet / Mainnet

cd into backend/hasked time lock/ contract/projects/Contract/smart_contracts and run algokit project run build

# To Do:

(1) Add blog posts to reach word count treshhold
(2) Add .svg pages for manga translations
