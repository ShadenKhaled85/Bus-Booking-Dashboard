import React from 'react'
import '../../style/DestinationDetails.css' ;
import Reviews from '../../components/Reviews';
import image5 from '../DestinationImages/ElSahel.png' ;

const ElSahelDetails = () => {
    return (
        <div className = 'destination-details-container p-5'> 
            { /*Destination Details*/  }
            <div className = 'row'> {/*Grid*/}
                <div className = 'col-3'> {/*4 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <img 
                    className = 'elsahel-image' 
                    src = {image5}
                    alt = ''
                    />
                </div>
    
                <div className = 'col-9'>  {/*8 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <h3> North Coast </h3>
                    <p>
                    The north coast has been the hub of sea travel between the Mediterranean Sea and the Nile Delta for over 2,300 years. 
                    During summer, Egyptians usually travel to the North Coast to flee heat in other towns and cities in Egypt. 
                    They stay in villages and resorts located in Sidi Abdel Rahman, El Alamein, and Ras Al Hekma.
                    It is also characterised by the occurrence of Egypt's five northernmost lakes. The region has typical Mediterranean 
                    flora and fauna on land and in marine life with the weather being between pleasant and hot during summer and mild in 
                    winter.
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

export default ElSahelDetails
