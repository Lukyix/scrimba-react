import React, { useState } from "react";
import { Timer } from "./Timer";

export function Main() {
  const [isPaused, setIsPaused] = useState(true);

  function togglePauseResume() {
    setIsPaused((prev) => !prev);
  }

  return (
    <>
      <Timer togglePauseResume={togglePauseResume} isPaused={isPaused} />
    </>
  );
}
