import Headerbar from "@/components/Headerbar";
import Sidebar from "@/components/Sidebar";
import TaskSection from "@/components/TaskSection";
import React from "react";

const page = () => {
  return (
    <section className="grid grid-cols-4 min-h-screen">
      <div className="col-span-1 h-full">
        <Sidebar />
      </div>
      <div className="col-span-3 h-full">
        <Headerbar />
        <TaskSection/>
      </div>
    </section>
  );
};

export default page;
