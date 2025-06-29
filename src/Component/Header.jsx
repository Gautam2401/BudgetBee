import React from "react";

import logo from "../assets/generated-image.png"

export default function Header() {
    return (
        <div style={{
              background: "#4f8a7d",
              padding: "20px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img src={logo} alt="Budget Bee" style={{ width: 40, height: 40, marginRight: 12 }} />
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 28 }}>Budget Bee</span>
            </div>
    )
}
