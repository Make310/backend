require("dotenv").config();

const app = require("./app");
require("./database");

// Routes Setup

async function main() {
  await app.listen(app.get("port"));
  console.log("Servidor corriendo en el puerto!!" + app.get("port"));
}

main();
