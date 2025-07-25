import React, { useState } from "react";

export default function UseStateDemo() {
  // khởi tạo state - sử dụng hàm useState
  const [count, setCount] = useState(0); // biến (count = 0) giá trị khởi tạo bđ

  // khởi tạo state là 1 mảng
  const listInit: number[] = [1, 2, 4, 5];
  // const [list, setList] = useState<number[]>(listInit);
  const [list, setList] = useState(listInit);

  // hàm cử lý sự kiện khi thêm số ngẫu nhiên
  const handleLisst = () => {
    setList([
      ...list, // giữ nguyên các phần tử cũ
      parseInt((Math.random() * 100).toString()),
      // [list.length]: Math.floor(Math.random() * 100) // thêm phần tử mới là số ngẫu nhiên
    ]);
  };

  // khởi tạo state là 1 object
  const personInt = {
    id: 111,
    name: "HA",
    age: 22,
  };
  const [person, setPerson] = useState(personInt);

  return (
    <div className="alert alert-danger">
      <h2>Sử dụng hàm usestates</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Tăng +</button>
        <button onClick={() => setCount(count - 1)}>Giảm -</button>
      </div>
      <hr />
      <h3>List: {list.toString()}</h3>
      <button onClick={handleLisst}>Add new</button>

      <h3>
        Person: <br />
        Name: {person.name} - Age: {person.age} - ID: {person.id}
      </h3>
    </div>
  );
}
