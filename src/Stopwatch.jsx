// import { useEffect, useState } from "react";

// export default function Stopwatch() {
//   const [isRunning, setIsRunning] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
//       }, 1000);
//     } else {
//       clearInterval(intervalId);
//     }
//     return () => clearInterval(intervalId);
//   }, [isRunning]);

//   const startStop = () => {
//     setIsRunning((prevIsRunning) => !prevIsRunning);
//   };
//   const reset = () => {
//     setIsRunning(false);
//     setElapsedTime(0);
//   };

//   const formatTime = (sec) => {
//     const min = Math.floor(sec / 60);
//     const remainingSec = sec % 60;
//     return `${min}:${remainingSec < 10 ? "0" : ""}${remainingSec}`;
//   };
//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <p>Time: {formatTime(elapsedTime)}</p>
//       <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const remainingSec = sec % 60;
    return `${min}:${remainingSec < 10 ? "0" : ""}${remainingSec}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
