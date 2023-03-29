import React from "react";
import "../styles/styles.css";

const Picture = ({ photographer, src }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={src} alt="img" />
      </div>
      <div className="info">
        <p style={{ color: 'SteelBlue' }}>{photographer}</p>
      </div>
    </div>
  );
};

export default Picture;
