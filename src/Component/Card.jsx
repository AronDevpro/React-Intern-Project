import React from 'react';
import {Button, Card} from "react-bootstrap";
import {colors} from "../utils/Color.js";

function CardComponent({title, description, image}) {
    return (
        <Card className="text-center p-3">
            <Card.Img variant="top" src={image} className="mb-3"/>
            <Card.Body>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text className="mb-3">
                    {description}
                </Card.Text>
                <Button style={{background:colors.cardButton}} className="text-dark fw-bold border-0">Get it Now</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;