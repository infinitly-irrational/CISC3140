import React from "react";
import "./Form.css";

export default function Card(props) {
  let { fname, lname, email, age, number } = props;
  return (
    <div className="item">
      <h4>{`${fname} ${lname}`}</h4>
      <p>{`Age ${age}`}</p>
      <p>{email}</p>
      <p>{number}</p>
    </div>
  );
}
