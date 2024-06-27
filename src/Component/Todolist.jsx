import {Col, Row} from "react-bootstrap";
import TodoItem from "./TodoItem.jsx";
import Container from "react-bootstrap/Container";

function Todolist({filterTodos}) {
    return (
        <Container style={{minHeight:"50vh"}}>
            <Row md={2}>
                {filterTodos.map((todo) => (
                    <Col key={todo.id}>
                        <TodoItem todo={todo}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Todolist;