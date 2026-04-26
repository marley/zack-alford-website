import React from "react";

const FilledButton = (props) => {
  return (
    <button
      className={`p-5 text-black ${
        props.disabled
          ? "bg-gray-400 pointer-events-none"
          : "bg-green-400 hover:scale-105"
      } rounded flex items-center transform`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default FilledButton;
