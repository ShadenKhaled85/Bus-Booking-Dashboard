import React from 'react'
import '../../style/DestinationDetails.css' ;
import Reviews from '../../components/Reviews';
import image6 from '../DestinationImages/Sahl hasheesh.jpeg' ;


const SahlHasheeshDetails = () => {
    return (
        <div className = 'destination-details-container p-5'> 
            { /*Destination Details*/  }
            <div className = 'row'> {/*Grid*/}
                <div className = 'col-3'> {/*4 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <img 
                    className = 'sahl-image' 
                    src = {image6}
                    alt = ''
                    />
                </div>
    
                <div className = 'col-9'>  {/*8 columns h3ml fehum haga mn el 12 columns el fi el row */}
                    <h3>Sahl Hasheesh</h3>
                    <p>
                    Only 20 kilometers south of Hurghada airport and located on the famously inspiring Red Sea lies "The Jewel Of The Red Sea" 
                    Sahl Hasheesh. It's a place where sun-kissed waters, year-round summer climates and golden sands reign supreme.Sahl Hasheesh is
                    well -known with its world-wonderful and natural treasures, ultimate geographic beautiful Mother Nature, historical features built 
                    throughout the years by different inhabitants
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

export default SahlHasheeshDetails
