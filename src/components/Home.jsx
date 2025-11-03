import React from "react";

// Assuming you've moved 'Ankit.png' to your 'src/assets' folder
import AnkitPhoto from "../assets/Ankit.png"; 

// Helper for responsiveness - using window.innerWidth for inline media queries
// NOTE: For production-grade responsive design, consider CSS media queries
const breakpoints = {
  mobile: 768 
};

export default function Home() {
  
  // Determine if on mobile based on current window width
  const isMobile = window.innerWidth <= breakpoints.mobile;

  // Define dynamic styles based on screen size
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    maxWidth: 1200,
    width: "90%", // Use a percentage for better centering/margins
    justifyContent: "space-between",
    gap: isMobile ? "32px" : "80px", // Increased gap on desktop
    flexDirection: isMobile ? "column" : "row", // Stack content vertically on mobile
    textAlign: isMobile ? "center" : "left", // Center text on mobile
    margin: "0 auto", // Center the container
  };

  const textContentStyle = { 
    flex: 1, 
    minWidth: isMobile ? '100%' : '50%' 
  };
  
  const imageWrapperStyle = {
    flex: 1,
    display: "flex",
    justifyContent: isMobile ? "center" : "flex-end", // Center image on mobile
    alignItems: "center",
    order: isMobile ? -1 : 0, // Put the image *above* the text on mobile (UX best practice)
  };

  // Improved Call-to-Action (CTA) styles
  const primaryButtonStyle = {
    padding: "14px 36px",
    background: "linear-gradient(90deg, var(--purple-primary), var(--pink-primary))",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 18,
    color: "#fff", // Use white text for contrast on the gradient background
    boxShadow: "0 4px 20px var(--border-glow)",
    textDecoration: "none",
    transition: "transform 0.2s, box-shadow 0.2s", // Add transitions
    border: "none",
    whiteSpace: "nowrap"
  };

  const secondaryButtonStyle = {
    padding: "14px 32px",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 18,
    background: "transparent", // Better contrast than the original dim background
    color: "var(--green-primary)",
    border: "2px solid var(--green-primary)", // Slightly thicker border for definition
    textDecoration: "none",
    transition: "background .2s, color .2s",
    whiteSpace: "nowrap"
  };

  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // Adjust padding to account for fixed navbar height and give more top space
      padding: "120px 0 60px 0", 
      background: "var(--bg-primary)"
    }}>
      <div style={containerStyle}>
        
        {/* LEFT: Text Content */}
        <div style={textContentStyle}>
          <p style={{
            color: "var(--blue-primary)",
            fontWeight: 600,
            letterSpacing: 1.5,
            fontSize: "1.15rem",
            marginBottom: 12
          }}>
            <span role="img" aria-label="wave">👋</span> Hello World! My name is
          </p>
          <h1 className="gradient-text-purple" style={{
            fontSize: isMobile ? "2.8rem" : "4rem", // Bigger on desktop
            fontWeight: 900,
            letterSpacing: "-2px",
            lineHeight: 1.1, // Improved readability for large text
            margin: 0,
            marginBottom: 10
          }}>
            Ankit Pandey
          </h1>
          
          <h2 style={{
            color: "var(--green-primary)",
            fontSize: isMobile ? "1.8rem" : "2.5rem", // Larger on desktop
            fontWeight: 800,
            margin: 0,
            marginBottom: 24,
            lineHeight: 1.2
          }}>
            Software Develope
            r and Data Analyst.
          </h2>
          
          <p style={{
            color: "var(--text-secondary)", // Use a slightly subdued text color for body copy
            fontSize: "1.15rem",
            maxWidth: 600,
            marginBottom: 40, // Increased spacing
          }}>
            "Passionate Software Developer and Data Analyst skilled in building robust applications and transforming complex data into actionable business insights."
          </p>
          
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
            
            {/* Primary CTA */}
            <a 
              href="#projects" 
              style={primaryButtonStyle}
              className="primary-btn-hover" // Class for external CSS hover
            >
              Explore My Work
            </a>
            
            
          </div>
        </div>

        {/* RIGHT: Image */}
        <div style={imageWrapperStyle}>
          <img
            src={AnkitPhoto} // Use the imported variable
            alt="Ankit Pandey Professional Portrait"
            loading="eager" 
            style={{
              width: isMobile ? 250 : 320, // Width for the oval
              height: isMobile ? 320 : 400, // Height for the oval (taller than width)
              objectFit: "cover",
              // 🎯 OVAL SHAPE: Use two values for border-radius. 
              // The first value controls horizontal curvature, the second controls vertical.
              // Combined with a height > width, this creates the oval.
              borderRadius: '50% / 80%', 
              // Adjust objectPosition to keep the head visible. 
              // 'center top' works well for headshots within an oval.
              objectPosition: "center top", 
              boxShadow: "0 0 0 8px rgba(168,85,247,0.1), 0 0 25px rgba(168,85,247,0.4)", 
              border: "4px solid var(--purple-primary)", 
            }}
          />
        </div>
      </div>
    </section>
  );
}
