import React from "react";
import Func_test from "./Func_test";
import IMember from "./IMember";
interface IProps {
  info: IMember;
  add: string;
}

// export default function Func_link(props: any) {
export default function Func_link({ info, add }: IProps) {
  return (
    <div className="info">
      <Func_test link={info.path} />
      <h2>{info.name}</h2>
      <p>Tuổi: {info.age}</p>
      <p>địa chỉ: {add}</p>
    </div>
  );
}
