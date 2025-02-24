import React from 'react'
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";



const Headerbar = () => {
  return (
    <div className=' h-[100px] flex justify-between px-10 items-center border-b-[1px] border-l-[1px]'>
        <h1 className='font-semibold text-xl'>Platform Launch</h1>
        <div className='flex items-center'>
            <button className='px-4 py-3 bg-[#480ca8] text-white text-xs rounded-full mr-2 flex items-center'>
            <FaPlus className='mr-2'/>
            Add New Task</button>
            <FaEllipsisVertical/>
        </div>
    </div>
  )
}

export default Headerbar