import React, { useRef } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
  
  const dispatch=useDispatch();

  const itemRef=useRef()
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(itemRef.current.value==='') return;
    
    dispatch(addTodo({
      title:itemRef.current.value
    }))

    itemRef.current.value='';
  }
  
  return (
    <div className="sm:w-[50%] mt-6">
        
        <div className="relative w-full mb-10">
            <form action="" onSubmit={handleSubmit}>
              <input type="text" 
                    className="block py-2.5 px-6 w-[100%] z-20 text-xl text-gray-900 rounded-lg" placeholder="Add ToDo" 
                    required 
                    autoComplete='off'
                    ref={itemRef}
                    
              />
              <button type="submit"
                      className="sm:absolute sm:top-0 sm:end-0 mt-2 sm:mt-0 sm:py-2.5 sm:h-full top-1/2 font-medium text-white sm:bg-green-700 sm:rounded-e-lg sm:border sm:border-green-700 hover:bg-green-800 rounded-2xl sm:rounded-none">
                      <IoMdAddCircleOutline className='text-[3rem] sm:pb-6 px-2 py-2 sm:px-0 sm:py-0' />
              </button>
            </form>
        </div>
    </div>
  )
}

export default AddTodo