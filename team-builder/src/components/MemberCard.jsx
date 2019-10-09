import React from "react";

const MemberCard = props => {
  console.log(props);
  return (
    <div className="members-list">
      {props.membersList.map(each => {
        return (
          <div className="member" key={each.id}>
            <h2>{each.name}</h2>
            <p>{each.title}</p>
            <p>{each.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MemberCard;
