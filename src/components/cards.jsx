import React from "react";

function Card({img,content} ) {
  return (
    // <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
    //     <div className="row d-flex justify-content-center align-items-center">
    //         <div className="col-md-4 col-sm-6 col-xs-12 p-3 green-pink-gradient" 
    //             style={{
    //                 backgroundColor: "#151030",
    //                 borderRadius: "10px",
    //                 position: "relative",
    //                 overflow: "hidden",
    //                 boxSizing: "border-box",
    //                 width: "18rem",
    //                 height: "auto",
    //                 border: "3px solid transparent",
    //                 transition: "all 0.3s ease-in-out",
    //                 animation: "borderAnimation 2s infinite alternate"
    //             }}
    //                 >
    //             <img src=""alt="Logo" className="img-fluid" 
    //                 style={{width: "80%", marginBottom: "15px", borderRadius: "10px"}}/>
    //             <div className="card-content" 
    //                 style={{color: "white", fontSize: "16px", textAlign: "center"}}>
    //                 <p>"content"</p>
    //             </div>
    //         </div>
    //         <div className="col-md-4 col-sm-6 col-xs-12 p-3 green-pink-gradient" 
    //             style={{
    //                 backgroundColor: "#151030",
    //                 borderRadius: "10px",
    //                 position: "relative",
    //                 overflow: "hidden",
    //                 boxSizing: "border-box",
    //                 width: "18rem",
    //                 height: "auto",
    //                 border: "3px solid transparent",
    //                 transition: "all 0.3s ease-in-out",
    //                 animation: "borderAnimation 2s infinite alternate"
    //             }}
    //                 >
    //             <img src=""alt="Logo" className="img-fluid" 
    //                 style={{width: "80%", marginBottom: "15px", borderRadius: "10px"}}/>
    //             <div className="card-content" 
    //                 style={{color: "white", fontSize: "16px", textAlign: "center"}}>
    //                 <p>"content"</p>
    //             </div>
    //         </div>
    //         <div className="col-md-4 col-sm-6 col-xs-12 p-3 green-pink-gradient" 
    //             style={{
    //                 backgroundColor: "#151030",
    //                 borderRadius: "10px",
    //                 position: "relative",
    //                 overflow: "hidden",
    //                 boxSizing: "border-box",
    //                 width: "18rem",
    //                 height: "auto",
    //                 border: "3px solid transparent",
    //                 transition: "all 0.3s ease-in-out",
    //                 animation: "borderAnimation 2s infinite alternate"
    //             }}
    //                 >
    //             <img src=""alt="Logo" className="img-fluid" 
    //                 style={{width: "80%", marginBottom: "15px", borderRadius: "10px"}}/>
    //             <div className="card-content" 
    //                 style={{color: "white", fontSize: "16px", textAlign: "center"}}>
    //                 <p>"content"</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>


    <div className="col-md-4 col-sm-6 col-xs-12 p-3 green-pink-gradient" 
  style={{
    backgroundColor: "#151030",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
    width: "18rem",
    height: "300px",  // Set a fixed height for the card
    border: "3px solid transparent",
    transition: "all 0.3s ease-in-out",
    animation: "borderAnimation 2s infinite alternate"
  }}
>
  
    <img 
      src={img} 
      alt="Logo" 
      className="img-fluid" 
      style={{
        width: "80%", 
        height:"150px",
        marginBottom: "15px", 
        borderRadius: "10px", 
        display: "block", 
        marginLeft: "auto", 
        marginRight: "auto",
        marginTop:"0px"
      }} 
    />
  

  <div className="card-content" 
    style={{
        marginTop:"5px",
      color: "white", 
      fontSize: "16px", 
    //   textAlign: "justify",
      padding: "0 10px", // Add some padding to ensure justified text doesn't touch the edges
      height: "calc(100% - 160px)", // Ensure the content section fills the remaining space
    //   overflow: "auto" // Prevent content overflow
    }}
  >
    <p>{content}</p>
  </div>
</div>

  );
}

export default Card;
