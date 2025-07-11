import React, { useState } from "react";
import { dataTextColor } from "./data";

export function ButtonsColorsText() {
  const [isVisibleColorsText, setIsVisibleColorsText] = useState(false);
  const [mapDataText, setMapDataText] = useState(dataTextColor);

  function toggleControlsText() {
    setIsVisibleColorsText((prev) => !prev);
  }

  function handleColorChangeText(color) {
    const textColor = document.querySelectorAll("span");
    textColor.forEach((element) => {
      element.style.color = color;
    });
  }

  const buttonElementsText = mapDataText.map((item) => {
    return (
      <button
        key={item.id}
        className="colorpicker bord"
        style={{ backgroundColor: item.color }}
        onClick={() => handleColorChangeText(item.color)}
      ></button>
    );
  });

  return (
    <>
      <div className="container_buttons_colors ">
        {isVisibleColorsText && (
          <div className="container_buttons txt_pos_cont">
            {buttonElementsText}
          </div>
        )}
        <div>
          <button
            onClick={toggleControlsText}
            className="control_btn bg_pos_btn"
          >
            <p class="material-icons">abc</p>
          </button>
        </div>
      </div>
    </>
  );
}
