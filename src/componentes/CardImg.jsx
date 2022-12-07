import React from 'react'
import { Card, Button } from 'react-bootstrap';

const CardImg = (props) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title> {props.titulo} </Card.Title>
                    <Card.Text className="textoTarjeta"> {props.descripciones} </Card.Text>
                    <Button variant="primary">Ver Mas</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardImg;