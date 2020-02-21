const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const router = require("./routes/index");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/", router);

mongoose.connect("mongodb://localhost/books", { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("database connected");
});

app.listen("8080", () => {
  console.log("spin up the server");
});
