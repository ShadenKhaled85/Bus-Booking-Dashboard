import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../style/ProductCard.css' ; 
import image6 from '../DestinationImages/Sahl hasheesh.jpeg' ;

const ProductCard6 = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                className = 'card-image' 
                variant="top" 
                src = {image6}
                alt = ''
                />
            <Card.Body>
                <Card.Title> Sahl Hasheesh </Card.Title>
                <Link className = 'btn btn-dark w-100' to = {'/sahl-hasheesh-details'}> 
                    Show More 
                </Link>
            </Card.Body>
        </Card>
        
        </div>
    )
}

export default ProductCard6
