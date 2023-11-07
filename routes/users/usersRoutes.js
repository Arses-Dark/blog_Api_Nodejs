const express=require("express")
const UserController=require("../../controllers/users/userControllers");
const userControllers = require("../../controllers/users/userControllers");
class UsersRouter {
    constructor() {
      this.userRouter = express.Router();
      this.initializeRoutes();
    }
  
    initializeRoutes() {
      this.userRouter.route('/')
      .get(UserController.gets)
      this.userRouter.route("/register")
      .post(UserController.register)
      
      this.userRouter.route("/login")
      .post(UserController.login)
      this.userRouter.route("/profile/:id")
      .get(UserController.profile)
      this.userRouter.route("/:id")
      .delete(UserController.delete)
      .put(UserController.update)
    }
  
    getRouter() {
      return this.router;
    }
  }
  
  module.exports = new UsersRouter().getRouter();