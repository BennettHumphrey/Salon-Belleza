import React, { FC } from "react";
import { IoMenu } from "react-icons/io5";

type MobileNavProps = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav:FC<MobileNavProps> = ({ setMenuOpen }) => {



  return (
    <div className="flex h-full w-full z-50 relative">
      <div
        onClick={() => setMenuOpen((prev) => !prev)}
        className="text-link h-full w-16 flex justify-center items-center"
      >
        <IoMenu className="h-8 w-8" />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {/* <img src="" /> */}
        <h1 className="">LOGO</h1>
      </div>
      <div className="w-16" />
    </div>
  );
};

export default MobileNav;
