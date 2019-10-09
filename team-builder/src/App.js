import React, { useState } from "react";
import "./App.css";
import MemberForm from "./components/MemberForm";
import MemberCard from "./components/MemberCard";

function App() {
  const [members, updateMembers] = useState([
    {
      id: "Jim",
      name: "Jim",
      email: "jim@yahoo.com",
      title: "cook"
    }
  ]);

  const createMember = info => {
    const newInfo = {
      id: info.name,
      name: info.name,
      email: info.email,
      title: info.title
    };
    // ...newDetes ===> {id: value, title: value....}
    updateMembers([...members, newInfo]);
    console.log(members);
    //... means spread all properties out
    //reference every property in the object
  };

  // function deleteI(...values) {
  //   console.log(values.propName);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <MemberForm addSomeF={createMember} />
        <MemberCard membersList={members} />
      </header>
    </div>
  );
}

export default App;
