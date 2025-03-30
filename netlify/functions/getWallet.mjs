/**
 * Get Wallet API Route
 * 
 * Get's Player's wallet by name from firebase db and 
 * serialises the wallet address details to json
 */


import "dotenv/config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Retrieve data
const getUserByName = async (name) => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        let userData = null; // Store user data

        querySnapshot.forEach((doc) => {
            const data = { id: doc.id, ...doc.data() };

            if (data.name === name) {
                delete data.mnemonic; // Exclude sensitive data
                userData = data; // Store found user data
            }
        });

        if (!userData) {
            return JSON.stringify({ error: "User not found" }); // Return error if no user found
        }

        return JSON.stringify(userData, null, 2); // Return user data as formatted JSON
    } catch (error) {
        console.error("Error fetching user:", error);
        return JSON.stringify({ error: error.message }); // Return error as JSON
    }
};


export default async function handler(request) {

    // routed to http://localhost:8888/api/getwallet?name=user

    if (request.method === "GET") {

        const url = new URL(request.url);
        const name = url.searchParams.get("name");

        const userJSON = await getUserByName(name);

        return new Response(userJSON, {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }

}