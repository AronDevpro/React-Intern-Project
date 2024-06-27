import {Form, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useDispatch} from "react-redux";
import {filterTodo} from "../Redux/Features/Todo.js";

function FilterTodo() {

    const dispatch = useDispatch();

    const handleChange =(e) => {
        dispatch(filterTodo(e.target.value));
    }

    return (
        <Container>
            <Row className='justify-content-end mb-3'>
                <Form.Select style={{width:150}} aria-label="Default select example" onChange={handleChange}>
                    <option disabled={true}>Filter</option>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </Form.Select>
            </Row>
        </Container>
    );
}

export default FilterTodo;