import React from "react";
import FuncMember from "./FuncMember";

export default function FuncListMember() {
  return (
    <div className="border p-2">
      <h2>Danh sách thành viên</h2>
      <FuncMember name="HA 1" age="22" />
      <FuncMember name="HA 2" age="23" />
      <FuncMember name="HA 3" age="24" />
      <FuncMember name="HA 4" age="25" />
    </div>
  );
}
