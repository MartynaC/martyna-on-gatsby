import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { useState } from 'react';
import "bootstrap/dist/js/bootstrap.min.js";

const BottomNav = () => {
    const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef(null)

  useEffect(() => {
    const dropdown = dropdownRef.current;
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle("show");
      setIsOpen(!isOpen);
    });

    const dropdownLinks = dropdown.querySelectorAll(".dropdown-item");

    dropdownLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        setIsOpen(false);
        const href = link.getAttribute('href');
        if (href) {
          window.location.href = href;
        }
      });
    });
  }, [isOpen]);

  
    return (
      <nav className="bottom-nav d-md-none">
        <ul>
          <div className="dropdown dropup" ref={dropdownRef}>
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton">
  Projects
</button>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-up" aria-labelledby="dropdownMenuButton">
              <Link to="/art" className="dropdown-item">CREATIVE</Link>
              <Link to="/work" className="dropdown-item">COMMERCIAL</Link>
            </div>
          </div>        
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      </nav>
    );
  };
  

export default BottomNav;
