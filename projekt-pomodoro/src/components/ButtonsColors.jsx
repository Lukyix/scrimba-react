import React, { useState } from "react";
import data from "./data";
export default function ButtonsColors() {
  const [isVisibleColors, setIsVisibleColors] = useState(false);
  function toggleControls() {
    setIsVisibleColors((prev) => !prev);
  }

  const [mapData, setMapData] = useState(data);

  function handleColorChange(color) {
    document.body.style.background = color;
  }

  const buttonElements = mapData.map((item) => {
    return (
      <button
        key={item.id}
        className="color_btn"
        style={{ background: item.color }}
        onClick={() => handleColorChange(item.color)}
      ></button>
    );
  });

  return (
    <>
      <div className="container_buttons_colors">
        <div className="control_btn">
          <button onClick={toggleControls} className="control_btn">
            <p class="material-icons">color_lens</p>
          </button>
        </div>
        {isVisibleColors && (
          <div className="container_buttons">{buttonElements}</div>
        )}
      </div>
    </>
  );
}
