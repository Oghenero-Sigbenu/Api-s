const express = require("express");
const recipeControllers = require("../../controllers/recipe")
const upload = require("../../middleware/upload");
const authenticate = require("../../middleware/auth")

// //importing multer
// const multer = require('multer')
// var upload = multer({ dest: 'uploads/' })

const route = express.Router();


route.get("/", recipeControllers.getAllRecipes)
route.get("/user/recipes",authenticate, recipeControllers.getUserRecipes)
route.get("/delete/:id",authenticate, recipeControllers.deleteRecipe)
route.post("/post",  upload.single('imageurl'), recipeControllers.postAddRecipe)
route.post("/like", recipeControllers.postLikeRecipe)
route.get("/edit/:id",authenticate, recipeControllers.getRecipeById)
route.put("/edit/:id",authenticate, upload.single('imageurl'), recipeControllers.updateRecipe)
route.get("/:id", recipeControllers.getRecipeById)

module.exports = route;
