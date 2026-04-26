import React from "react";

const EmailDiv = () => {
  return (
    <a
      href={`mailto:${import.meta.env.VITE_EMAIL_FIRST}@${import.meta.env.VITE_EMAIL_LAST}`}
      className="hover:text-gray-200"
    >{`${import.meta.env.VITE_EMAIL_FIRST}@${import.meta.env.VITE_EMAIL_LAST}`}</a>
  );
};

export default EmailDiv;
