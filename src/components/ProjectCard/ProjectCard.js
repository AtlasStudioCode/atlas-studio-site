import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import './ProjectCard.css';

function ProjectCard({ image, title, text, src }) {
    const history = useHistory();

    function handleClick() {
        history.push(src);
    }

    return (
        <Card
            border="light"
            bg="dark"
            text="light"
            onClick={handleClick}
            className="card text-center" >
            <Card.Img variant="top" src={image} className="card-img" />
            <Card.Body>
                <Card.Title className="card-title text-uppercase">{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;