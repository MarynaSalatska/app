const express = require("express");
const cors = require("cors");
const { connectToMongo } = require("./models/mongo");
const routes = require("./routes/routes");

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
connectToMongo();

// Use the routes defined in routes.js
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World !!!!!!");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
