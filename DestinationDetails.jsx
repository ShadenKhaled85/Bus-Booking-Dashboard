import React from 'react'
import '../../style/DestinationDetails.css' ;
import Reviews from '../../components/Reviews';
import image1 from '../DestinationImages/KarnakTempleLuxor.jpeg' ;

const DestinationDetails = () => {
return (
    <div className = 'destination-details-container p-5'> 
        { /*Destination Details*/  }
        <div className = 'row'> {/*Grid*/}
            <div className = 'col-3'> {/*4 columns h3ml fehum haga mn el 12 columns el fi el row */}
                <img 
                className = 'luxor-image' 
                src = {image1}
                alt = ''
                />
            </div>

            <div className = 'col-9'>  {/*8 columns h3ml fehum haga mn el 12 columns el fi el row */}
                <h3>  Karnak Temple in Luxor </h3>
                <p>
                    Karnak Temple is so famous as it was believed to be the spot where creation began. 
                    They also believed it was a point of interaction between the god Amun-Ra and Egyptians. 
                    It is important to Egypt's cultural history because it was a place of worship and provides clues about the 
                    ancient Egyptian religion.
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

export default DestinationDetails
