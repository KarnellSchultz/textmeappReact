import React from 'react'

export default function Header() {
    return (
        <>
            <div className="nav-container">
            <div className="nav">
              <div className="brand">
              </div>
              <div className="links">
                <a
                  href="https://glitch.com/@karnellschultz"
                  target="_blank"
                  rel="noopener"
                  >Glitch
                </a >
                <a
                  href="https://github.com/KarnellSchultz/TextMeApp"
                  target="_blank"
                  rel="noopener"
                  >GitHub
                </a >
                <a
                  href="mailto: KarnellSchultz@gmail.com"
                  target="_blank"
                  rel="noopener"
                  >Contact Me</a>
              </div>
            </div>
          </div>
          <div className="section header">
            <h1 className="h1">SMS Colors App</h1>
      </div>
        </>
    )
}
