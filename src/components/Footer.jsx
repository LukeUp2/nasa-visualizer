import React from "react";

export default function Footer(props) {
  const { handleToggleModal, data } = props;

  return (
    <footer>
      <div className="bg-gradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
