// This is the Link API
import React from 'react';
import Link from 'next/link';
function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
          <img src="/static/logo/aiig_logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/speakers">
                <a className="nav-link">Speakers</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/sessions">
                <a className="nav-link">Sessions</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products">
                <a className="nav-link">Shop</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cart">
                <a className="nav-link">Cart</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/checkout">
                <a className="nav-link">Checkout</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signup">
                <a className="nav-link">SignUp</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
