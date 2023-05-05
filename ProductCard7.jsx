import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../style/ProductCard.css' ; 
import image7 from '../DestinationImages/Sharm El-Sheikh.jpeg' ;

const ProductCard7 = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                className = 'card-image' 
                variant="top" 
                src = {image7}
                alt = ''
                />
            <Card.Body>
                <Card.Title>Sharm El-Sheikh</Card.Title>
                <Link className = 'btn btn-dark w-100' to = {'/sharm-details'}> 
                    Show More 
                </Link>
            </Card.Body>
        </Card>
        
        </div>
    )
}

export default ProductCard7
