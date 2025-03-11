"use client"

import Headerbar from "@/components/Headerbar";
import Sidebar from "@/components/Sidebar";
import TaskSection from "@/components/TaskSection";
import React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/router"; 
import { useParams } from "next/navigation";
import AddTask from "@/components/Modal/AddTask";

const page = () => {
  const [isModalOpen, setsModalOpen] = useState(false);

    const toggleModal = ()=>{
        setsModalOpen(!isModalOpen)
    }

  
  const [boardId, setBoardId] = useState(null)
  const [tasks, setTasks] = useState([]);
  const params = useParams();
  

useEffect(()=>{
  async function unwrapParams(){
    if(params?.id){
      const id = await params.id;
      setBoardId(id)
    }
  }
  unwrapParams()
},[params])

  useEffect(()=> {
    if(!boardId) return;

    const fetchTasks = async ()=>{
      try{
        const res = await fetch(`/api/board/${boardId}/tasks`)
        if (!res.ok) throw new Error("Failed to fetch Tasks");
        const data = await res.json()
        setTasks(data);
      }catch(error){
        console.error("Error fetching Tasks: ",error)
      }
    }

    fetchTasks();
  }, [boardId]);

  if(!boardId) return <p>Board Id is missing in the URL.</p>

  return (
    <section className="grid grid-cols-4 min-h-screen relative">
      <div className="col-span-1 h-full">
        <Sidebar />
      </div>
      <div className="col-span-3 h-full">
        <Headerbar toggleModal= {toggleModal} />
        <TaskSection tasks = {tasks}/>
      </div>
      {
        isModalOpen && (
          <AddTask closeModal={toggleModal}/>
        )
      }
    </section>
  );
};

export default page;
