import React from 'react'
import '../../style/DestinationDetails.css' ;
import Reviews from '../../components/Reviews';
import image2 from '../DestinationImages/pyramids.jpeg' ;

const PyramidsDetails = () => {
    return (
        <div className = 'destination-details-container p-5'> 
            { /*Destination Details*/  }
            <div className = 'row'> {/*Grid*/}
                <div className = 'col-3'> {/*4 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <img 
                    className = 'pyramids-image' 
                    src = {image2}
                    alt = ''
                    />
                </div>
    
                <div className = 'col-9'>  {/*8 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <h3> Pyramids </h3>
                    <p>
                    The Pyramids of Giza are the largest and most recognizable pyramid structures in the world. 
                    They were built to honor certain Pharaohs of the fourth ruling dynasty of Egypt during a period known as the
                    Old Kingdom. The Old Kingdom was the first great era of Egyptian civilization and lasted from 2686 to 2181 BCE.
                    Pyramids today stand as a reminder of the ancient Egyptian glorification of life after death, and in fact, 
                    the pyramids were built as monuments to house the tombs of the pharaohs. Death was seen as merely the beginning of a 
                    journey to the other world.
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

export default PyramidsDetails
