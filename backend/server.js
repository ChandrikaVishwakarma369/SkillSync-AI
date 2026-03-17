require("dotenv").config();
const connectedToDB = require("./src/config/database.js");
const app = require("./src/app.js");

async function startServer() {
  try {
    await connectedToDB();
    app.listen(3000, () => {
    console.log(`app run on port 3000`);
    });
  } catch (err) {
    console.log(err);
  }
}

startServer();
