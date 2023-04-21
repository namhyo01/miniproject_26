import React from "react";
import Empty from "./Empty";
import Meet from "./Meet";

const MeetList = ({ meets }) => {
  if (meets.length === 0) return <Empty />;
  return (
    <ul>
      {meets.map((meet) => (
        <Meet key={meet.place.id + meet.date} meet={meet} />
      ))}
    </ul>
  );
};

export default MeetList;
