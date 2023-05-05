import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../style/ProductCard.css' ; 
import image4 from '../DestinationImages/Siwa Salt Lake.jpeg' ;

const ProductCard4 = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                className = 'card-image' 
                variant="top" 
                src = {image4}
                alt = ''
                />
            <Card.Body>
                <Card.Title> Siwa Salt Lake</Card.Title>
                <Link className = 'btn btn-dark w-100' to = {'/siwa-details'}> 
                    Show More 
                </Link>
            </Card.Body>
        </Card>
        
        </div>
    )
}

export default ProductCard4
