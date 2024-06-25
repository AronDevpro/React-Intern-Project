import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { colors } from "../../utils/Color.js";

function SignupPage() {
    return (
        <Container className="my-3">
            <Row lg={2} md={1} xs={1} className="justify-content-center">
                <Col className="border">
                    <h1 className="text-center mt-3 mb-5 fw-bold">Signup</h1>
                    <Form>
                        <Form.Group className="mb-4" controlId="formFullName">
                            <Form.Control type="text" placeholder="Full name" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formEmail">
                                    <Form.Control type="email" placeholder="E-mail" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formContactNumber">
                                    <Form.Control type="text" placeholder="Contact Number" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-4" controlId="formPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formConfirmPassword">
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Row className="mx-3 mb-4">
                            <Col xs="auto">
                                <Form.Check aria-label="option 1"/>
                            </Col>
                            <Col>
                                <strong>I agree to the terms and conditions</strong>
                            </Col>
                        </Row>
                        <Container className="px-3">
                        <Button className="col-12" href="/home">Create Account</Button>
                        </Container>
                    </Form>
                    <Row className="my-4">
                        <Col>
                            <hr/>
                        </Col>
                        <Col xs="auto" className="text-center fw-bold">
                            OR
                        </Col>
                        <Col>
                            <hr/>
                        </Col>
                    </Row>
                    <Container className="text-center mb-3">
                        <strong>Already Have an Account? <a href="#" style={{ color: colors.pinkButton, textDecoration:"none" }}>Sign in</a></strong>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default SignupPage;
