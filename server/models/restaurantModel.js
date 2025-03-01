const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    cuisines: {
      type: [String],
      required: true,
    },
    priceForTwo: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    offers: {
      type: String,
    },
    menu: [
      {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
        },
        category: {
          type: String,
          required: true,
        },
        isVeg: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
)

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant

