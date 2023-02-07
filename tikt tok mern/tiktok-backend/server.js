
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./routes");
app.use(express.json());
const cors = require("cors");
app.use(cors());

mongoose.connect(
  "mongodb+srv://bala:bala@cluster0.yjsmqiz.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log(" DB Connected successfully");
});
app.use(Router);
app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
app.get("/", (req, res) =>
  res.status(200).send("<h1>tik tok project <h1>")
);