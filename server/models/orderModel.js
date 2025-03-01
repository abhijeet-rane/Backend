const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Restaurant",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        menuItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Restaurant.menu",
        },
      },
    ],
    deliveryAddress: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    deliveryPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    status: {
      type: String,
      required: true,
      default: "Placed",
      enum: ["Placed", "Confirmed", "Preparing", "Out for delivery", "Delivered", "Cancelled"],
    },
  },
  {
    timestamps: true,
  },
)

const Order = mongoose.model("Order", orderSchema)

module.exports = Order

