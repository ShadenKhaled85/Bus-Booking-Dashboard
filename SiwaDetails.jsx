import React from 'react'
import '../../style/DestinationDetails.css' ;
import Reviews from '../../components/Reviews';
import image4 from '../DestinationImages/Siwa Salt Lake.jpeg' ;

const SiwaDetails = () => {
    return (
        <div className = 'destination-details-container p-5'> 
            { /*Destination Details*/  }
            <div className = 'row'> {/*Grid*/}
                <div className = 'col-3'> {/*4 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <img 
                    className = 'siwa-image' 
                    src = {image4}
                    alt = ''
                    />
                </div>
    
                <div className = 'col-9'>  {/*8 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <h3>  Siwa Salt Lake </h3>
                    <p>
                        What is Siwa Egypt known for? <br/>
                        It is famous for being a piece of heaven, a greenish spot in the ocean of Sahara sand. The place is very ancient and extremely 
                        enchanting with its own history and culture, there was found a human footprint that is thought to date back three million years, 
                        making it one of the oldest human prints in history.
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

export default SiwaDetails
