import { useEffect, useState } from "react";

export function Timer(props) {
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [isBreak, setIsBreak] = useState(true);

  useEffect(() => {
    if (isBreak) {
      setMinutes(25);
      setSeconds(0);
    } else {
      setMinutes(5);
      setSeconds(0);
    }
  }, [isBreak]);

  useEffect(() => {
    let interval = null;

    if (!props.isPaused && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        document.title = `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds
        }`;
      }, 1000);
    } else if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      setIsBreak((prev) => !prev);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [props.isPaused, minutes, seconds]);

  useEffect(() => {
    document.title = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }),
    [minutes, seconds];

  return (
    <>
      <div className="container_timer">
        <div className="numbers">
          <span className="text">
            {minutes < 10 ? `0${minutes}` : minutes}{" "}
          </span>
          <span className="text">{seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        <div className="container_function">
          <button onClick={props.togglePauseResume}>
            <span className="material-icons">
              {props.isPaused ? "play_arrow" : "pause"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
