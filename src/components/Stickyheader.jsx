// App.js

import { Input } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function StickyHeader() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setIsHeaderVisible(!isScrolledDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header
        className={`${
          isHeaderVisible ? "sticky" : "fixed"
        } top-0 w-full bg-primary p-4 z-10`}
      >
        <div className=" flex items-center">
          <Link to={"/"}>
            <h1 className=" flex-1 text-sm font-poppins text-brown-500">
              aestheticStuff
            </h1>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default StickyHeader;
