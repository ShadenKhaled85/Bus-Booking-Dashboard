import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../style/ProductCard.css' ; 
import image8 from '../DestinationImages/Abu Simbel, Aswan, Egypt.jpeg' ;

const ProductCard8 = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                className = 'card-image' 
                variant="top" 
                src = {image8}
                alt = ''
                />
            <Card.Body>
                <Card.Title> Abu Simbel, Aswan </Card.Title>
                <Link className = 'btn btn-dark w-100' to = {'/aswan-details'}> 
                    Show More 
                </Link>
            </Card.Body>
        </Card>
        
        </div>
    )
}

export default ProductCard8
