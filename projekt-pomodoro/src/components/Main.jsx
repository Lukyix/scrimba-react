import React from "react";
import Timer from "./Timer";

export default function Main() {
  const [seconds, setSeconds] = React.useState("00");
  const [minutes, setMinutes] = React.useState(25);

  function startTimer() {
    const interval = setInterval(() => {});
  }

  React.useEffect(() => {
    startTimer();
  }, []);

  return (
    <>
      <Timer seconds={seconds} minutes={minutes} />
    </>
  );
}
