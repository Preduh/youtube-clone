import React, { useState } from "react"

import { Container } from "./styles"

const SideBar: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  const expandBar = () => {
    setToggle(!toggle)
  }

  return (
    <Container>
      <div className="menu">
        <input
          type="checkbox"
          className="menuCheckbox"
          id="menuBox"
          onChange={expandBar}
        />
        <label className="menuLabel" htmlFor="menuBox">
          <img src="./images/menu.png" alt="menu" />
        </label>
        {/* Expanded Sidebar */}
        <div className="fullSidebar">
          <div className="iconsBar">
            <div className="expandedMenuIcon">
              <input
                type="checkbox"
                className="menuCheckbox"
                id="menuBox"
                onChange={expandBar}
              />
              <label className="menuLabel" htmlFor="menuBox">
                <img src="./images/menu.png" alt="menu" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <button className="icons">
        <img src="./images/home.png" alt="home" />
        <h1>Início</h1>
      </button>
      <button className="icons">
        <img
          src="./images/compass.png"
          alt="compass"
          style={{ width: "24px", height: "24px" }}
        />
        <h1>Explorar</h1>
      </button>
      <button className="icons">
        <img src="./images/subscription.png" alt="subscription" />
        <h1>Inscrições</h1>
      </button>
      <button className="icons">
        <img src="./images/library.png" alt="library" />
        <h1>Biblioteca</h1>
      </button>
    </Container>
  )
}

export default SideBar
