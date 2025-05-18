// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors()); // allow frontend to call this API

app.get("/swiggy-search", async(req, res) => {
    try {
        const { lat, lng, str } = req.query;

        const swiggyRes = await axios.get("https://www.swiggy.com/dapi/restaurants/search/v3", {
            params: {
                lat,
                lng,
                str,
                submitAction: "ENTER",
                selectedPLTab: "RESTAURANT"
            },
            headers: {
                // Optional: include user-agent or cookies if needed
                "User-Agent": "Mozilla/5.0"
            }
        });

        res.json(swiggyRes.data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Failed to fetch data from Swiggy");
    }
});

app.listen(3001, () => {
    console.log("Proxy server running on port 3001");
});