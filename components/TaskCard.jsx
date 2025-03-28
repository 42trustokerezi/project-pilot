import React from "react";

const TaskCard = ({id, title, subTask}) => {
  return (
    <li key={id} className="w-full px-3 py-5 bg-white rounded-lg mb-5">
      <h1 className="text-lg">{title}</h1>
      <h2 className="text-xs">0 of 3 subtasks</h2>
    </li>
  );
};

export default TaskCard;
