import React from 'react'
import '../../style/DestinationDetails.css' ;
import Reviews from '../../components/Reviews';
import image7 from '../DestinationImages/Sharm El-Sheikh.jpeg' ;


const SharmDetails = () => {
    return (
        <div className = 'destination-details-container p-5'> 
            { /*Destination Details*/  }
            <div className = 'row'> {/*Grid*/}
                <div className = 'col-3'> {/*4 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <img 
                    className = 'sharm-image' 
                    src = {image7}
                    alt = ''
                    />
                </div>
    
                <div className = 'col-9'>  {/*8 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <h3>Sharm El-Sheikh</h3>
                    <p>
                    Sharm el-Sheikh (also transliterated as Sharm ash Shaykh and popularly known simply as "Sharm") is a well-known 
                    port and resort town at the southern tip of the Sinai Peninsula in Egypt, popular with package holiday makers and 
                    divers. About 9,000 English tourists are in Sharm on any given day.
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

export default SharmDetails
