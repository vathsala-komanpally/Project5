import React from 'react';
import Card from 'react-bootstrap/Card'

const HomePageImage = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} style={{height:"150"}}/>
            <Card.Body style={{height:"150"}}>
                <Card.Title><h3>{props.header}</h3></Card.Title>
                <Card.Text>
                    <a href={props.text} style={{color: "black"}}>{props.text}</a>
                </Card.Text>
            </Card.Body>
        </Card>
    )

}
export { HomePageImage };