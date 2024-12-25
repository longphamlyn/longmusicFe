import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className="menu">
  <div>
    <div className="menu_overlay" />
    <div className="menu_container d-flex flex-column align-items-start justify-content-center">
      <div className="menu_log_reg">
        <ul className="d-flex flex-row align-items-start justify-content-start">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
      <nav className="menu_nav">
        <ul className="d-flex flex-column align-items-start justify-content-start">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about_us">About us</a>
          </li>
          <li>
            <a href="/music">Music</a>
          </li>
          <li>
            <a href="/new">News</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

  )
}

export default Menu