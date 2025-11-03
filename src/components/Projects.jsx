import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Code Complexity Analyzer (Chrome Extension)",
    desc: "Developed a Chrome extension to automatically analyze LeetCode code submissions and provide instant Big O complexity ratings. Integrated Gemini API for precise time and space estimates, and built a token-limiting system to optimize API usage and scalability.",
    tech: ["React", "Chrome Extension", "Gemini API", "JavaScript"],
    github: "https://github.com/ankitpandeyb2/code-complexity-analyzer", // update this with your repo link
    demo: ""
  },
  {
    title: "Portfolio Website",
    desc: "A fully responsive and modern personal portfolio website built with React and Vite, showcasing skills, projects, certifications, and achievements. The site features neon accents, glass-morphism, a smooth navigation bar, and easy, interactive project browsing.",
    tech: ["React", "Vite", "Lucide Icons", "CSS"],
    github: "https://github.com/ankitpandeyb2/portfolio-website", // update this with your repo link
    demo: ""
  },
  {
    title: "Job Market & Salary Analysis",
    desc: "Analysed 1,000+ jobs for pay, role trends, fresher vs. experienced. Cleaned, visualized, and compared data using Python, Pandas, Excel, Power BI; Cloud: Azure Blob Storage.",
    tech: ["Python", "Pandas", "Excel", "Power BI", "Azure"],
    github: "",
    demo: ""
  },
  {
    title: "Crop Yield Analysis",
    desc: "Identified top-yield crops and yield patterns using Python data and Power BI. Delivered bar/heatmap visualizations highlighting trends and regional production.",
    tech: ["Python", "Pandas", "Excel", "Matplotlib"],
    github: "",
    demo: ""
  },
  {
    title: "Employee Satisfaction Reviews",
    desc: "Power BI dashboards and trend reports for 2,000+ reviews. Improved insights and satisfaction outcomes.",
    tech: ["Python", "Pandas", "Excel", "Power BI"],
    github: "",
    demo: ""
  },
  {
    title: "Online Voting System",
    desc: "Engineered OTP-based secure voting platform with real-time dashboard using MySQL, PHP, React. Integrated reliable authentication, voting permissions, and chart display.",
    tech: ["PHP", "MySQLi", "React", "Chart.js"],
    github: "",
    demo: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding fade-in" style={{ background: "var(--bg-secondary)", borderRadius: 18, margin: "64px 0", boxShadow: "0 2px 24px 0 var(--border-glow)" }}>
      <div className="container">
        <h2 className="gradient-text-purple" style={{ fontSize: 32, fontWeight: 700, marginBottom: 28, textAlign: "center" }}>Projects</h2>
        <div style={{ display: "grid", gap: 26, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {projects.map((proj, idx) => (
            <div key={idx} className="glow-card fade-in" style={{
              background: "var(--bg-card)",
              borderRadius: 16,
              padding: "32px 22px",
              boxShadow: "0 4px 28px 0 var(--border-glow)",
              border: "1.5px solid var(--border-glow)",
              minHeight: 210
            }}>
              <h3 style={{ color: "var(--pink-primary)", fontWeight: 700, marginBottom: 10 }}>{proj.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, marginBottom: 18 }}>{proj.desc}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                {proj.tech.map((t, i) => (
                  <span key={i} style={{
                    background: "linear-gradient(90deg, var(--purple-primary), var(--pink-primary))",
                    color: "#fff", borderRadius: 16, fontSize: 14, padding: "4px 14px", margin: 0, fontWeight: 500
                  }}>{t}</span>
                ))}
              </div>
              <div>
                {proj.github && <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "var(--purple-primary)", marginRight: 14 }}><Github size={20} /></a>}
                {proj.demo && <a href={proj.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo" style={{
                  color: "var(--green-primary)",
                  background: "rgba(16,185,129,0.08)",
                  borderRadius: 12,
                  padding: "4px 12px",
                  fontSize: 15,
                  fontWeight: 600,
                  marginLeft: 8
                }}><ExternalLink size={18} style={{verticalAlign:"middle"}}/> Live Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


