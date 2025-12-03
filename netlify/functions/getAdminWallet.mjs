/**
 * Get Admin wallet address
 * 
 * Features:
 * (1) test the admin hot wallet configuration
 * (2) shows the hot wallet account details, address, asa and algos
 * 
 * To Do:
 * (1) expose all core algosdk features to a single class exported via netlify serverless api
 * (2) add get and post request serialisation for this api
 * (3) add firebase serverless api key for accessing these administrative functins
 * (4) fix firebase auth for this backend
 * (5) add admin api key encrytion on the client end and decryption on the server end
 * (6) expand firebase api logic into this admin api endpoint
 * (7) fetch firebase data to synchronize player ingame coins data with the hot wallet holding amounts
 */


import "dotenv/config";
//import { initializeApp } from "firebase/app";
//import { getFirestore, collection, getDocs } from "firebase/firestore";
// the hot wallet is a 24 seed univeral wallet
import algosdk from "algosdk";

//import dns from "dns";

// needed for universal wallet types
//import * as bip39 from "bip39";
//import { derivePath } from "ed25519-hd-key";

/**
 * Algonode API
 * 
 * USes nodely bunny endpoint for testing outside noth america
 * 
 * to do:
 * (1) modify api code to fetch device location and choose a free api endpoint that works well with it
 */
// Define the Algorand node connection parameters
const chain = "https://mainnet"
const algodToken = ''; // free service does not require tokens
const algodServer = chain+'-api.algonode.xyz'; // uses nodely free api, docs: https://nodely.io/docs/free/start
const algodPort = "";

// Asset ID
const assetID = "2717482658"; // replace with actual ASA ID

//create algorand client
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

let mnemonic = process.env.ADMIN_MNEMONIC;


export default async function handler(request) {
    // routes from http://localhost:8888/api/getallwallets

    try {
        //
        //serialise admin hot wallet secret key to an algorand address
    // Deserialize the admin mnemonic from environment variable

    // to do: 
    //(1) implement x api key authorization in this code
        
        if (!mnemonic) {
            throw new Error("ADMIN_MNEMONIC not found in environment variables");
        }

        status();
        
        // Return the public address
        let account = algosdk.mnemonicToSecretKey(mnemonic);
     

        // Check account balance ---
        let accountInfo = await algodClient.accountInformation(account.addr).do();

        // for local debug purposes only
        //console.log(accountInfo);

        // Find the asset in the list
        const asset = accountInfo.assets.find(a => a.assetId === BigInt(assetID));


        // Convert to human-readable string safely
        let algoAmount = Number(accountInfo.amount) / 1e6;



        //json resonse
            return new Response(JSON.stringify({ 
                admin_account: ` ${account.addr}`, 
                balance: `${algoAmount} Algos` , 
                ASA_id : asset.assetId.toString(), 
                ASA_amount: asset.amount.toString()}), {
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

// external algod based transations organised as separate functions

async function suggestedParams(){
    // Prepare a payment transaction ---
    const suggestedParams = await algodClient.getTransactionParams().do();

    return suggestedParams;
}

async function status() {
    // works
    // check algorand node connection
    // bug:
    // (1) node connection api does not account for the device region and so might break in production depending on the region
    // (2) Bugs once then works a second time then bugs a third time. very buggy implementatin for the algod client node
    try {
            const status = await algodClient.status().do();
            //console.log("Connected to Algorand node. Last round:", status["last-round"]);
            if(status){return status["last-round"];}
    } catch (connErr) {
            //console.error("Connection failed:", connErr.message);
            throw new Error("Failed to connect to Algorand node");
    }
    
}

async function pay(recipient){
    
        // Example: send 0.1 ALGO to another address
    const receiver = recipient;
    const amount = 0.1 * 1e6; // 0.1 ALGO in microalgos
    const note = new TextEncoder().encode("$SUD payment form dystopia RPG");

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: account.addr,
    to: receiver,
    amount,
    note,
    suggestedParams,
    });

    return txn;
}

async function signTxn(txn, account){
    //Sign the transaction ---
    const signedTxn = txn.signTxn(account.sk);
}

async function submitTxn(signedTxn){
    // submit a signed transaction to the algorand network
    //  Send it to the network ---
    // return the transactoin id
    const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
    //console.log("Transaction sent with ID:", txId);
    //return txId;

    // wait for transaction confirmation 
    const confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);
    return str("Transaction confirmed in round", confirmedTxn["confirmed-round"])
}

async function optIn(receiver){

    //create an opt in txn to sud tokens
    // --- (1) Create opt-in transaction ---
    const optInTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: receiver,          // the account opting in
      to: receiver,            // opt-in to self
      amount: 0,
      assetIndex: assetID,
      suggestedParams: params,
    });
    return optInTxn;
}

// would need logic arrangement
//async function groupedTxn(txn1, txn2){
    // atomically group 2 or more transactions into one
//    const txns = [txn1, txn2];
//    const groupID = algosdk.computeGroupID(txns);
//    for (let txn of txns) txn.group = groupID;


//}

async function burn(amt_to_burn){
    const amountToBurn = amt_to_burn;
    const burnAddress = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";

    let params = await suggestedParams();

    // Construct asset transfer transaction to burn address
    const burnTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: account.addr,
      to: burnAddress,
      amount: amountToBurn,
      assetIndex: assetID,
      suggestedParams: params,
      note: new Uint8Array(Buffer.from(`Burn ${amountToBurn} transaction`)),
    });

    // Sign transaction
    const signedTxn = burnTxn.signTxn(account.sk);

    //return the signed transaction for submission to the chain
    return signedTxn;
}