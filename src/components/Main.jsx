import React from "react";

export default function Main(props) {
  const { data } = props;

  return (
    <div className="img-container">
      <img
        className="background-image"
        src={data.hdurl}
        alt={data.title || "bg-img"}
      />
    </div>
  );
}
