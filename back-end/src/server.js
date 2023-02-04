require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT;

mongoose.set("strictQuery", false);

const authRouter = require("./routes/auth");

app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 

app.use("/v1/api", authRouter);

(async () => {
  const dbState = [
    {
      value: 0,
      label: "disconnected",
    },
    {
      value: 1,
      label: "connected",
    },
    {
      value: 2,
      label: "connecting",
    },
    {
      value: 3,
      label: "disconnecting",
    },
  ];
  await mongoose.connect(process.env.DB_URL);
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find((f) => f.value == state).label, "to db");

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})();
