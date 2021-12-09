const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51K2x5uDOrR8ZypZ0nl02lEizuSb76OCpMM9q2WOuCCXYy2IlnjkD5UsF5vLd3B9wcKEwpZ8WzXjgwyfiYcSkeq3200JHq1IxXj"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/elbay-a3a34/us-central1/api
