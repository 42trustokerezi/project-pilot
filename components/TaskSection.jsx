import React from "react";
import { GoDotFill } from "react-icons/go";
import TaskCard from "./TaskCard";

const TaskSection = ({ tasks }) => {
  return (
    <section className="w-full h-full bg-[#E9EFFB] grid grid-cols-3 gap-4 px-10">
      {/* Todo */}
      <div className="col-span-1 mt-5">
        <span className="flex items-center mb-2">
          <GoDotFill color="#fb8500" />
          <h1>Todo</h1>
        </span>
        <ul>
          {tasks.filter(task => task.status === "TODO").map((task) => (
              
              <TaskCard id={task._id} title={task.title}/>
            ))}
        </ul>
      </div>
      {/* Doing */}
      <div className="col-span-1 mt-5">
        <span className="flex items-center mb-2">
          <GoDotFill color="#ffd60a" />
          <h1>Doing</h1>
        </span>
        <ul>
        {tasks.filter(task => task.status === "DOING").map((task) => (
              
              <TaskCard id={task._id} title={task.title}/>
            ))}
        </ul>
      </div>
      {/* Done */}
      <div className="col-span-1 mt-5">
        <span className="flex items-center mb-2">
          <GoDotFill color="#80ed99" />
          <h1>Done</h1>
        </span>
        <ul>
        {tasks.filter(task => task.status === "DONE").map((task) => (
              
              <TaskCard id={task._id} title={task.title}/>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default TaskSection;
