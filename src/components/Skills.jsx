import React from "react";
import { Code2, Database, Settings, Cpu } from "lucide-react";

const skillsData = [
  {
    icon: <Code2 size={30} color="#a855f7" />,
    title: "Programming Languages",
    skills: ["Frontend (HTML, CSS, JavaScript, React)","Python", "PHP", "JavaScript", "SQL"]
  },
  {
    icon: <Cpu size={30} color="#ec4899" />,
    title: "Data Analytics",
    skills: ["Power BI","Pandas", "NumPy", "Matplotlib", "Excel"]
  },
  {
    icon: <Database size={30} color="#3b82f6" />,
    title: "Cloud & Database",
    skills: ["AWS", "MySQL", "XAMPP"]
  },
  {
    icon: <Settings size={30} color="#10b981" />,
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "Linux", "Firebase", "VS Code",]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding container" style={{ display: "grid", gap: 32 }}>
      <h2 className="gradient-text-purple" style={{ fontSize: 32, fontWeight: 700, marginBottom: 32, textAlign: "center" }}>Skills</h2>
      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {skillsData.map((skill, idx) => (
          <div key={idx} className="glow-card fade-in" style={{
            background: "var(--bg-card)",
            borderRadius: 18,
            padding: "36px 26px",
            textAlign: "center",
            boxShadow: "0 4px 32px 0 var(--border-glow)",
            border: "1.5px solid var(--border-glow)",
          }}>
            <div style={{ marginBottom: 10 }}>{skill.icon}</div>
            <h3 style={{ color: "var(--text-primary)", marginBottom: 14, fontWeight: 700, letterSpacing: 1 }}>{skill.title}</h3>
            <ul style={{ color: "var(--text-secondary)", fontSize: 16, listStyle: "none", padding: 0 }}>
              {skill.skills.map((s, i) => <li key={i} style={{ margin: "6px 0" }}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


