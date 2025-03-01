const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const userRoutes = require("./routes/userRoutes")
const restaurantRoutes = require("./routes/restaurantRoutes")
const orderRoutes = require("./routes/orderRoutes")

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Routes
app.use("/api/users", userRoutes)
app.use("/api/restaurants", restaurantRoutes)
app.use("/api/orders", orderRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: "Something went wrong!" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

