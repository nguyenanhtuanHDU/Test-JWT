require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT;

mongoose.set("strictQuery", false);

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const { createToken, verifyToken } = require("./middleware/JWTAction");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/v1/api", userRouter);

const token = createToken();

verifyToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR1YW5uYSIsImFkZHJlc3MiOiJ0aGFuaCBob2EiLCJpYXQiOjE2NzU1MjIzMDR9.re7Xs-eHL058Gdga-cQnz7w_Q2M8D42LwmaeX0_RJk4"
);
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
