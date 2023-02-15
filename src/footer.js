import React, { Component } from "react";

export default class footer extends Component {
  render() {
    let handleHome = () => {
      console.log("i am home");
    };

    let myFunc = () => {
      console.log("i am refund policy");
    };

    let handleContact = () => {
      console.log("i am contact");
    };
    return (
      <>
        
      <div className="container-fluid" style={{marginTop:"80px",backgroundImage:`URL("https://www.hornbayengineering.com/wp-content/uploads/2022/10/footer.jpg")`
    , height:"auto", width:"100%"}}>
      <div className="container">
      
          <div className="row">
            <div className="col-3" >
              <img 
                src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/Logo-1.png"
                alt="logo"
              ></img>
              
              <p style={{marginTop:"20px"}}>
                <strong>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s,
                </strong>
              </p>
            </div>
          
            <div className="col-3">
              <h4>CATEGORIES</h4>
              
              <p style={{marginTop:"10px"}}>
                <a href="http://localhost:3000/">
                <button
                  src="https://www.hornbayengineering.com/"
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleHome}
                >
                  Home
                </button></a>
              </p>
              <p>Clearance</p>

              <p>Find </p>

              <p>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  id="ganja"
                  onClick={myFunc}
                >
                  Refund Policy
                </button>
              </p>

              <p>
             <a href="http://localhost:3000/contactus">
                <button
                  src="https://www.hornbayengineering.com/contact-us/"
                  type="button"
                  className="btn btn-outline-danger  btn-sm"
                  onClick={handleContact}
                >
                  Contact Us
                </button></a>
              </p>

              <p>Warranty</p>
            </div>
            <div className="col-3">
              <h4>INFORMATION</h4>
              <br />
              <br />
              <p> Vehicle Specific Systems</p>
              <p> Universal Systems</p>
              <p>Remote Starts</p>
              <p>Air Tanks</p>
              <p> Air Horns</p>
              <p> Air Compressors</p>
              <p>Accessories</p>
            </div>

            <div className="col-3">
              <h4>
                Hornbay engineering <br />
                Newsletter
              </h4>
            </div>
          </div>
        </div>
        
        <div className="container" style={{textAlign:"center",fontSize:"30px",fontFamily:"Franklin Gothic Medium"}}>
          <p>Get In Touch</p>
        </div>
       
        <div className="container" style={{marginTop:"30px"}}>
        <div className="row">
          <div className="col-4">
            <h4>Pakistan Office:</h4>
            <p>
              <img
                width={"20px"}
                height={"21px"}
                src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon5.png"
                alt="phone"
              ></img>
              &nbsp; &nbsp; +923115252777{" "}
            </p>

            <p>
              <img
                width={"20px"}
                height={"36px"}
                src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon6.png"
                alt="lolipop"
              ></img>
              &nbsp;&nbsp; Main Motorway Chowk Babu Sabu <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interchange, Band Road
              Lahore, Pakistan
            </p>
          </div>
          <div className="col-4">
            <h4> Dubai Office:</h4>
            <p>
              <img
                width={"20px"}
                height={"21px"}
                src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon5.png"
                alt="phone"
              ></img>
              &nbsp; &nbsp; +971553057435{" "}
            </p>

            <p>
              <img
                width={"20px"}
                height={"36px"}
                src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon6.png"
                alt="lolipop"
              ></img>
              &nbsp;&nbsp; Al-Shaiba Tower A, Jabel Ali Race Course
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Road, Al-Barsha
            </p>
          </div>
          <div className="col-4">
            <h4> Bahrain Office:</h4>
            <p>
              <img
                width={"20px"}
                height={"21px"}
                src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon5.png"
                alt="phone"
              ></img>
              &nbsp; &nbsp; +97333038703{" "}
            </p>

            <p>
              <img
                width={"20px"}
                height={"36px"}
                src="https://www.hornbayengineering.com/wp-content/uploads/2022/10/icon6.png"
                alt="lolipop"
              ></img>
              &nbsp;&nbsp; PO Box 21529, Seef District
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 428, Kingdom of Bahrain
            </p>

          </div>
          </div>
          
          <div className="container" style={{ textAlign: "center",marginTop:"20px" }}>
            <p >
              Copyright © 2023
              <a href="http://localhost:3000/">
                Hornbay Engineering
              </a>
            </p>
          </div>
        </div>
        </div>
      
      </>
    );
  }
}
