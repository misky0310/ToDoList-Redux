import React from 'react'
import { useSelector } from 'react-redux'

const TotalTasks = () => {
    const todos=useSelector(state => state.todo)
    const totalTasks=todos.length;
    const completedArr=todos.filter(todo => todo.completed===true)
    const completedTasks=completedArr.length;
  return (
    <> { totalTasks===completedTasks ? 
        
        <div className="pt-6 text-2xl">Congratulations. You have completed all tasks</div>
        
        : 
    
        <div className='pt-6 flex gap-7 items-center justify-center'>
            <span className="total text-2xl text-red-700">Total Tasks : {totalTasks}</span>
            <span className="completed text-2xl text-green-400">Completed Tasks : {completedTasks}</span>
        </div>
    }
        

    </>
    
  )
}

export default TotalTasks