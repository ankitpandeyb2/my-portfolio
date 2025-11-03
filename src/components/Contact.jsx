import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding fade-in" style={{ marginBottom: 64 }}>
      <div className="container" style={{ maxWidth: 680 }}>
        <h2 className="gradient-text-purple" style={{ fontSize: 32, fontWeight: 700, marginBottom: 30, textAlign: "center" }}>Contact</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <a href="mailto:ankitpandeyit2004@gmail.com" style={{ color: "var(--pink-primary)", fontSize: 21, textDecoration: "none", fontWeight: "bold", marginBottom: 7 }}>
            <Mail size={22} style={{ marginRight: 8, verticalAlign: "middle" }} />
            ankitpandeyit2004@gmail.com
          </a>
          <a href="https://github.com/ankitpandeyb2" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple-secondary)", fontSize: 21, textDecoration: "none", fontWeight: "bold", marginBottom: 7 }}>
            <Github size={22} style={{ marginRight: 8, verticalAlign: "middle" }} />
            github.com/ankitpandeyb2
          </a>
          <a href="https://linkedin.com/in/ankitpandeyb2" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue-primary)", fontSize: 21, textDecoration: "none", fontWeight: "bold" }}>
            <Linkedin size={22} style={{ marginRight: 8, verticalAlign: "middle" }} />
            linkedin.com/in/ankitpandeyb2
          </a>
        </div>
      </div>
    </section>
  );
}
