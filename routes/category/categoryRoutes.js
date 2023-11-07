const express=require("express")
class CategoryRouter {
    constructor() {
      this.categoryRouter = express.Router();
      this.initializeRoutes();
    }
    initializeRoutes() {
      this.categoryRouter.route('/').get().post()
      this.categoryRouter.route("/:id").delete().put().get()
    }
  
    getRouter() {
      return this.categoryRouter;
    }
  }
  module.exports = new CategoryRouter.getRouter();