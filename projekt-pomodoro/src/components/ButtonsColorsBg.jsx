import React, { useState } from "react";
import { dataBgColor } from "./data";

export function ButtonsColorsBg() {
  const [isVisibleColorsBg, setIsVisibleColorsBg] = useState(false);
  function toggleControlsBg() {
    setIsVisibleColorsBg((prev) => !prev);
  }

  const [mapDataBg, setMapData] = useState(dataBgColor);

  function handleColorChange(color) {
    document.body.style.background = color;
  }

  const buttonElements = mapDataBg.map((item) => {
    return (
      <button
        key={item.id}
        className="colorpicker"
        style={{ background: item.color }}
        onClick={() => handleColorChange(item.color)}
      ></button>
    );
  });

  return (
    <>
      <div className="container_buttons_colors ">
        {isVisibleColorsBg && (
          <div className="container_buttons bg_pos_cont">{buttonElements}</div>
        )}
        <div>
          <button
            onClick={toggleControlsBg}
            className="control_btn txt_pos_btn"
          >
            <p class="material-icons">wallpaper</p>
          </button>
        </div>
      </div>
    </>
  );
}
