const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51N41WGSEfTqFbE7odOTNE8scDM4MfogYKq88PWJRobRJtOr1pzU8fKCOQrovioengIrIAjLqai5wEU8iZPR1ExI9006IC3UEB9');

// API (we are setting an API here)

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;
    console.log('payement request received (function invoked) for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "inr",
    });
    // OK - Created (200 means everthing is good & 201 means everything is good and something is created)
    response.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
//http://127.0.0.1:5001/clone-fb-cc1d7/us-central1/api