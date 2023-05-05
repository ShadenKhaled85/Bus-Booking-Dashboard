import React from 'react'
import '../../style/DestinationDetails.css' ;
import Reviews from '../../components/Reviews';
import image3 from '../DestinationImages/Dahab.jpeg' ;

const DahabDetails = () => {
    return (
        <div className = 'destination-details-container p-5'> 
            { /*Destination Details*/  }
            <div className = 'row'> {/*Grid*/}
                <div className = 'col-3'> {/*4 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <img 
                    className = 'dahab-image' 
                    src = {image3}
                    alt = ''
                    />
                </div>
    
                <div className = 'col-9'>  {/*8 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <h3>  Dahab </h3>
                    <p>
                    What is special about Dahab Egypt? <br/> 
                    The city is renowned for its adventure water sports like diving, snorkeling, and especially windsurfing. 
                    Dahab is near the infamous Blue Hole <br/> a.k.a the world's most dangerous diving site

                    </p>
                </div>
            </div>
    
            {/*Reviews*/}
            <hr/>
            <h5 className = 'text-center bg-dark text-white p-2'> Review Destinations </h5>
            <Reviews/>
    
    
        </div>
    )
}

export default DahabDetails
