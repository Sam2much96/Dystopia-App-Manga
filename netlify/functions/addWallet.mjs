/**
 * Add Wallet API Route
 * 
 * Features:
 * (1) Creates a new wallet from an api post call
 * (2) It creates a database option in firebase which saves the player's wallet details securely
 * 
 */

import "dotenv/config";
import algosdk from "algosdk";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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



const addUser = async (name, address, mnemonic) => {
    try {
        await addDoc(collection(db, "users"), {
            name: name || "unknown",
            address: typeof address === "object" ? JSON.stringify(address) : address,
            mnemonic: mnemonic || ""
        });
        console.log("User added!");
    } catch (e) {
        console.error("Error adding user: ", e);
    }
};




export default async function handler(request) {
    // routed to http://localhost:8888/api/addwallet?name=user

    if (request.method === "GET") {



        const url = new URL(request.url);
        const name = url.searchParams.get("name");

        // create new wallet in firebase database with this user's name
        // generate a new address for the player 
        const UserAddress = algosdk.generateAccount();
        const userPub = algosdk.encodeAddress(UserAddress.addr.publicKey);
        const userPk = algosdk.secretKeyToMnemonic(UserAddress.sk);

        addUser(name, userPub, userPk);


        return new Response(JSON.stringify({ message: `new user created! ${name}` }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
    });
}