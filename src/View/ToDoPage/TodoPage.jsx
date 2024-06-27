import {useSelector} from "react-redux";
import AddTodos from "../../Component/AddTodos.jsx";
import FilterTodo from "../../Component/FilterTodo.jsx";
import Todolist from "../../Component/Todolist.jsx";

function TodoPage() {

    const todos = useSelector((state) => state.todo.items);
    const filter = useSelector((state) => state.todo.filter);

    const filterTodos = todos.filter((todo) => {
        if (filter === 'completed') {
            return todo.completed;
        }
        if (filter === 'active') {
            return !todo.completed;
        }
        return true
    })

    return (
        <>
            <AddTodos/>
            <FilterTodo/>
            <Todolist filterTodos={filterTodos}/>
        </>
    );
}

export default TodoPage;