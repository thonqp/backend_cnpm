const userController = require("../controllers/userController");

const router = require("express").Router();

//ADD USER
router.post("/", userController.addAuthor);

//GET ALL USERS
router.get("/", userController.getAllAuthors);

//GET AN USER
router.get("/:id", userController.getAnAuthor);

//UPDATE AN USER
router.put("/:id", userController.updateAuthor);

//DELETE USER
router.delete("/:id", userController.deleteAuthor);

module.exports = router;