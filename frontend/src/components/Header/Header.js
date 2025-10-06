import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/main.css"

export default function Header() {
  return (
    <header className='header'>
        <div className="container">
            <a href="/" className='logo'>Perfume</a>
            <nav className='nav'>
                <ul className='menu'>
                    <Link to="/">
                        <li>home</li>
                    </Link>
                    <Link to="/shop">
                        <li>shop</li>
                    </Link>
                    <Link to="/aboutus">
                        <li>about us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    </header>
  )
}
