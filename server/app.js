const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(express.json());
mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to the server"))
  .catch((err) => console.log(err));

const userRoute = require("./routes/userRoute");

app.use("/user", userRoute);

const port = process.env.port || 5000;
app.listen(port, function () {
  console.log("Server has started");
});