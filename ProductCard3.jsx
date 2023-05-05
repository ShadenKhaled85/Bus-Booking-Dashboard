import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../style/ProductCard.css' ; 
import image3 from '../DestinationImages/Dahab.jpeg' ;

const ProductCard3 = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                className = 'card-image' 
                variant="top" 
                src = {image3}
                alt = ''
                />
            <Card.Body>
                <Card.Title> Dahab </Card.Title>
                <Link className = 'btn btn-dark w-100' to = {'/dahab-details'}> 
                    Show More 
                </Link>
            </Card.Body>
        </Card>
        
        </div>
    )
}

export default ProductCard3
