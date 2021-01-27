const express = require("express");
const path = require("path");

const app = express();
app.listen(3000);

//LOS MIDDLEWARES
const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

//LAS RUTAS
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
