import React from "react";

function Educard({edu,place,year,cgpanum,img}) {
    return (
        <>
            <div className="row mb-3 education-card" 
                style={{
                    backgroundColor: "#151030",
                    borderRadius: "10px",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "auto",
                    overflow: "hidden",
                    border: "2px solid transparent",
                    animation: "borderAnimation 2s infinite alternate",
                    flexWrap: "wrap",
                    textAlign: "center"
                }}
            >
                <div className="col-lg-2 col-md-3 col-sm-12">
                    <img 
                        src={img} 
                        style={{ maxWidth: "90px", height: "auto" }} 
                        alt="Graduation Trophy" 
                    />
                </div>

                <div className="col-lg-7 col-md-6 col-sm-12 education-details" 
                    style={{ flexGrow: "1", padding: "0 10px", textAlign: "left" }}
                >
                    <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "white" }}>
                        {edu}
                    </h1>
                    <h2 style={{ fontSize: "1.1rem", color: "white" }}>
                        {place}
                    </h2>
                    <h3 style={{ fontSize: "1rem", color: "white" }}>
                        {year}
                    </h3>
                </div>

                <div className="col-lg-2 col-md-3 col-sm-12 education-score" 
                    style={{ 
                        borderRadius: "15px",
                        backgroundColor: "goldenrod",
                        padding: "10px",
                        textAlign: "center",
                        minWidth: "100px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "70px"
                    }}
                >
                    <h2 style={{ marginBottom: "5px", fontWeight: "bold" }}>{cgpanum}</h2>
                    <h5 style={{ textTransform: "uppercase" }}>CGPA</h5>
                </div>
            </div>
        </>
    );
}

export default Educard;
