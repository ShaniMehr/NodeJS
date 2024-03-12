const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve your Unity game files (build) here
app.use(express.static("https://shanimehr.github.io/WEBGL_GAME/"));

// Handle other routes or API endpoints if needed
app.get("/", (req, res) => {
    res.send("Welcome to my Unity game server!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});