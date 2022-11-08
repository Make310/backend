const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/user", require("./routes/userRouter"));

app.get("/", (req, res) => {
  res.send("Se inicio la aplicacion");
});

app.set("port", process.env.PORT);

module.exports = app;
