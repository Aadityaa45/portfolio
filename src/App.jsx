// import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Skills from "./components/skills";
// import Hero from "./components/Hero";
// import bannerBg from "./assets/banner-bg.png";
// import About from "./components/About";
// import Projects from "./components/projects";

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Main Wrapper with Background Color */}
//       <div
//         className="position-relative text-white min-vh-100"
//         style={{ backgroundColor: "#050816", zIndex: "0" }}
//       >
//         {/* Navbar is OUTSIDE to Avoid Overlapping Issues */}
//         <Navbar />

//         {/* Background Image */}
//         <div
//           className="container-fluid position-absolute top-0 start-0 w-100 h-100"
//           style={{
//             backgroundImage: `url(${bannerBg})`,
//             backgroundSize: "cover", // Ensures the image covers the area
//             backgroundPosition: "center", // Keeps it centered
//             backgroundRepeat: "no-repeat", // Prevents tiling
//             backgroundAttachment: "fixed", // Optional, for parallax effect
//             zIndex: "-1", // Push it behind everything
//           }}
//         />

//         {/* Hero Section */}
//         <div className="position-relative z-1">
//           <Hero />
//         </div>

//         {/* Other Sections */}
//         <div className="position-relative z-1 mt-5">
//           <About />
//         </div>
//         <div className="position-relative z-1 mt-5">
//           <Skills />
//         </div>
//         <div className="position-relative z-1 mt-5">
//           <Projects />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/projects";
// import Contact from "./components/Contact"; 
import bannerBg from "./assets/banner-bg.png";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="position-relative text-white min-vh-100" style={{ backgroundColor: "#050816", zIndex: "0" }}>
        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div
          className="container-fluid position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            zIndex: "-1",
          }}
        />

        {/* Dynamic Content Based on Route */}
        <div className="position-relative z-1 mt-5">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
             <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
