const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require('stripe')('sk_test_51Hmt39A4I7jSJrERkVtdWH5E0IWNHNy2cGhj3srhuaC4lZ0InqaxmNhfzlghbxCiyZ7MkoAKtmeSxpZbKu34g95X00DOaKDJQ9')

// API 

// -App Config
const app = express();

// -Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// -API Routes
app.get('/',(request, response) => response.status(200).send('Hello World'))

app.post("/payments/create", async(request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received BOOM! for this amount >>> ", total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK- Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// -Listen Command
exports.api = functions.https.onRequest(app)

// example Endpoint
// http://localhost:5001/clone-b0f4c/us-central1/api

