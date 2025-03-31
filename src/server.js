import express from "express";
import bodyParser from "body-parser"; //lay id gui len tu server
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web";
import dotenv from "dotenv";
import connectDB from "./config/connectDB";
dotenv.config();

let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRouter(app);
connectDB();
let port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log("Backend NodeJs in on running on the port : " + port);
});
