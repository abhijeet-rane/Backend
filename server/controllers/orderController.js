const Order = require("../models/orderModel")

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = async (req, res) => {
  try {
    const { orderItems, restaurant, deliveryAddress, paymentMethod, itemsPrice, taxPrice, deliveryPrice, totalPrice } =
      req.body

    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" })
    }

    const order = new Order({
      user: req.user._id,
      restaurant,
      orderItems,
      deliveryAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      deliveryPrice,
      totalPrice,
    })

    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name email")
      .populate("restaurant", "name address")

    if (order) {
      // Check if the order belongs to the logged-in user or if user is admin
      if (order.user._id.toString() === req.user._id.toString() || req.user.isAdmin) {
        res.json(order)
      } else {
        res.status(403).json({ message: "Not authorized to view this order" })
      }
    } else {
      res.status(404).json({ message: "Order not found" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("restaurant", "name image")
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (order) {
      order.isPaid = true
      order.paidAt = Date.now()
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      }

      const updatedOrder = await order.save()
      res.json(updatedOrder)
    } else {
      res.status(404).json({ message: "Order not found" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private/Admin
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body
    const order = await Order.findById(req.params.id)

    if (order) {
      order.status = status

      if (status === "Delivered") {
        order.isDelivered = true
        order.deliveredAt = Date.now()
      }

      const updatedOrder = await order.save()
      res.json(updatedOrder)
    } else {
      res.status(404).json({ message: "Order not found" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createOrder,
  getOrderById,
  getMyOrders,
  updateOrderToPaid,
  updateOrderStatus,
}

