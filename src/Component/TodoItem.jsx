import {Card, Col, Form, Row} from "react-bootstrap";
import {completeTodo, deleteTodo} from "../Redux/Features/Todo.js";
import {MdDelete} from "react-icons/md";
import {useDispatch} from "react-redux";
import Container from "react-bootstrap/Container";

function TodoItem({todo}) {
    const dispatch = useDispatch();
    return (
        <Card className="flex-row align-items-center p-3 gap-3 my-3 justify-content-between">
            <Form.Check aria-label="option 1" defaultChecked={todo.completed} onClick={() => dispatch(completeTodo(todo.id))}/>
            <Container>
                <Row>
                    <Col >
                        <strong>{todo.title}</strong>
                    </Col>
                    <Col>
                        <span>{todo.description}</span>
                    </Col>
                </Row>
            </Container>
            <MdDelete onClick={() => dispatch(deleteTodo(todo.id))} size={28}/>
        </Card>
    );
}

export default TodoItem;