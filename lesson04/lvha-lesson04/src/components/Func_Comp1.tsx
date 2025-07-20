import React from "react";

export default function Func_Comp1() {
  const eventHandler = (props: string) => {
    alert(`Hello from! ${props}`);
  };
  return (
    <div>
      <button onClick={() => eventHandler("HA")}>Click me</button>
    </div>
  );
}
