import React from 'react'
import "../../styles/main.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h2>Perfume Store</h2>
          <p>Luxury fragrances for every soul ✨</p>
        </div>

        <div className="footer__links">
          <a href="/shop">Shop</a>
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer__copy">
          <p>© 2024 Perfume Store. All rights reserved.</p>
          <p>Designed by <span>Viktor Starodubczev</span></p>
        </div>
      </div>
    </footer>
  )
}
