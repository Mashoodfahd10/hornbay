import React, { Component } from "react";

import "./App.css";

export default class Home extends Component {
  render() {
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
      <div>
        <div className="container-xxl">
          <div
            className="jumbotron"
            style={{
              backgroundImage: `url("https://www.hornbayengineering.com/wp-content/uploads/2022/10/banner.jpg")`,
              color: "aliceblue",maxHeight:"auto",maxWidth:"100%"
            }}
          >
            <h3 style={{ marginLeft: "150px" }}>
              <strong>Hornbay Engineering</strong>
            </h3>
            <h1 style={{ marginLeft: "150px" }}>
              UNIVERSAL SPARE
              <br /> TRAIN HORN KIT
            </h1>
            <br />
            <h4 style={{ marginLeft: "150px" }}>
              <strong>
                fits where the spare tire was choose between only, onboard
                <br />
                air or train horns
              </strong>
            </h4>
            <br />
            <div
              className="container"
              style={{ marginLeft: "150px", marginTop: "40px" }}
            >
              <a href="http://localhost:3000/contactus">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={handleNextPage}
                >
                  Get a Free Quote
                </button>
              </a>

              <a href="http://localhost:3000/product">
                <button
                  type="button"
                  id="demo"
                  className="btn btn-danger ml-4"
                  onClick={handleShopPage}
                >
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid text-center ">
          <h2 style={{ color: "#900850" }}>BEST SELLERS PRODUCTS</h2>
        </div>
        <div className="container-fluid" style={{backgroundImage:`url("https://www.hornbayengineering.com/wp-content/uploads/2022/10/img2.jpg")`,
             color:"aliceblue", fontSize:"40px",fontFamily:"sans-serif" ,backgroundSize:"cover"  }}>
          {/*made nav under truck image*/}
          <p style={{ textAlign: "center" }}>
            GET AN INSTANT QUOTE
            <br />
            FOR WHOLESALE ORDERS
            <br />
            <a href="http://localhost:3000/contactus">
              <button
                type="button"
                className="btn btn-danger mx-4"
                onClick={handleQuote}
              >
                Get a Quote
              </button>
            </a>{" "}
          </p>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="horn1">
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "25px",
                    fontWeight: "bold",
                    lineHeight: "515px",
                  }}
                >
                  2 Trumpet Train Air Horn (KIT)
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="horn1">
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "25px",
                    fontWeight: "bold",
                    lineHeight: "515px",
                  }}
                >
                  2 Trumpet Train Air Horn (KIT)
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="horn1">
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "25px",
                    fontWeight: "bold",
                    lineHeight: "515px",
                    marginTop: "-160px",
                  }}
                >
                  2 Trumpet Train Air Horn (KIT)
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="horn1">
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: "25px",
                    fontWeight: "bold",
                    lineHeight: "515px",
                    marginTop: "-160px",
                  }}
                >
                  2 Trumpet Train Air Horn (KIT)
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="truck text-left">
          <h3
            style={{
              color: "aliceblue",
              marginLeft: "200px",
              fontSize: "40px",
            }}
          >
            <strong>
              WE ARE PIONEERS, PRODUCT <br /> SPECIFICATION
            </strong>
          </h3>
          <br />
          <p
            style={{
              color: "aliceblue",
              marginLeft: "200px",
              fontSize: "30px",
            }}
          >
            Trailer/truck/SUVs compatible like ford, DAF, etc.
          </p>
          <br />
          <br />
          <p style={{ color: "aliceblue", marginLeft: "200px" }}>
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
          <div className="row">
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
                Our team will process and ship your order within 1 business day!
              </h6>
            </div>

            <div className="col-sm-3">
              <img
                src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon4.png"
                alt="icon"
              />
              <h3>HORNBLASTER QUALITY</h3>
              <h6>
                Highest quality components available, backed by world class
                customer service!
              </h6>
            </div>
            <div className="col-sm-3">
              <img
                src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon3.png"
                alt="ribbon"
              />
              <h3>WARRANTY</h3>
              <h6>
                Buy with confidence, industry exclusive lifetime warranty on
                select products.
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
