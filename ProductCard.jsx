import React from 'react'
/*import Button from 'react-bootstrap/Button'; */
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../style/ProductCard.css' ; 
import image1 from '../DestinationImages/KarnakTempleLuxor.jpeg' ;

const ProductCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                className = 'card-image' 
                variant="top" 
                src = {image1}
                alt = ''
                />
            <Card.Body>
                <Card.Title>Karnak Template in Luxor </Card.Title>
                <Link className = 'btn btn-dark w-100' to = {'/1'}> 
                    Show More 
                </Link>
            </Card.Body>
        </Card>
        
        </div>
    )
}

export default ProductCard
