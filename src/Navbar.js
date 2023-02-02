import React from 'react'
import './App.css';

export default function Navbar(props) {
  
    return (
      <>
      <div className="container-fluid text-center text-light bg-danger  "> 
     <p><strong>This is for Wholesale</strong></p>
     
      <button type="button" className="btn btn-dark text-danger my-1 ">Get a free quote</button> 
       </div>
    
        
<nav 
className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
            <img src='https://www.hornbayengineering.com/wp-content/uploads/2022/10/Logo-1.png' alt='logo'></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="/">Aphma</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Wholesale</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Resources</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
        
       
      </ul>
      <form className="d-flex ml-5" role='search'>
        <input className="form-control mr-1" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      </>
    )
  }

