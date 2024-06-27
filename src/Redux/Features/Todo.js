import { createSlice } from '@reduxjs/toolkit';


let todoId = 1

const saveToLocalStorage = (state) => {
    try {
        const x = JSON.stringify(state);
        localStorage.setItem('todos', x);
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('todos');
        if (stateStr === null){
            return [];
        }
        const savedState = JSON.parse(stateStr);
        todoId = savedState.length ? Math.max(savedState.map(todo => todo.id))+1 : 1;
        return savedState;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items:loadFromLocalStorage(),
        filter: 'all'
    },
    reducers: {
        addTodo: (state, action) =>{
            state.items.push({
                id: todoId++,
                title: action.payload.title,
                description: action.payload.description,
                completed:false
            });
            saveToLocalStorage(state.items);
        },
        completeTodo: (state, action) =>{
            const todo = state.items.find(todo => todo.id === action.payload);
            if (todo){
                todo.completed = true;
            }
            saveToLocalStorage(state.items)
        },
        deleteTodo: (state, action) => {
            state.items =  state.items.filter(todo => todo.id !== action.payload);
            saveToLocalStorage(state.items);
        },
        filterTodo: (state, action) => {
            state.filter = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, completeTodo, deleteTodo, filterTodo } = todoSlice.actions;

export default todoSlice.reducer;