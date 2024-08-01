import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <ul className="navLinks">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li className="dashboardButton">
              <Link href="/">
                <p>Go to Dashboard</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
