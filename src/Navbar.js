import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#C20014", textAlign: "center" }}>
        <p>
          <strong>Get an instant quote for Wholesale orders</strong>

          <a href="http://localhost:3000/contactus">
            <button style={{ marginLeft: "20px" }} type="button" className="btn btn-dark text-danger my-1 ">
              Get a free quote
            </button></a></p>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img
            src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/Logo-1.png"
            alt="logo"
          ></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link active mx-3" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/about">
                  About
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link mx-3" href="/Aphma">
                  Aphma
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">
                  Wholesale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">
                  Resources
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link mx-3" href="/contactus">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0" style={{ width: "auto" }} role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>

            <div>
            <FontAwesomeIcon icon={faCartPlus} size="lg" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
