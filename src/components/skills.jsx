import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import javascript from "../assets/tech/javascript.png";
import cplus from "../assets/tech/cplus.png";
import css from "../assets/tech/css.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import nodejs from "../assets/tech/nodejs.png";
import python from "../assets/tech/python.png";
import reactjs from "../assets/tech/reactjs.png";
import sql from "../assets/tech/sql.png";
import tailwind from "../assets/tech/tailwind.png";
import bootstrap from "../assets/tech/bootstrap.png";
import Footer from "./footer";



function Skills(){
    const technologies_skills = [
        {
            name:"C++",
            icon:cplus,
        },
        {
            name:"Python",
            icon:python,
        },
        {
            name:"Sql",
            icon:sql,
        },
        {
            name:"bootstrap",
            icon:bootstrap,
        },

        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Node JS",
          icon: nodejs,
        },
        
        {
          name: "git",
          icon: git,
        },
        {
          name: "figma",
          icon: figma,
        },
        
        
      ];
    return(
        <>
        
        <motion.div
            className="container-fluid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className="container mt-5 p-4 rounded">
                {/* Title */}
                <motion.h2
                    variants={textVariant(0.2)}
                    className="text-white fw-bold display-3 ml-5 text-center mt-5"
                    
                >
                    Arrows in my Quiver: <span style={{color:"#915eff"}}>Skills</span>
                    
                </motion.h2>
            </div>
            <motion.div />
        </motion.div>
        <motion.div>
        <div className="d-flex flex-wrap flex-row justify-center gap-10">
            {technologies_skills.map((technology) => (
                <div className="w-28 h-28" key={(technology.name)}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
        </motion.div>
        <Footer/>
        </>
    );
}

export default Skills;
