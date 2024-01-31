import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaAngleUp,FaAngleDown } from "react-icons/fa";;
import { useDispatch } from 'react-redux';
import { deleteTodo, downTodo, toggleComplete, upTodo } from '../store/todoSlice';
const TodoItem = ({todo}) => {
    
    const dispatch=useDispatch();

    const handleCheck = (id,completed) =>{
        dispatch(toggleComplete({
            id:id,
            completed:!completed
        }))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo({
            id:id
        }))
    }

    const handleUp =(id) => {
        dispatch(upTodo({
            id:id
        }))
    }

    const handleDown =(id) => {
        dispatch(downTodo({
            id:id
        }))
    }

  return (
    <li>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 sm:items-center items-start sm:justify-between justify-center border-2 pl-10 pr-6 py-4 w-[85%] sm:w-[65%] mx-auto checkbox-label">
            <div className="content flex items-center justify-start gap-2 sm:w-[70%] w-fit mr-4">
                <input type="checkbox" name="check" checked={todo.completed} className='h-4 w-4 cursor-pointer' 
                    onChange={() => handleCheck(todo.id,todo.completed)}
                />
                <span className='text-[1.5rem] text-left cursor-pointer' onClick={() => handleCheck(todo.id,todo.completed)}>{todo.title}</span>
            </div>
            <div className="controls flex items-center justify-between w-[80%] sm:w-[35%]">
                <button  className= 'sm:px-2 py-1 rounded-full hover:bg-black'
                    onClick={() => handleUp(todo.id)}>
                    <FaAngleUp className='text-2xl' />
                </button>
                <button  className= 'sm:px-2 py-1 rounded-full hover:bg-black'
                    onClick={() => handleDown(todo.id)}>
                    <FaAngleDown className='text-2xl' />
                </button>
                <button className='bg-red-600 px-8 py-2 rounded-full hover:bg-red-700'
                    onClick={() => handleDelete(todo.id)}>
                    <MdDelete 
                        className='text-xl' 
                    />
                </button>
            </div>
        </div>
    </li>
  )
}

export default TodoItem