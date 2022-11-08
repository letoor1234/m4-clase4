require("dotenv").config();
const path = require("path");
const express = require("express");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");

app.use("/users", userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Servidor inicializado en puerto ${process.env.PORT}`)
);
