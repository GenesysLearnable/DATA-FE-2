import React from "react";
import "./Components.css";
import { Link, NavLink } from "react-router-dom";

export const Button = ({ value, customStyle}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic
  };

  return (
    <>
      <button
        className={`buttonStyle ${customStyle}`}
        onClick={handleSubmit}
        type="submit"
      >
        {value}
      </button>
    </>
  );
};
