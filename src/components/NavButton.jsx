import React from "react";

const NavButton = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-1 md:gap-2 lg:gap-3 p-1 md:p-2 lg:p-3  font-semibold cursor-pointer
                 bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500
                 bg-[length:200%_100%] bg-clip-text text-transparent
                 transition-all duration-500 hover:brightness-125"
      style={{
        backgroundPosition: "0% 0",
        transition: "background-position 0.5s ease-in-out",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundPosition = "100% 0")
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "0% 0")}
    >
      {icon && <span className="text-lg  md:text-xl lg:text-xl hover:text-pink-500 transition-all duration-500  text-indigo-500  ">{icon}</span>}
      {text}
    </button>
  );
};

export default NavButton;
