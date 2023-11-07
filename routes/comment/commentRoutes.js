const express=require("express")
class CommentsRouter {
    constructor() {
      this.commentRouter = express.Router();
      this.initializeRoutes();
    }
    initializeRoutes() {
      this.commentRouter.route('/').get().post()
      this.commentRouter.route("/:id").delete().put().get()
    }
  
    getRouter() {
      return this.commentRouter;
    }
  }
  module.exports = new CommentsRouter.getRouter();