import "../styles/hero.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover the best food & drinks</h1>
        <p className="hero-subtitle">Explore top-rated restaurants, cafés, and bars around you</p>

        <div className="search-container">
          <select className="location-select">
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
          </select>
          <input type="text" className="search-input" placeholder="Search for restaurant, cuisine or a dish" />
        </div>
      </div>
    </section>
  )
}

export default Hero

