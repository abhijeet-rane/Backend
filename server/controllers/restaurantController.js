const Restaurant = require("../models/restaurantModel")

// @desc    Get all restaurants
// @route   GET /api/restaurants
// @access  Public
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({})
    res.json(restaurants)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get restaurant by ID
// @route   GET /api/restaurants/:id
// @access  Public
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id)

    if (restaurant) {
      res.json(restaurant)
    } else {
      res.status(404).json({ message: "Restaurant not found" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Create a restaurant
// @route   POST /api/restaurants
// @access  Private/Admin
const createRestaurant = async (req, res) => {
  try {
    const { name, description, address, cuisines, priceForTwo, deliveryTime, image, offers, menu } = req.body

    const restaurant = new Restaurant({
      name,
      description,
      address,
      cuisines,
      priceForTwo,
      deliveryTime,
      image,
      offers,
      menu: menu || [],
    })

    const createdRestaurant = await restaurant.save()
    res.status(201).json(createdRestaurant)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Update a restaurant
// @route   PUT /api/restaurants/:id
// @access  Private/Admin
const updateRestaurant = async (req, res) => {
  try {
    const { name, description, address, cuisines, priceForTwo, deliveryTime, image, offers } = req.body

    const restaurant = await Restaurant.findById(req.params.id)

    if (restaurant) {
      restaurant.name = name || restaurant.name
      restaurant.description = description || restaurant.description
      restaurant.address = address || restaurant.address
      restaurant.cuisines = cuisines || restaurant.cuisines
      restaurant.priceForTwo = priceForTwo || restaurant.priceForTwo
      restaurant.deliveryTime = deliveryTime || restaurant.deliveryTime
      restaurant.image = image || restaurant.image
      restaurant.offers = offers || restaurant.offers

      const updatedRestaurant = await restaurant.save()
      res.json(updatedRestaurant)
    } else {
      res.status(404).json({ message: "Restaurant not found" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Add menu item to restaurant
// @route   POST /api/restaurants/:id/menu
// @access  Private/Admin
const addMenuItem = async (req, res) => {
  try {
    const { name, description, price, image, category, isVeg } = req.body

    const restaurant = await Restaurant.findById(req.params.id)

    if (restaurant) {
      const menuItem = {
        name,
        description,
        price,
        image,
        category,
        isVeg,
      }

      restaurant.menu.push(menuItem)
      await restaurant.save()

      res.status(201).json(restaurant)
    } else {
      res.status(404).json({ message: "Restaurant not found" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  addMenuItem,
}

