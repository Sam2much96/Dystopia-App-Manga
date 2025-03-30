/**
 * Dystopia App Serverless Backend
 * 
 * 
 * Features:
 * (1) Serialises DB and blockchain functionality to the mobile and pc app via api -> abi -> JSON calls
 */


// Netlify Serverless FUnction for securely fetching manga database data from the backend
// TO DO: 
// (4) 4 api functions ; 
// (c) an admin account for txn fees and app calls
// (d) api versioning 
// (e) Account ASA data serialisation to json
// (f) Algorand SDK serialisation to api routes using algopy json and Networking.gd proper


import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import algosdk from "algosdk";
import "dotenv/config"; // Auto-loads .env variables in local dev



// Define the app functions here using algosdk



// Algorand Node Configuration to nodely using their free rate service
const ALGOD_SERVER = "https://testnet-api.4160.nodely.dev"; // Use PureStake or another provider
const ALGOD_PORT = 443;
const ALGOD_TOKEN = ""; // If using PureStake


// configure for testnet or mainnet

const getNodeStatus = async () => {
    try {
        // Connect to Algorand client
        const algodClient = new algosdk.Algodv2(ALGOD_TOKEN, ALGOD_SERVER, ALGOD_PORT);
        const check_status = await algodClient.status().do();
        //console.log('Node status:', status);
        if (check_status) {
            return 200;
        }
        else return 500;
    } catch (err) {
        console.error('Failed to get node status:', err);
        return 500;
    }
}

// Smart Contract Details
//const APP_ID = 123456; // Replace with your RPG Escrow Smart Contract ID



// expose algosdk client creation here.

// construct an ATC for making calls to the smart contract

// use the hashed secret for on-chain auth


// Async serverless function exposes algorand client operations returns to the User
// serialising the data as HTTP request errors supported in Networking.gd

export default async function handler(request) {



    try {

        const SENDER_MNEMONIC = process.env.ADMIN_MNEMONIC; // Securely load from env


        //decode mnemonic to aacount public ket and secret key
        const account = algosdk.mnemonicToSecretKey(SENDER_MNEMONIC);

        //serialise public key to address
        const AdminAddress = algosdk.encodeAddress(account.addr.publicKey);

        const nodeStatus = await getNodeStatus();

        console.log("Node debug: ", nodeStatus);
        //const accountDetails = await algodClient.accountInformation(AdminAddress).do();

        //const assetDetails = await algodClient.accountAssetInformation(AdminAddress, )

        // json response
        return new Response(JSON.stringify({ "admin": AdminAddress, "status": nodeStatus }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to load Wallet database", details: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}