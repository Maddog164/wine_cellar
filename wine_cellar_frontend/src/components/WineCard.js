// import React from 'react'
import {Card} from 'react-bootstrap'

const WineCard = (props) => {

    console.log("I am in WineCard")
    
    const wine = props.wine
        
    return(
        <div>
            <Card>
                <Card.Img variant="top" src={wine.image_url} alt="new" className="Wine-img" />
                <Card.Body>
                    <Card.Title>{wine.name}</Card.Title>
                    <Card.Subtitle>Color: {wine.color}</Card.Subtitle>
                    <Card.Subtitle>Grape: {wine.grape}</Card.Subtitle>
                    <Card.Subtitle>Country: {wine.country}</Card.Subtitle>
                    <Card.Subtitle>Avg Price: ${wine.avg_price}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
    }


export default WineCard
