import React from "react";

function Pro_card({ img, title, technology ,description }) {
  return (
    <div
      className="col-md-4 col-sm-6 proj-card"
      style={{
        position: "relative",
        borderRadius: "15px",
        backgroundColor: "#151030",
        width: "320px",
        height: "380px",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        textAlign: "center",
        padding: "15px",
        border: "3px solid transparent",
        animation: "borderAnimation 2s infinite alternate",
      }}
    >
      <div className="overlay">
        <p>{description}</p>
      </div>

      <img
        src={img}
        alt="Project Thumbnail"
        style={{
          width: "100%",
          height: "200px",
          transition: "opacity 0.3s ease-in-out",
          borderRadius: "10px",
        }}
      />

      <h2 style={{ color: "white",  fontSize:"25px" ,marginTop:"15px" }}>{title || "Default Title"}</h2>
      <h3 style={{ color: "white", margin: "10px 0", fontSize:"18px" }}>{technology || "Default Technology"}</h3>

      <div
        style={{
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          flexDirection:"column",
          justifyContent: "flex-end",

          // backgroundColor: "wheat",
          borderRadius: "50%",
          margin: "10px auto",
          animation: "bounce 1s infinite ease-in-out",
        }}
      >
        <img
          src="https://cdn1.iconfinder.com/data/icons/gender-identity-1/2480/Gender-47-1024.png"
          alt="icon"
          style={{ width: "35px", height: "35px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default Pro_card;
