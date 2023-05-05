import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../style/ProductCard.css' ; 
import image2 from '../DestinationImages/pyramids.jpeg' ;


const ProductCard2 = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                className = 'card-image' 
                variant="top" 
                src = {image2}
                alt = ''
                />
            <Card.Body>
                <Card.Title> Pyramids</Card.Title>
                <Link className = 'btn btn-dark w-100' to = {'/pyramids-details'}> 
                    Show More 
                </Link>
            </Card.Body>
        </Card>
        
        </div>
    )
}

export default ProductCard2
