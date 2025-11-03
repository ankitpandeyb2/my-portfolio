import React from "react";

export default function About() {
  return (
    <section id="about" className="section-padding fade-in" style={{ background: "var(--bg-secondary)", borderRadius: 18, margin: "64px 0", boxShadow: "0 2px 24px 0 var(--border-glow)" }}>
      <div className="container">
        <h2 className="gradient-text-purple" style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, textAlign: "center" }}>About Me</h2>
        <div style={{ maxWidth: 700, margin: "0 auto", color: "var(--text-secondary)", fontSize: 18, lineHeight: 1.7, textAlign: "center" }}>
          <p>
            Hi! I’m <span style={{ color: "var(--purple-primary)", fontWeight: 600 }}>Ankit Pandey</span>, a proactive computer science student passionate about blending analytics, cloud, and web technologies. 
          </p>
          <p style={{ marginTop: 16 }}>
            My experience spans Python, PHP, Pandas, NumPy, backend integration, and data-driven web solutions. I excel at working in teams to deliver robust, reliable, and scalable applications, proven at LogixFirm and across data analysis projects. I enjoy learning new frameworks and optimizing my resume for campus placements!
          </p>
        </div>
      </div>
    </section>
  );
}
    
