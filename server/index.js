const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./router/admin");
const userRouter = require("./router/user");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);
app.use("users", userRouter);

////////////*******************/// Establishing Connecetion ///***********************///////////////
mongoose.connect(
  "mongodb+srv://sandeepyadav24:MG5E4VTaQ0ZH5VKt@cluster0.wgmwmtd.mongodb.net/"
);

////////////*******************/// Building Schemas ///***********************///////////////

////////////*******************/// Defining Model ///***********************///////////////

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
