import React , {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios' ;
import ProductCard from '../../components/ProductCard'
import ProductCard2 from '../../components/ProductCard2';
import ProductCard3 from '../../components/ProductCard3';
import ProductCard4 from '../../components/ProductCard4';
import ProductCard5 from '../../components/ProductCard5';
import ProductCard6 from '../../components/ProductCard6';
import ProductCard7 from '../../components/ProductCard7';
import ProductCard8 from '../../components/ProductCard8';


const Home = () => {

    const [ destinations , setDestinations ] = useState(
        {
            loading : true , // loading happens when calling the APIs is done
            results : [] , // list of products returned from Backend
            err : null ,
            reload : 0 // refresh
        }
    )

    useEffect(() => { // calls the API to get the list of products  from Backend
        setDestinations({...destinations , loading: true }) 
        axios.get( 'http://localhost:4000/users' ) // axios send all the types of requests 
        .then ( resp => {
            console.log(resp) ;
            setDestinations({...destinations, results: resp.data , loading: false , err : null }) // when loading finishes, set it to false
        }) // if there is response returned 

        .catch( err => {
            setDestinations({...destinations , loading: false , err : 'Something went wrong'});  
        }) // if there is an error, show it

    }, [destinations]) ;

    const [ appointments , setAppointments ] = useState(
        {
            loading : true , // loading happens when calling the APIs is done
            results : [] , // list of products returned from Backend
            err : null ,
            reload : 0 // refresh
        }
    )

    useEffect(() => { // calls the API to get the list of products  from Backend
        setAppointments({...appointments , loading: true }) 
        axios.get( 'http://localhost:4000/users' ) // axios send all the types of requests 
        .then ( resp => {
            console.log(resp) ;
            setAppointments({...appointments, results: resp.data , loading: false , err : null }) // when loading finishes, set it to false
        }) // if there is response returned 

        .catch( err => {
            setAppointments({...appointments , loading: false , err : 'Something went wrong'});  
        }) // if there is an error, show it

    }, [appointments]) ;


    return (
        <div className = 'home-container p-5'> 
            { /*Filter Products*/ }
            <Form>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control 
                    type="text" 
                    placeholder="Search destinations" 
                    className = 'rounded-2'/>
                    <button className = 'btn btn-dark rounded-2'> Search </button>
                </Form.Group>
            </Form>

            {/*List Products */ }
            <div className = 'row'> 
                <div  className = 'col-3 card-container' >
                <ProductCard/>
                </div>

                <div  className = 'col-3 card-container' >
                <ProductCard2/>
                </div>

                <div  className = 'col-3 card-container' >
                <ProductCard3/>
                </div>

                <div  className = 'col-3 card-container' >
                <ProductCard4/>
                </div>

                <div  className = 'col-3 card-container' >
                <ProductCard5/>
                </div>

                <div  className = 'col-3 card-container' >
                <ProductCard6/>
                </div>

                <div  className = 'col-3 card-container' >
                <ProductCard7/>
                </div>

                <div  className = 'col-3 card-container' >
                <ProductCard8/>

            </div>

        </div>
    </div>
    )
}

export default Home
