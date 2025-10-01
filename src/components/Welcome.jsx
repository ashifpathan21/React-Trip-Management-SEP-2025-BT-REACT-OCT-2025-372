import React from "react";

const Welcome = ({ name }) => {
  return (
    <div className="pt-30 p-4 md:px-8 lg:px-10  ">
      <h2 className="font-bold font-sans text-2xl  ">
        Welcome Back {name} 👋{" "}
      </h2>
    </div>
  );
};

export default Welcome;
