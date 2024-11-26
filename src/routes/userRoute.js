const userController = require("../controllers/userController");

const userRouter = require("express").Router();

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", userController.getUser);

userRouter.post("/", userController.createUser);

userRouter.put("/:id", userController.updateUser);

userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;