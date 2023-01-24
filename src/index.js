const express = require("express");
const bodyParser = require("body-parser");

// const { Airport, City } = require("./models/index");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const city = require("./models/city");

const db = require("./models/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  const PORT = 3000;
  app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
    if (process.env.SYNC_DB) {
      await db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
