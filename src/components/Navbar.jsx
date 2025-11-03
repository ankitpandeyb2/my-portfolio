import React from 'react';
import { Home, User, Award, Layers, Folder, Mail } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home', icon: <Home size={18} /> },
  { href: '#about', label: 'About', icon: <User size={18} /> },
  { href: '#skills', label: 'Skills', icon: <Layers size={18} /> },
  { href: '#projects', label: 'Projects', icon: <Folder size={18} /> },
  { href: '#certificates', label: 'Certificates', icon: <Award size={18} /> },
  
];

export default function Navbar() {
  return (
    <nav className="navbar" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 10, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", borderBottom: "1.5px solid rgba(168,85,247,0.08)"
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0"
      }}>
        <span className="gradient-text" style={{ fontWeight: 700, fontSize: 24 }}>Ankit Pandey</span>
        <ul className="navbar-links" style={{ display: "flex", gap: "24px", listStyle: "none" }}>
          {navLinks.map(link =>
            <li key={link.label}>
              <a 
                href={link.href}
                style={{ color: "#fff", textDecoration: "none", fontWeight: 500, display: "flex", alignItems: "center", gap: "7px", position: "relative", transition: "color 0.2s" }}
                className="gradient-text-purple"
              >
                {link.icon} {link.label}
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
