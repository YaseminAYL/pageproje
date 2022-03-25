import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Detail() {
  let param = useParams();

  const users = useSelector((state) => state.users);

  const user = users.filter((item) => item.id == param.id);

  const { name, email, phone, website } = user[0];

  return (
    <div>
      <h3>DETAIL</h3>

      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Name:</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th scope="row">Phone:</th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th scope="row">Email:</th>
            <td>{email} </td>
          </tr>
          <tr>
            <th scope="row">Web Site:</th>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
