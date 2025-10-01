import React, { useState, useEffect } from "react";
import NavButton from "./NavButton.jsx";
import { Plus, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`transition bg-transparent ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-sm z-10  w-screen   shadow-md shadow-indigo-300  fixed top-0 flex justify-around items-center p-3  duration-500`}
    >
      <div className="flex p-1 items-center gap-3 ">
        <img
          src="/logo.png"
          className="h-10 w-10 animate-bounce transition-all duration-300  aspect-square object-contain "
        />
        <h2 className="font-bold  text-xl uppercase text-indigo-800  ">
          Trip Management
        </h2>
      </div>

      <div className="flex gap-4 p-2 items-center ">
        <NavButton
          text={"Add Trip"}
          icon={<Plus />}
          onClick={() => navigate("/add")}
        />
        <NavButton
          text={"View Trip"}
          icon={<Eye />}
          onClick={() => navigate("/trips")}
        />
      </div>
    </div>
  );
};

export default Navbar;
