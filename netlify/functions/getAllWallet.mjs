/**
 * Get All Wallet
 * 
 * Gets All Wallet Addresses From Firebase DB
 * 
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
const getUsers = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = [];


        querySnapshot.forEach((doc) => {
            const data = { id: doc.id, ...doc.data() }; // Spread operator to copy data

            delete data.mnemonic; // Exclude mnemonic field for security

            users.push(data);
        });

        const jsonResponse = JSON.stringify(users, null, 2); // Pretty print JSON

        //console.log(jsonResponse);

        return jsonResponse; // Return as JSON
    } catch (error) {
        console.error("Error fetching users:", error);
        return JSON.stringify({ error: error.message }); // Return error as JSON
    }
};


export default async function handler(request) {
    // routes from http://localhost:8888/api/getallwallets

    try {
        const usersJSON = await getUsers();


        // json response
        return new Response(usersJSON, {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }
    catch (error) {
        return new Response(JSON.stringify({ error: "Failed to load player database", details: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });

    }
}