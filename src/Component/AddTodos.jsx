import {Button, Col, FloatingLabel, Form, Row, Container} from "react-bootstrap";
import {useState} from "react";
import {addTodo} from "../Redux/Features/Todo.js";
import {useDispatch} from "react-redux";

function AddTodos() {
    const [data, setData] = useState({
        title: '',
        description: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setData((preData) => ({
            ...preData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo(data));
        setData({title:'', description: ''})
    }
    return (
        <Container className="bg-dark my-3 p-4 rounded-1">
            <Form onSubmit={handleSubmit}>
                <Row md={3} xs={1}>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Title"
                            className="mb-3 mb-md-0"
                        >
                            <Form.Control required value={data.title} name='title' type="text" placeholder="eg: create website" onChange={handleChange}/>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Description"
                            className="mb-3 mb-md-0"
                        >
                            <Form.Control required value={data.description} name='description' type="text" placeholder="eg: create website for xyz.com" onChange={handleChange}/>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <Button type='submit' className="col-12 py-3">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default AddTodos;