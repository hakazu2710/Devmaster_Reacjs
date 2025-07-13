import React from "react";

export default function JSXExpression() {
  const name = "Devmaster";
  const user = {
    name: "HA",
    age: 22,
  };
  // Hàm
  const formatName = (u: any) => {
    return u.name + ": " + u.age;
  };

  // element
  const element = (
    <div className="alert alert-danger">
      <h2>Xin chào, {name}</h2>
      <h3>Welcome, {formatName(user)}</h3>
    </div>
  );

  // Hàm có rest parameter
  const sum = (...num: number[]): number => {
    // let tong: number = 0;
    // for (let i = 0; i < num.length; i++) {
    //   tong += num[i];
    // }
    // return tong;

    return num.reduce((sum, num) => sum + num, 0);
  };
  return (
    <div>
      <h2>Jsx Expression</h2>
      <hr />
      <p>Xin chào: {name}</p>
      <p>
        Họ tên: {user.name} - Tuổi của bạn: {user.age}
      </p>
      <p>Gọi Hàm: {formatName(user)}</p>
      {element}
      <hr />
      <p>Kết quả: {sum(1, 2, 3, 4)}</p>
    </div>
  );
}
