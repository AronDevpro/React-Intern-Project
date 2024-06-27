import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useSelector} from "react-redux";
import AddTodos from "../../Component/AddTodos.jsx";
import TodoItem from "../../Component/TodoItem.jsx";
import FilterTodo from "../../Component/FilterTodo.jsx";

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
            <Container style={{minHeight:"50vh"}}>
                <Row md={2}>
                    {filterTodos.map((todo) => (
                        <Col key={todo.id}>
                            <TodoItem todo={todo}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default TodoPage;