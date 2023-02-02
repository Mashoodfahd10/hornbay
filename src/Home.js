import React, { Component } from "react";

import "./App.css";

export default class Home extends Component {
  render() {
    /*const myStyle={
      backgroundImage:"url('https://www.hornbayengineering.com/wp-content/uploads/2022/10/banner.jpg')",
      height:"900px",
      width:"1450px",
      backgroundRepeat:"no-repeat"*/
    let handleNextPage = () => {
      console.log("i am get free quote");
    };
    let handleShopPage = () => {
      console.log("i am shop button");
    };
    let handleQuote = () => {
      console.log("i am get a Quote but not free");
    };
    return (
      <>
        <div className="container-xxl">
          <div className="jumbotron">
            <h3>
              <strong>Hornbay Engineering</strong>
            </h3>
            <h1>
              UNIVERSAL SPARE
              <br /> TRAIN HORN KIT
            </h1>
            <br />
            <h4>
              <strong>
                fits where the spare tire was choose between only, onboard
                <br />
                air or train horns
              </strong>
            </h4>
            <br />
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleNextPage}
            >
              Get a Free Quote
            </button>
            <button
              type="button"
              className="btn btn-danger ml-4"
              onClick={handleShopPage}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/*<div className='container-xxl' >                    {start og body (first truck picture)}
         <img  src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/banner.jpg" 
             className='responsive' alt="truck" height={"auto"} width={"100%"}  /> 
              <button  type="button" className="btn btn-outline-danger" >Shop Now</button>
    </div>*/}
        {/*<div className='you'>
      <img src='https://www.hornbayengineering.com/wp-content/uploads/2022/10/banner.jpg' alt="yoyo"/>

    </div>*/}
        <div className="container-fluid text-center color-black">
          <h2>BEST SELLERS PRODUCTS</h2>
        </div>
        <div className="container-xxl">
          {" "}
          {/*made nav under truck image*/}
          <p>
            GET AN INSTANT QUOTE
            <br />
            FOR WHOLESALE ORDERS
          </p>
          <button
            type="button"
            className="btn btn-danger mx-4"
            onClick={handleQuote}
          >
            Get a Quote
          </button>
        </div>

        <div className="container-fluid text-center">
          {" "}
          {/*horn pics */}
          <h2>PRODUCT RANGE</h2>
          <div className="container">
            <img
              src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/product1.png"
              className="responsive"
              alt="products"
              height={"auto"}
              width={"50%"}
            />
            <img
              src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/product1.png"
              className="responsive"
              alt="products"
              height={"auto"}
              width={"50%"}
            />
          </div>
        </div>
        <br />
        <br />

        <div className="container-fluid">
          <div className="container">
            {" "}
            {/*horn pics */}
            <img
              src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/product1.png"
              className="responsive"
              alt="products"
              height={"auto"}
              width={"50%"}
            />
            <img
              src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/product1.png"
              className="responsive"
              alt="products"
              height={"auto"}
              width={"50%"}
            />
          </div>
        </div>

        <div className="truck">
          <h3>
            <strong>
              WE ARE PIONEERS,
              <br /> PRODUCT SPECIFICATION
            </strong>
          </h3>
          <br />
          <h4>Trailer/truck/SUVs compatible like ford, DAF, etc.</h4>
          <br />
          <br />
          <p>
            <strong>
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br />
              industry. Lorem Ipsum has been the industry’s standard dummy text
              <br /> ever since the 1500s, when an unknown printer took a galley
              of type
              <br /> and scrambled it to make a type specimen book. It has
              survived not
              <br /> only five centuries, but also the leap into electronic
              typesetting,
              <br /> remaining essentially unchanged.
              <br />
              <br />
              It was popularised in the 1960s with the release of Letraset
              sheets
              <br />
              containing Lorem Ipsum passages, and more recently with desktop
              <br />
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              <br />
            </strong>
          </p>{" "}
          {/*horn pics */}
        </div>

        <br />
        <br />
        <div className="container">
        <div className="container row">
          <div className="col-sm-3">
            {" "}
            {/* icons*/}
            <img
              src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon1.png"
              alt="toota"
            />
             <h3>EXTREME LOUDNESS</h3>
            <h6>
              We manufacture and sell the loudest <br />
              horns & horn kits you can buy anywhere.
            </h6>
          </div>
          <div className="col-sm-3">
            <img
              src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon2.png"
              alt="truck"
            />
             <h3>EXTREME LOUDNESS</h3>
            <h6>
              We manufacture and sell the loudest <br />
              horns & horn kits you can buy anywhere.
            </h6>
          </div>

          <div className="col-sm-3">
            <img
              src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon4.png"
              alt="icon"
            />
             <h3>EXTREME LOUDNESS</h3>
            <h6>
              We manufacture and sell the loudest <br />
              horns & horn kits you can buy anywhere.
            </h6>
          </div>
          <div className="col-sm-3">
            <img
              src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon3.png"
              alt="ribbon"
            />
             <h3>EXTREME LOUDNESS</h3>
            <h6>
              We manufacture and sell the loudest <br />
              horns & horn kits you can buy anywhere.
            </h6>
          </div>
        </div>
        </div>
        <br />
        <br />

        <div className="d-flex row">
          <div className="col-sm-3">
            <h3>EXTREME LOUDNESS</h3>
            <h6>
              We manufacture and sell the loudest <br />
              horns & horn kits you can buy anywhere.
            </h6>
          </div>
          <div className="col-sm-3">
            <h3>EXTREME LOUDNESS</h3>
            <h6>
              Our team will process and ship your order within 1 business day!
            </h6>
          </div>
          <div className="col-sm-3">
            <h3>HORNBLASTER QUALITY</h3>
            <h6>
              Highest quality components available, backed by world class
              customer service!
            </h6>
          </div>
          <div className="col-sm-3">
            <h3>WARRANTY</h3>
            <h6>
              Buy with confidence, industry exclusive lifetime warranty on
              select products.
            </h6>
          </div>
        </div>
      </>
    );
  }
}
