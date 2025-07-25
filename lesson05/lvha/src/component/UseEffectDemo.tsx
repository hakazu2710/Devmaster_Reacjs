import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  // 1. Sử dụng Callback
  useEffect(() => {
    console.log("Đây là callback function");
  });

  // 2. callback với array empty
  useEffect(() => {
    console.log("Đây là 1 callback function và mảng rỗng");
  }, []);

  //3. callback and deps
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("Callback and [deps]");
  }, [num]);
  return (
    <div className="alert alert-success">
      <h2>sử dụng useEffect</h2>
      <button onClick={() => setCount(count + 1)}>Count ++</button>
    </div>
  );
}
