import React from "react";

type Props = {
  name: string;
  company: string;
};
export default function Func_test({ name, company }: Props) {
  return (
    <div>
      <h2>Func Test</h2>
      <hr />
      <p>My Name is, {name}</p>
      <p>Company: {company}</p>
    </div>
  );
}
