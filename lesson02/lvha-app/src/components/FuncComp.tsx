import React from "react";

export default function FuncComp(props: any) {
  return (
    <div>
      <h2>Function component demo</h2>
      <hr />
      <p>My Name is, {props.name}</p>
      <p>Company: {props.company}</p>
    </div>
  );
}
