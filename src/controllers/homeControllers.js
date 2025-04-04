import db from "../models/index";
import CRUDService from "../service/CRUDService";
//Nhan du lieu tu service
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs");
  } catch (e) {
    console.log(e);
  }
};
let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("Hi ae");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log(data);
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};
let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let UserData = await CRUDService.getUserInfoById(userId);
    return res.render("EditCRUD.ejs", {
      user: UserData,
      //gan gia tri userData cho user
    });
  } else {
    return res.send("User not Found!");
  }
};
let putCRUD = async (req, res) => {
  let data = req.body;
  let allUser = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUser,
  });
};
let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  await CRUDService.deleteUserById(id);
  return res.send("delete done");
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
