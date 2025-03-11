"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";


const page = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    async function fetchBoards() {
      try {
        const res = await fetch("api/board");
        if (!res.ok) throw new Error("Failed to fetch board");

        const data = await res.json();
        setBoards(data);
      } catch (err) {
        console.error("Error fetching tasks", err);
      }
    }
    fetchBoards()
  }, []);
  return (
    <div>
      {
        <ul >
          {boards.map((board) =>(
            <li key={board._id}>
            <Link 
                href={`/board/${board._id}`}
            >
                {board.name}
            </Link>
            </li>
            ))}
        </ul>
      }
    </div>
  );
};

export default page;
