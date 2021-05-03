import React, { useState, useRef, useEffect } from "react";
import "./Form.css";
import Card from "./Card";

export default function Form() {
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    number: "",
  });
  const [people, setPeople] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let emptyValue = false;
    if (person.fname && person.lname && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ fname: "", lname: "", email: "", age: "", number: "" });
    }
  };

  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="fname">First Name</label>
            <input
              ref={inputRef}
              type="text"
              name="fname"
              id="lname"
              onChange={handleChange}
              value={person.fname}
              placeholder="First Name"
              required
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              onChange={handleChange}
              value={person.lname}
              placeholder="Last Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={person.email}
              placeholder="Email"
              required
            />

            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              onChange={handleChange}
              value={person.age}
              placeholder="Age"
              required
            />
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              name="number"
              id="number"
              onChange={handleChange}
              value={person.number}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="xxx-xxx-xxxx"
              required
            />
            <br />
            <br />
            <br />
            <button type="submit" className="btn" onClick={handleSubmit}>
              Create Card
            </button>
          </div>
        </form>
      </article>
      {/* <article>
        {people.map((person) => {
          const { id, fname, lname, email, age, number } = person;
          return (
            <div key={id} className="item">
              <h4>{`${fname} ${lname}`}</h4>
              <p>{age}</p>
              <p>{email}</p>
              <p>{number}</p>
            </div>
          );
        })}
      </article> */}
      <article>
        {people.map((person) => {
          const { id, fname, lname, email, age, number } = person;
          return (
            <Card
              id={id}
              fname={fname}
              lname={lname}
              email={email}
              age={age}
              number={number}
            />
          );
        })}
      </article>
    </>
  );
}
