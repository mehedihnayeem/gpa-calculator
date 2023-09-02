import React from "react";
import bdLogo from "../images/bd_logo.png";
export default function NavBar() {
  return (
    <div className="nab-bar">
      <div>
        <img src={bdLogo} alt="logo" />
      </div>
      <div>
        <h1>WEB BASED GPA CALCULATION SYSTEM FOR EDUCATION BOARDS</h1>
        <h3>JSC/JDC/SSC/DAKHIL/HSC/ALIM AND EQUIVALENT EXAMINATION</h3>
      </div>
    </div>
  );
}
