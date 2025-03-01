function RestaurantCard({ restaurant }) {
  return (
    <div className="card restaurant-card">
      <img
        src={restaurant.image || "/assets/images/restaurant-placeholder.jpg"}
        alt={restaurant.name}
        className="restaurant-image"
      />
      <div className="restaurant-info">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <p className="restaurant-cuisine">{restaurant.cuisines.join(", ")}</p>

        <div className="restaurant-meta">
          <div className="rating">
            <i className="fas fa-star"></i>
            <span>{restaurant.rating}</span>
          </div>
          <div className="price">₹{restaurant.priceForTwo} for two</div>
        </div>

        <div className="restaurant-footer">
          <div className="delivery-time">
            <i className="fas fa-clock"></i>
            <span>{restaurant.deliveryTime} min</span>
          </div>
          {restaurant.offers && (
            <div className="offers">
              <i className="fas fa-tag"></i>
              <span>{restaurant.offers}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard

