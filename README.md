📌 Functions:
1️⃣ Auto generates static manga pages in html for each entry in the manga database.
2️⃣ Set up a Netlify function (render.js) to dynamically serve HTML.




Recent Updates that improve your Dystopia App Manga site for AdSense, SEO, and fast rendering on Netlify:
✅ Step 1: Enable Static & Dynamic Rendering

🔹 Pre-render important manga pages as static HTML (faster for crawlers).
🔹 Dynamically render other pages using Netlify Functions (render.js).

📌 Action:
1️⃣ Create generate-pages.js to pre-render key manga pages.
2️⃣ Set up a Netlify function (render.js) to dynamically serve HTML.
3️⃣ Add _redirects to create clean URLs.
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

🔹 Use Netlify Redirects (_redirects) to simplify URLs.
🔹 Enable Netlify Caching for faster page loads.
🔹 Optimize images (WebP format) to reduce load time.

📌 Action:
1️⃣ Store images in /public or a CDN for fast delivery.
2️⃣ Set up caching rules in netlify.toml.
3️⃣ Use _redirects for clean URLs.


 Static pre-rendering (generate-pages.js)
✔ Dynamic HTML rendering (render.js + _redirects)
✔ SEO-optimized pages (titles, meta descriptions)
✔ sitemap.xml generated & submitted
✔ AdSense crawler verification (URL Inspection test)
✔ Netlify optimizations (caching, images, redirects)



Locally Debug and Test with
`npx netlify --version && npx netlify dev`

Check Netlify's Status
`netlify status`

Check Netlify's Logs
`netlify logs`

Debug Redirects and Headers
`netfliy dev --debug`

Test Serverless Functins Locally
`netlify functions:server`

Test Build Locally Befor Deploying
`netlify build`

Test A Deploy without affecting Production
`netlify deploy --build --draft`

Run functions locally	`netlify dev`
List available functions	`netlify functions:list`
Test GET function	`curl http://localhost:8888/.netlify/functions/<function-name>`
Test POST function	`curl -X POST http://localhost:8888/.netlify/functions/<function-name> -d '{}'`
Debug logs	`netlify dev --debug`
Serve only functions	`netlify functions:serve`
Deploy for testing	`netlify deploy --build --draft`


How to Build & Test

Run `npm run generate && npx netlify dev --verbose`