import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="header_content d-flex flex-row align-items-center justify-content-center">
                <div className="logo"><a href="/">Mixtape</a></div>
                <div className="log_reg">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
                <nav className="main_nav">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/about_us">About us</a></li>
                        <li><a href="/music">Music</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="hamburger ml-auto">
                    <div className="d-flex flex-column align-items-end justify-content-between">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header