import RestaurantCard from "./RestaurantCard"
import "../styles/restaurant-card.css"

function RestaurantList({ restaurants, loading }) {
  if (loading) {
    return <div className="loading">Loading restaurants...</div>
  }

  if (restaurants.length === 0) {
    return <div className="no-results">No restaurants found</div>
  }

  return (
    <section>
      <h2 className="section-title">Popular Restaurants</h2>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  )
}

export default RestaurantList

