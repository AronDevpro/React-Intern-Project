import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Container className="bg-dark p-5 text-light" fluid>
            <Row>
                <Col className="text-center">
                    <p>Copyright &copy; 2024</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
