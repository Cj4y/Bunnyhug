const functions = require("firebase-functions");
const cors = require('cors');
const express = require('express');
const stripe = require('stripe')('');
const client_secret = 'null'; //TODO

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//create instance of express app
const app = express();

app.use(cors({
  origin: true
}));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
  try {
    const { amount, shipping } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      shipping,
      amount,
      currency: 'cad'
    });

    res
      .status(200)
      .send(paymentIntent.client_secret);

  } catch (err) {
    res
      .status(500)
      .json({
        statusCode: 500,
        message: err.message
      });
  }
})

//create 404 route that takes request and response objects
app.get('*', (req, res) => {
  res
    .status(404)
    .send('404, Not Found.');
});

//instead of hardcode address
exports.api = functions.https.onRequest(app);
