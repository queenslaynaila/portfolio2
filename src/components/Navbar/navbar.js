import React, { useRef } from 'react';
import './navbar.css';

export default function Navbar() {
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const navcloseRef = useRef(null);
  const navlinkRefs = useRef([]);

  function handleToggle() {
    menuRef.current.classList.add('show-menu');
  }

  function handleClose() {
    menuRef.current.classList.remove('show-menu');
  }

  function linkAction (){
    menuRef.current.classList.remove('show-menu')
  }



  return (
     <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#/" className="nav__logo">
            QUEENSLAY
          </a>
          <div className="nav__menu" id="nav-menu" ref={menuRef}>
            <ul className="nav_list grid">
              <li className="nav__item">
                <a href="#/" className="nav_link" onClick={linkAction} ref={(el) => (navlinkRefs.current[0] = el)}>
                  <i className="bx bxs-home-alt-2 nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a onClick={linkAction} href="#/about" className="nav_link" ref={(el) => (navlinkRefs.current[1] = el)}>
                  <i className="bx bx-user nav__icon"></i>About
                </a>
              </li>
              <li className="nav__item">
                <a onClick={linkAction} href="#/projects" className="nav_link" ref={(el) => (navlinkRefs.current[2] = el)}>
                  <i className="bx bx-file-blank nav__icon"></i>Projects
                </a>
              </li>
              <li className="nav__item">
                <a onClick={linkAction} href="#/skills" className="nav_link" ref={(el) => (navlinkRefs.current[3] = el)}>
                  <i className="bx bx-file-blank nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a onClick={linkAction} href="#/experiences" className="nav_link" ref={(el) => (navlinkRefs.current[4] = el)}>
                  <i className="bx bxs-objects-horizontal-center nav__icon"></i>Experiences
                </a>
              </li>
              <li className="nav__item">
                <a onClick={linkAction} href="#/contact" className="nav_link" ref={(el) => (navlinkRefs.current[5] = el)}>
                  <i className="bx bx-message-minus nav__icon"></i>Contact me
                </a>
              </li>
            </ul>
            <i
              className="bx bx-window-close nav__icon nav__close"
              ref={navcloseRef}
              onClick={handleClose}
            ></i>
          </div>
          <div className="nav_btns">
            <div
              className="nav__toggle"
              ref={toggleRef}
              onClick={handleToggle}
              id="nav-toggle"
            >
              <i className="bx bx-server nav__icon"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
