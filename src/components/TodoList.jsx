import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'
import TotalTasks from './TotalTasks'

const TodoList = () => {
    const todos=useSelector((state) => state.todo)

  return (
    <>
        {todos.length===0? 
            <span className='text-2xl font-bold'>No items</span>
            : 
            <>
              <ul className='flex gap-10 flex-col w-[100%]'>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id}/>
                ))}
              </ul>
              <TotalTasks/>
            </>}
    </>
  )
}

export default TodoList