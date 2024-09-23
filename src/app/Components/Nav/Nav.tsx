"use client";

import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useWindowSize } from "react-use";

const Nav = () => {
  const { width } = useWindowSize();
  const [windowWidth, setWindowWidth] = useState(700);

  // Only detect width changes when client is loaded, so avoid server/client rendering issues
  useEffect(() => {
    setWindowWidth(width);
  }, [width]);

  return (
    <div className="bg-nav h-20 w-full">
      {windowWidth < 976 ? <MobileNav /> : <DesktopNav />}
    </div>
  );
};

export default Nav;
