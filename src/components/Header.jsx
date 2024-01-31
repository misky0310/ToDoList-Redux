import React from 'react'
import { FcTodoList } from "react-icons/fc";
const Header = () => {
  return (
    <div className='flex items-center justify-center gap-5 mt-5'>
        <img src="../../assets/checklist-1295319_1280.png" alt="" className='h-14 w-14' />
        <h1 className="text-black font-bold text-[3rem]">ToDo List</h1>
    </div>
  )
}

export default Header