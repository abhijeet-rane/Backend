const express = require("express")
const router = express.Router()
const {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  addMenuItem,
} = require("../controllers/restaurantController")
const { protect, admin } = require("../middleware/authMiddleware")

router.route("/").get(getRestaurants).post(protect, admin, createRestaurant)

router.route("/:id").get(getRestaurantById).put(protect, admin, updateRestaurant)

router.route("/:id/menu").post(protect, admin, addMenuItem)

module.exports = router

