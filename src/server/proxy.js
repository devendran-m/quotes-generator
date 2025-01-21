const express = require("express");
const { default: fetch } = require("node-fetch");
const cors = require("cors");
const app = express();

//Enable CORS
app.use(cors());

//Define a route for proxying API requests
app.get("/api/quote", async (req, res) => {
    try {
        const response = await fetch("https://qapi.vercel.app/api/random");
        const data = await response.json();
        res.json(data);
    }catch (error) {
        res.status(500).json({error: "Failed to fetch data from API"});
    }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`));
