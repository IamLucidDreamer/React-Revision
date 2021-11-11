import React from "react";

const Greet = ({ name, hero, children }) => {
  console.log();
  return (
    <div>
      <h1>
        Hello {name} a. k. a.{hero}
      </h1>
      {children}
    </div>
  );
};

export default Greet;
