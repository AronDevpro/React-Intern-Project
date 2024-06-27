import {Button, Col, Container, Row} from "react-bootstrap";
import CardComponent from "../../Component/Card.jsx";

const data =[
    {
        title:"Comprehensive Curriculum",
        description:"Our course covers everything from the fundamentals of currency " +
            "markets to advanced trading strategies, as well as it equipped with high " +
            "accurate technical analyzing lessons, trading psychology, money management, " +
            "tricks for maintain trading discipline & more ensuring you have the knowledge and skills to excel",
        image:"src/assets/Img/img-1.jpg"
    },
    {
        title:"Practical Learning",
        description:"We believe in hands-on experience. Our curriculum" +
            " includes real - worid case studies. simulations, and practical" +
            " exercises to reinforce learning and build confidence",
        image:"src/assets/Img/img-2.png"
    },
    {
        title:"Track Records",
        description:"Our track record speaks for itself. Many of our " +
            "past students have gone on " +
            "to become successful traders, and were committed to " +
            "helping you achieve the some level of success.",
        image:"src/assets/Img/img-1.jpg"
    }
]

function HomePage() {
    return (
        <Container>
            <Row className="mt-3">
                <Col className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <h1 className="flex-grow-1 text-center">Our Exclusive Courses</h1>
                    <Button className="ms-3 bg-dark rounded-5 border-0">View More</Button>
                </Col>
            </Row>
            <Row className="my-4" lg={3} md={2} xs={1}>
                {data.map((item, index) => (
                    <Col key={index}>
                        <CardComponent
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomePage;