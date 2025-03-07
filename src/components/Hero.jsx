import React, { Suspense } from "react";
import Type from "./typewriter";
import Footer from "./footer";
import { ComputersCanvas } from "./canvas";

function Hero() {
  return (
    <>
      <div 
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{ width: "100%", minHeight: "50vh", paddingTop: "120px" }}
      >
        <div className="row d-flex align-items-start justify-content-center w-100">
          <div className="col-2 col-md-auto d-flex flex-column align-items-center">
            <div
              style={{
                height: "15px",
                width: "15px",
                borderRadius: "50%",
                background: "linear-gradient(rgb(184, 135, 170), rgb(253, 245, 166))",
              }}
            ></div>
            <div
              className="violet-gradient"
              style={{
                height: "240px",
                width: "2px",
              }}
            ></div>
          </div>

          <div className="col-10 col-md-8 d-flex flex-column align-items-start">
  <h1 
    className="text-white fw-bold display-4 display-md-3 display-lg-2" 
    style={{ lineHeight: "1.2" }}
  >
    Hi, I am <span style={{ color: "#915eff" }}>Aaditya</span>
  </h1>
  <Type />
  <div className="mt-3 position-relative d-flex align-items-start">
    
    <h3 className="fs-6 fs-md-4 fs-lg-4 blue-text-gradient ">Jalod Sanjar | Barnagar | Ujjain | India</h3>
  </div>
  <img className="animated-icon" style={{objectFit:"cover", height:"25px", width:"25px ", position: "relative",left:"-25px",top:"-32px",display:"inline", filter: "drop-shadow(0 0 10px rgba(0, 206, 168, 0.7)) drop-shadow(0 0 15px rgba(191, 97, 255, 0.7))",background:"transparent" }} src="https://cdn-icons-png.flaticon.com/512/3502/3502693.png" />
</div>
        </div>
        
        <ComputersCanvas />
      </div>

      {/* Adjusted ComputersCanvas container
      <div className="d-flex align-items-center justify-content-center" style={{ width: "100%", minHeight: "60vh", position: "relative", zIndex: 0 }}>
        <ComputersCanvas />
      </div> */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Hero;
