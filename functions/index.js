const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Pd8shRxH2GFSI8Sl4xp6aYmSjRcYdtqbPG425an8QDbUPuAXwbyRHlL37bNX7OAy9S0bZQtVvj6yUDPRAkLjgm900lY7eo1xC"
);

// Initialize Express app
const app = express();

// Middlewares
app.use(cors({ origin: true })); // Enable CORS for all origins
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total; // Assuming 'total' is sent as a query parameter

  console.log("Payment request received ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    // If paymentIntent creation is successful, send clientSecret back to the client
    res.status(201).send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating paymentIntent:", error);
    res.status(500).send({ error: "Unable to create paymentIntent" });
  }
});

// Listen to the /api endpoint
exports.api = functions.https.onRequest(app);
