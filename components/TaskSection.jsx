import React from "react";
import { GoDotFill } from "react-icons/go";

const TaskSection = () => {
  return (
    <section className="w-full h-full bg-[#E9EFFB] grid grid-cols-3 gap-4 px-10">
      {/* Todo */}
      <div className="col-span-1 mt-5">
        <span className="flex items-center mb-2">
          <GoDotFill />
          <h1>Todo</h1>
        </span>
        <ul>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
        </ul>
      </div>
      {/* Doing */}
      <div className="col-span-1 mt-5">
        <span className="flex items-center mb-2">
          <GoDotFill />
          <h1>Doing</h1>
        </span>
        <ul>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
        </ul>
      </div>
      {/* Done */}
      <div className="col-span-1 mt-5">
        <span className="flex items-center mb-2">
          <GoDotFill />
          <h1>Done</h1>
        </span>
        <ul>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
          <li className="w-full px-3 py-5 bg-white rounded-lg mb-5">
            <h1 className="text-lg">Build UI for onboarding flow</h1>
            <h2 className="text-xs">0 of 3 subtasks</h2>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TaskSection;
