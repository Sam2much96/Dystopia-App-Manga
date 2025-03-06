// Netlify Serverless FUnction for securely fetching manga database data from the backend
// TO DO: 
// (1) Return Data as tuple, i.e. MangaData, GamesData and Shop Data
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export default async function handler() {


    try {
        const filePath = join(process.cwd(), "data", "../data/manga.json");
        const jsonData = readFileSync(filePath, "utf-8"); // Read raw JSON as string

        return new Response(jsonData, {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to load manga database", details: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}