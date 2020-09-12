const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvx4BGVEBwHAxqjew3z5olNfzdPERg2m283aisagV9c0Y8UA6v0LqBkQc7eqyKv0rgksIijALCkaIOGngeZ4fx005q9CkFaQ"
);

//API

//API Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log('Payment recieved',total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/e-clone-4c840/us-central1/api
