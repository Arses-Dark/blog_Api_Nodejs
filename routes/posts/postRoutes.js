const express=require("express")
const PostController=require("../../controllers/posts/postControllers")
class PostsRouter {
    constructor() {
      this.postRouter = express.Router();
      this.initializeRoutes();
    }
    initializeRoutes() {
      this.userRouter.route('/').get(PostController.gets).post(PostController.create)
      this.userRouter.route("/:id").delete(PostController.delete).put(PostController.update).get(PostController.get)
    }
  
    getRouter() {
      return this.postRouter;
    }
  }
  module.exports = new PostsRouter().getRouter();
  