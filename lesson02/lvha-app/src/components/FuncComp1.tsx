import { promises } from "dns";
import React from "react";

type Props = {
  name: string;
  company: string;
};
export default function FuncComp1({ name, company }: Props) {
  return (
    <div>
      <div>
        <h2>Function component demo 1</h2>
        <hr />
        <p>My Name is, {name}</p>
        <p>Company: {company}</p>
      </div>
    </div>
  );
}
