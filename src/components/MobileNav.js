import React from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineExplore, MdFileDownload } from "react-icons/md";

function MobileNav() {
  return (
    <div>
      {/* mobileview navigation menu */}
      <div className="md:hidden bottom-0 z-50 flex bg-black w-full p-2 text-red-600 space-x-6  items-end justify-between fixed">
        <AiOutlineHome size={25} />
        <AiOutlineSearch size={25} />
        <MdOutlineExplore size={25} />
        <MdFileDownload size={25} />
      </div>
      {/* mobileview navigation menu end */}
    </div>
  );
}

export default MobileNav;
