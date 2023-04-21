import React from "react";

const Meet = ({ meet }) => {
  return (
    <li>
      {meet.place.place_name}
      <br />
      {new Date(meet.date).toLocaleString()}
    </li>
  );
};

export default Meet;
