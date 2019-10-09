import React, { useState } from "react";

const Form = props => {
  // const [name, setName] = useState("Name");
  // const [email, setEmail] = useState("Email");
  // const [title, setTitle] = useState("Title");
  const [member, setMember] = useState([
    {
      id: "",
      name: "",
      email: "",
      title: ""
    }
  ]);

  // async function submitClick(n, e, t) {
  //   // const someVar = await ;
  //   await setMember({ n, e, t });
  //   console.log(n, e, t);
  // }
  const submitClick = e => {
    e.preventDefault();
    props.addSomeF(member);
    console.log(member);
    setMember({ id: "", name: "", email: "", title: "" });
  };

  const chchChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  return (
    <div className="Form-Div">
      <h2>Form Content</h2>
      <div className="Form-Fields">
        <form
          onSubmit={submitClick}
          // onSubmit={e => {
          //   e.preventDefault();
          //   submitClick(name, email, title); //async function for submitClick.
          // }}
        >
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="name"
              value={member.name}
              onChange={chchChanges}
              // onChange={e => {
              //   setName(e.target.value);
              // }}
            />
          </label>
          <label htmlFor="email">
            email
            <input
              id="email"
              name="email"
              type="text"
              placeholder="email@somewhere.com"
              value={member.email}
              onChange={chchChanges}
              // onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              type="text"
              placeholder="title"
              value={member.title}
              onChange={chchChanges}
              // onChange={e => setTitle(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
