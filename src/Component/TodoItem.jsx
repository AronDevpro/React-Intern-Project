import {Card, Form} from "react-bootstrap";
import {completeTodo, deleteTodo} from "../Redux/Features/Todo.js";
import {MdDelete} from "react-icons/md";
import {useDispatch} from "react-redux";

function TodoItem({todo}) {
    const dispatch = useDispatch();
    return (
        <Card className="flex-row align-items-center p-3 gap-3 my-3 justify-content-between">
            <Form.Check value={todo.completed} type="radio" onClick={() => dispatch(completeTodo(todo.id))} />
            <strong >{todo.title}</strong>
            <span>{todo.description}</span>
            <MdDelete onClick={() => dispatch(deleteTodo(todo.id))} size={28}/>
        </Card>
    );
}

export default TodoItem;