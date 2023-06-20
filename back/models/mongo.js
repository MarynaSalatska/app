const mongoose = require("mongoose");

// Connect to MongoDB
const connectToMongo = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/superheroes", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB, superheroes db");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

// Define a schema for your collection
const SuperheroSchema = new mongoose.Schema({
  // Define the fields in your collection
  nickname: {
    type: String,
    required: true,
  },
  real_name: {
    type: String,
    required: true,
  },
  origin_description: {
    type: String,
    required: true,
  },
  superpowers: {
    type: String,
    required: true,
  },
  catch_phrase: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  image_src: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const SuperheroModel = mongoose.model("SuperheroModel", SuperheroSchema);

module.exports = { connectToMongo, SuperheroModel };
