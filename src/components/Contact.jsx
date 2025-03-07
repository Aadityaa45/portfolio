import React from "react";
import { motion } from "framer-motion";
import Hand from "../assets/hand.avif";
import Footer from "./footer";

function Contact() {
    const textStyle = {
        fontSize: window.innerWidth < 768 ? "30px" : "40px", 
        textAlign: "center",
        fontWeight: 'bold',
        color: 'white'
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "15cd316c-ec76-466d-81e1-351e6ae23bcb");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
    
        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <>
            <motion.div
                className="container-fluid mt-5 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="row">
                    <motion.h2 className="col-12 mt-2" style={textStyle}>
                        Contact With Me
                    </motion.h2>
                </div>

                {/* Fixing Layout */}
                <div className="row mt-5 d-flex align-items-center justify-content-center">
                    {/* Left Section - Image */}
                    <div className="col-md-5 col-sm-12 d-flex justify-content-center align-items-center flex-column text-white" style={{ boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)' }}>
                        <img 
                            src={Hand} 
                            alt="Handshake" 
                            className="img-fluid" 
                            style={{ 
                                borderRadius: "10px", 
                                objectFit: "cover", 
                                width: "100%", 
                                maxHeight: "400px" 
                            }} 
                        />
                        <h2 className="mt-3 w-100 text-start custom-purple-text" style={{ fontWeight: 'bold' }}>Aaditya Joshi</h2>
                        <h5 className="w-100 text-start mt-3" style={{ color: "#aaa6c3", fontWeight: 'bold' }}>MERN STACK DEVELOPER</h5>
                        <p className="mt-3" style={{ color: "#aaa6c3" }}>
                            Feel free to reach out to me for any inquiries, collaborations, or discussions. Whether you have a project idea, need technical assistance, or just want to connect, I'm always open to new opportunities. Drop me a message, and I'll get back to you as soon as possible. Looking forward to hearing from you!
                        </p>
                        <p className="w-100 text-start" style={{ color: "#aaa6c3" }}>
                            Phone: <span style={{ fontWeight: 'bold' }}>+91 7879828021</span>
                        </p>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="col-md-5 col-sm-12">
                        <form onSubmit={onSubmit}>
                            <div className="container-fluid px-3">
                                <motion.div 
                                    className="d-flex flex-column gap-4 mt-4" 
                                    initial={{ opacity: 0 }} 
                                    whileInView={{ opacity: 1 }} 
                                    transition={{ duration: 0.7 }}
                                >
                                    <div className="d-flex flex-column">
                                        <label className="fs-4 fw-bold">Name</label>
                                        <input 
                                            name="name"
                                            type="text" 
                                            placeholder="Enter your name" 
                                            style={{ width: "100%", height: "40px", borderRadius: "7px",  background: "transparent", color: "white", padding: "10px" ,border: "2px solid transparent",animation: "borderAnimation 2s infinite alternate"}} 
                                        />
                                    </div>

                                    <div className="d-flex flex-column">
                                        <label className="fs-4 fw-bold">Email Address</label>
                                        <input 
                                            name="email"
                                            type="email" 
                                            placeholder="Enter your email" 
                                            style={{ width: "100%", height: "40px", borderRadius: "7px",  background: "transparent", color: "white", padding: "10px",border: "2px solid transparent",animation: "borderAnimation 2s infinite alternate" }} 
                                        />
                                    </div>

                                    <div className="d-flex flex-column">
                                        <label className="fs-4 fw-bold">Message</label>
                                        <textarea 
                                            name="message"
                                            placeholder="Write your message here..." 
                                            style={{ width: "100%", height: "150px", borderRadius: "7px", background: "transparent", color: "white", padding: "10px",border: "2px solid transparent",
                    animation: "borderAnimation 2s infinite alternate" }} 
                                        />
                                    </div>

                                    <motion.button 
                                        className="btn  mt-3" 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        style={{ width: "150px", borderRadius: "7px",backgroundColor:"#915eff",color:'white' }}
                                    >
                                        Send Message
                                    </motion.button>
                                </motion.div>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
            <Footer/>
        </>
    );
}

export default Contact;
