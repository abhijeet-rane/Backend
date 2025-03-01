import "../styles/footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/assets/images/logo-white.png" alt="Zomato" />
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>About Zomato</h3>
              <ul>
                <li>
                  <a href="#">Who We Are</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Work With Us</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Report Fraud</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>For Restaurants</h3>
              <ul>
                <li>
                  <a href="#">Partner With Us</a>
                </li>
                <li>
                  <a href="#">Apps For You</a>
                </li>
                <li>
                  <a href="#">Business App</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Learn More</h3>
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Social Links</h3>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>

              <div className="app-links">
                <a href="#">
                  <img src="/assets/images/app-store.png" alt="App Store" />
                </a>
                <a href="#">
                  <img src="/assets/images/play-store.png" alt="Play Store" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Zomato Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

