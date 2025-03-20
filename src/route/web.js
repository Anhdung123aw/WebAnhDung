import express from "express";
import homeControllers from "../controllers/homeControllers";
let router = express.Router();
let initWebRouter = (app) => {
  router.get("/", homeControllers.getHomePage);
  return app.use("/", router);
};
module.exports = initWebRouter;
