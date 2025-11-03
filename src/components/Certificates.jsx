import React from "react";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Microsoft Student Learn Ambassador",
    issuer: "DevTown",
    year: "",
    link: "https://www.cert.devtown.in/verify/Z1NJ8Wp"
  },
  {
    title: "Building Database Applications in PHP",
    issuer: "University of MICHIGAN",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/2ZN92A9R2AHG"
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/OHABGSQNNZWS"
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/8WSM9UEBYPW7"
  },
  {
    title: "Linux Fundamentals",
    issuer: "LearnQuest",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/2OD28FYA8475"
  },
  {
    title: "Introduction to IOT",
    issuer: "IIT Bombay",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/verify/JRCWSLYEZQL9"
  },
  {
    title: "Deloitte Australia Job Simulation",
    issuer: "Deloitte (Forage)",
    year: "2025",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68ed58cfa6857bd601c91c05_1762013690029_completion_certificate.pdf"
  },
  {
    title: "Logix Firm Summer Training",
    issuer: "Logix Firm",
    year: "2023",
    link: ""
  },
  {
    title: "CCNAv7: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    year: "2024",
    link: ""
  },
  {
    title: "Digital Marketing Fundamentals",
    issuer: "IIDE",
    year: "2025",
    link: ""
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding fade-in" style={{ background: "var(--bg-secondary)", borderRadius: 18, margin: "64px 0", boxShadow: "0 2px 24px 0 var(--border-glow)" }}>
      <div className="container">
        <h2 className="gradient-text-purple" style={{ fontSize: 32, fontWeight: 700, marginBottom: 28, textAlign: "center" }}>Certificates</h2>
        <div style={{ display: "grid", gap: 26, gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))" }}>
          {certificates.map((cert, idx) => (
            <div key={idx} className="glow-card fade-in" style={{
              background: "var(--bg-card)",
              borderRadius: 14,
              padding: "28px 20px",
              boxShadow: "0 3px 20px 0 var(--border-glow)",
              border: "1.5px solid var(--border-glow)",
              minHeight: 140,
              display: "flex", flexDirection: "column", justifyContent: "center"
            }}>
              <Award size={28} color="#ec4899" style={{ marginBottom: 10 }} />
              <h3 style={{ color: "var(--pink-secondary)", fontWeight: 600, fontSize: 19, marginBottom: 7 }}>{cert.title}</h3>
              <div style={{ fontSize: 15, color: "var(--text-secondary)", marginBottom: 7 }}>
                <b style={{ color: "var(--purple-primary)" }}>{cert.issuer}</b> {cert.year && <>• {cert.year}</>}
              </div>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--green-primary)", textDecoration: "underline", fontSize: 15 }}>Verify</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

