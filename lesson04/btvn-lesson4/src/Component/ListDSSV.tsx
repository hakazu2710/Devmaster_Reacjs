import React from "react";
import IStudent from "./IStudent";

type DSSV = {
  student: IStudent[];
};
export default function ListDSSV({ student }: DSSV) {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>age</th>
            <th>gender</th>
            <th>add</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {student.map((props, index) => {
            return (
              <tr key={index}>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.gender}</td>
                <td>{props.add}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                <td>View / Edit / Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
