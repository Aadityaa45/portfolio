import React from "react";
import Card from "./cards";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Myimg from "../assets/edited.png";
import Wdlogo from "../assets/wd-logo.webp";
import Sqllogo from "../assets/sql-dev.webp";
import deslogo from "../assets/deslogo.webp";
import dsalogo from "../assets/dsa.png";
import Cclogo from "../assets/comcode.webp";
import Debatelogo from "../assets/debate.png";
import Educard from "./edcard";
import collegeicon from "../assets/college_study.webp";
import Footer from "./footer";

function About() {
  return (
    <>
      {/**This is about me section */}
      <motion.div
        className="container-fluid"
        initial="hidden" /* Initially the view is set to be hiden by default * */
        whileInView="show" /**While in view the property is set to show that means when th =e container comes in the view and that moment it is visible and when go away from the view  it again set to be hide */
        viewport={{ once: false, amount: 0.3 }} /**This means the animation will trigger every time the element enters the viewport, not just once. */
      >
        <div className="container mt-5 p-4 rounded">
          {/* Title */}
          <motion.h2
            variants={textVariant(0.2)}
            className="fw-bold display-3 ml-5 custom-purple-text"
          >
            About Me
          </motion.h2>

          {/* Content */}
          <div className="row text-white d-flex align-items-center justify-content-center mt-3">
            {/* Left Column - Description */}
            <motion.div
              id="description-section"
              className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-start"
              variants={fadeIn("left", "spring", 0.3, 1)}
              style={{ padding: "10px" }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  color: "#aaa6c3",
                }}
                className="description-text"
              >
                I am a person who possesses a rich inner world, brimming with
                imagination, empathy, and idealism. I believe in manifesting
                unique ideas and innovative solutions to complex problems.
                <br />
                I consider both factual and critical aspects along with the
                feelings of others while making decisions. I have worked on
                various new ideas and implemented my academic learnings to solve
                complex real-world problems.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="col-lg-6 col-md-6 col-sm-12 text-center"
              style={{ borderRadius: "10px" }}
              variants={fadeIn("right", "spring", 0.5, 1)}
            >
              <img
                src={Myimg}
                className="img-fluid rounded shadow-lg"
                alt="Profile"
                style={{
                  padding: "20px",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Skills & Cards Section */}
      <motion.div
        className="container-fluid d-flex justify-content-center align-items-center mt-4"
        variants={fadeIn("up", "spring", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="row d-flex flex-wrap justify-content-center align-items-center gap-4">
          <Card
            img={Wdlogo}
            content="I am a passionate web developer skilled in HTML, CSS, JavaScript, and React."
          />
          <Card
            img={Sqllogo}
            content="Strong DBMS skills in ER models, SQL queries, and database management."
          />
          <Card
            img={deslogo}
            content="Good understanding of UI/UX principles, creating intuitive and responsive designs."
          />
          <Card
            img={dsalogo}
            content="Strong understanding of data structures and algorithms, optimizing time and space complexity."
          />
          <Card
            img={Cclogo}
            content="Enjoy solving coding problems, optimizing solutions, and enhancing DSA skills."
          />
          <Card
            img={Debatelogo}
            content="Passionate about debates, participated in various competitions, enjoy factual discussions."
          />
        </div>
      </motion.div>
      
      {/* Academic Journey Section */}
      <motion.div
  className="container-fluid mt-5"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: false, amount: 0.3 }}
>
  <div className="row">
    <motion.h2 className="fs-lg-1 fs-md-2 fs-sm-4 fw-bold text-center mt-4">
      Academic Journey
    </motion.h2>
  </div>

  <div className="container mt-5">
    <div className="container mx-auto" style={{ maxWidth: "900px" }}>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Educard
          edu="B.Tech Computer Science and Engineering"
          place="Avantika University, Ujjain (M.P.)"
          year="2023-27"
          cgpanum="8.0"
          img={collegeicon}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Educard
          edu="Higher Secondary (12th)"
          place="Vidyanjali International School"
          year="2023"
          cgpanum="83%"
          img={collegeicon}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Educard
          edu="Higher School Education (10th)"
          place="Vidyanjali International School"
          year="2021"
          cgpanum="90%"
          img={collegeicon}
        />
      </motion.div>

    </div>
  </div>
</motion.div>;
                <Footer/>
    </>
  );
}

export default About;
