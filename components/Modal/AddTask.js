import React from "react";

const AddTask = ({ closeModal }) => {
  return (
    <section className="absolute  w-screen min-h-screen">
      <div className="border bg-white w-[40%] mx-auto p-7">
        <div className="flex justify-between mb-7">
          <h1>Add New Task</h1>
          <button onClick={closeModal}>X</button>
        </div>

        <form>
          <div className="flex flex-col mb-5">
            <label>Title</label>
            <input
              name="title"
              placeholder="e.g Take coffee break"
              className="text-sm border px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label>Description</label>
            <textarea
              name="title"
              placeholder="e.g its always good to take a break. this 15 minute break will recharge the batteries a little"

              className="text-sm border px-3 py-5"
            />
          </div>
          <div className="flex flex-col mb-5">
            {/* subtasks */}
            <button className="text-xs w-full rounded-full bg-gray-600 text-white py-2">Add New SubTask</button>
          </div>
          <button className="text-xs w-full rounded-full bg-blue-500 text-white py-3">Create Task</button>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
