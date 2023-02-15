import React from "react";

export default function Product() {

  


  return (
    <div className="container-fluid">
      <div
        class="btn-group"
        style={{ marginLeft: "1000px", marginTop: "50px" }}
      >
         
        <button
          class="btn btn-outline-secondary btn-lg dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Default Sorting of products
        </button>
        <ul class="dropdown-menu">
          <li style={{ width: "290px", textAlign: "center" }}>
            <a class="dropdown-item" id="demo" href="/" />
            Sort By Popularity
          </li>
          <li style={{ width: "290px", textAlign: "center" }}>
            <a class="dropdown-item" id="demo" href="/" />
            Sort by Average Rating
          </li>
          <li style={{ width: "290px", textAlign: "center" }}>
            <a class="dropdown-item" href="/" />
            Sort by Latest
          </li>
        </ul>
      </div>

      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-3">
          <img
            src="https://media.ed.edmunds-media.com/ram/1500/2022/oem/2022_ram_1500_crew-cab-pickup_big-horn_fq_oem_2_1280.jpg"
            alt="horns"
            style={{
              height: "278px",
              width: "351px",
              border: " 2px solid #f2f2f2",
            }}
          />
          <div
            className="container text-center "
            style={{ border: " 2px solid #f2f2f2" }}
          >
            <h2> Buy this Now</h2>
            <h4 style={{ color: "black" }}> 5000$</h4>
            <button type="button" class="btn btn-outline-danger">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="col-3">
          <img
            src="https://www.automotiveaddicts.com/wp-content/uploads/2018/04/2019-ram-1500-crewcab-bighorn-sport-4x4-770x502.jpg"
            alt="trucksss"
            style={{
              height: "278px",
              width: "351px",
              border: " 2px solid #f2f2f2",
            }}
          />

          <div
            className="container text-center "
            style={{ border: " 2px solid #f2f2f2" }}
          >
            <h2> Buy this Now</h2>
            <h4 style={{ color: "black" }}> 15000$</h4>
            <button type="button" class="btn btn-outline-danger">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
