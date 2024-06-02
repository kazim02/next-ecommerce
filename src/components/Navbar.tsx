"use client";
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ background: "pink", }}
    >
      <div className="container-fluid">
        <Link href="/" passHref>
          <span className="navbar-brand">E-Commerce</span>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" passHref>
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" passHref>
                <span className="nav-link">Contact Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/terms" passHref>
                <span className="nav-link">Terms & Conditions</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
