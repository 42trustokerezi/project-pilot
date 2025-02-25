import Link from "next/link";
import React from "react";
import { FiLayout } from "react-icons/fi";

const boardlist = [
  { name: "Platform Launch" },
  { name: "Marketing plan" },
  { name: "RoadMap" },
];

const Sidebar = () => {
  return (
    <div>
      <div className="h-[100] border-b-[1px] flex flex-row items-center">
        <Link href="/">
          <h1 className="text-xl font-black ml-10">Project Pilot</h1>
        </Link>
      </div>
      <div className="mt-5">
        <h1 className="pl-10">All Boards(5)</h1>
        {boardlist.map((board) => (
          <li
            key={board.name}
            className="flex items-center pl-10 py-5 w-[90%] hover:bg-[#E9EFFB] cursor-pointer rounded-r-full"
          >
            <FiLayout />
            <h1 className="ml-5 font-normal">{board.name}</h1>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
