const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Get NFL games
router.get("/games", (req, res) => {
  const filePath = path.join(__dirname, "../../src/api/nfl_2024.json");
  console.log("Reading games from:", filePath); // Log the file path for debugging

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err); // Log the error for debugging
      return res.status(500).json({ message: "Error reading file" });
    }

    try {
      const games = JSON.parse(data); // Parse the JSON data
      res.json(games); // Send the parsed data as a response
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError); // Log parsing errors
      return res.status(500).json({ message: "Error parsing JSON" });
    }
  });
});

module.exports = router;
