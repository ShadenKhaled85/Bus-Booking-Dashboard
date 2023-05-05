import React from 'react'
import '../../style/DestinationDetails.css' ;
import Reviews from '../../components/Reviews';
import image8 from '../DestinationImages/Abu Simbel, Aswan, Egypt.jpeg' ;

const AswanDetails = () => {
    return (
        <div className = 'destination-details-container p-5'> 
            { /*Destination Details*/  }
            <div className = 'row'> {/*Grid*/}
                <div className = 'col-3'> {/*4 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <img 
                    className = 'elsahel-image' 
                    src = {image8}
                    alt = ''
                    />
                </div>
    
                <div className = 'col-9'>  {/*8 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <h3> Abu Simbel, Aswan </h3>
                    <p>
                    Aswan is known for its beautiful Nile Valley scenery, significant archaeological sites and its peaceful aura. 
                    Its weather is warm all year round, which makes it a perfect winter destination. The city provides splendid views 
                    and attractions to sail through the Nile with a felucca (Egyptian sailboat).
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

export default AswanDetails
