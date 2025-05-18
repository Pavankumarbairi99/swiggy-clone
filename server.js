// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/search", async(req, res) => {
    const { lat, lng, str } = req.query;

    try {
        const response = await axios.get("https://www.swiggy.com/dapi/restaurants/search/v3", {
            params: {
                lat,
                lng,
                str,
                submitAction: "ENTER",
                selectedPLTab: "RESTAURANT"
            },
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                "Accept": "application/json",
                "Referer": "https://www.swiggy.com/"
            }
        });

        res.json(response.data);
    } catch (err) {
        console.error("Failed to fetch from Swiggy:", err.message);
        res.status(500).json({ error: "Failed to fetch Swiggy data" });
    }
});

app.listen(3001, () => {
    console.log("Proxy running on http://localhost:3001");
});