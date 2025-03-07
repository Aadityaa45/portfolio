import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Pro_card from "./projectcard";
import Myimg from "../assets/edited.png";
import Mandiimg from "../assets/mandi.png";
import Parkimg from "../assets/parking.png";
import BankImg from "../assets/bank.jpg";
import Footer from "./footer";


function Projects() {
  return (
    <>
      <motion.div
        className="container-fluid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          variants={textVariant(0.2)}
          className="text-white fw-bold display-3 text-center"
        >
          Projects
        </motion.h1>
      </motion.div>

      {/* Project Description - Responsive & Compact */}
      <div className="container mt-3">
        <div className="row justify-content-center">
          <motion.div
            className="col-lg-8 col-md-10 col-sm-12 text-center px-2"
            variants={fadeIn("left", "spring", 0.3, 1)}
          >
            <motion.p
              className="fs-lg-5 fs-sm-1 fs-md-3"
              style={{
                fontWeight: "bold",
                color: "#aaa6c3",
                maxWidth: "400px", // Compact width for mobile
                margin: "0 auto",
                lineHeight: "1.6",
              }}
              variants={fadeIn("up", "spring", 0.5, 1.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              I have worked on projects across design, development, database
              management, and programming. These projects have provided hands-on
              experience with technologies like C++, MySQL, React, and Node.js,
              focusing on solving real-world problems and delivering practical
              solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Tabs Section - Responsive Row Layout */}
      <div className="container mt-5">
        <div className="row mt-1">
          <div className="tabs-container">
            <Tabs
              defaultActiveKey="Design"
              id="custom-tabs"
              className="mb-3"
              justify
            >
              <Tab eventKey="Design" title="Design">
                Tab content for Design
              </Tab>
              <Tab eventKey="Development" title="Development">
                Tab content for Development
              </Tab>
              <Tab eventKey="Core Programming" title="Core Programming">
                <div className="container-fluid mt-5">
                  <div className="row d-flex align-items-center justify-content-center mt-3 gap-4 mb-3">
                        <Pro_card img={Mandiimg} title="Krishi Upaj Mandi" technology="Mysql,Python" description="A database-driven system to streamline mandi operations, including Gate Entry, Auctions, Bidding, Storage, Purchases, and Transactions. It efficiently manages farmers, traders, and crops, ensuring transparency and smooth market operations"/>
                        <Pro_card img={Parkimg} title="Parking management System" technology="Data Structure,c++" description="An efficient parking system utilizing optimized data structures for fast allocation and retrieval of parking slots. It employs hashing for quick access, arrays for structured slot management, and nodes for dynamic vehicle storage, ensuring seamless parking operations with real-time updates. "/>
                        <Pro_card img={BankImg} title="Bank Management" technology="OOPS,c++" description="A robust banking system designed using object-oriented programming principles for scalability and security. It features encapsulation for data protection, inheritance for modular design, and polymorphism for flexible transactions, ensuring efficient account management, secure transactions, and seamless user experience."/>
                  </div>
                </div>
                
              </Tab>
              <Tab eventKey="Hardware" title="Hardware">
                Tab content for Hardware
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Projects;
