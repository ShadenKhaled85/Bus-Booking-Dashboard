import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../style/ProductCard.css' ; 
import image5 from '../DestinationImages/ElSahel.png' ;

const ProductCard5 = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                className = 'card-image' 
                variant="top" 
                src = {image5}
                alt = ''
                />
            <Card.Body>
                <Card.Title>North Coast</Card.Title>
                <Link className = 'btn btn-dark w-100' to = {'/elSahel-details'}> 
                    Show More 
                </Link>
            </Card.Body>
        </Card>
        
        </div>
    )
}

export default ProductCard5
