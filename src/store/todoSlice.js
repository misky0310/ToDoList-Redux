import { createSlice} from '@reduxjs/toolkit'

export const todoSlice= createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodo:(state,action) => {
            const newTodo={
                id:Date.now(),
                title:action.payload.title,
                completed:false
            }
            state.push(newTodo)
        },
        toggleComplete:(state,action) => {
            const index=state.findIndex(todo => todo.id===action.payload.id)
            state[index].completed=action.payload.completed
        },
        deleteTodo:(state,action) => {
            console.log(action.payload.id)
            return state.filter(todo => todo.id!==action.payload.id)
        },
        upTodo:(state,action) => {
            const index=state.findIndex(todo => todo.id===action.payload.id)
            if(index===0) return;
            else{
                const temp=state[index]
                state[index]=state[index-1]
                state[index-1]=temp
                // return state
            }
        },
        downTodo:(state,action) => {
            const index=state.findIndex(todo => todo.id===action.payload.id)
            if(index===state.length-1) return;
            else{
                const temp=state[index]
                state[index]=state[index+1]
                state[index+1]=temp
                // return state
            }
        }
    },
})

export const {addTodo,toggleComplete,deleteTodo,upTodo,downTodo} = todoSlice.actions;
export default todoSlice.reducer;