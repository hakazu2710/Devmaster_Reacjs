import React, { useEffect, useState } from "react";

export default function Lab5() {
  const [count, setCount] = useState(0);
  const [running, SetRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (running) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="alert alert-danger">
      <h2>Giá trị: {count}</h2>
      <button onClick={() => SetRunning(!running)}>
        {running ? "Dừng" : "Bắt đầu"}
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
