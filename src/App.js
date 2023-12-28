// import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {

  const[Data,setData]=useState([])
  console.log(Data)
  
  useEffect(()=>{
    axios.get("https://api.tvmaze.com/shows/1/episodes")
    .then((res)=>
  setData(res.data)
    )

},[])

  const a=useNavigate()
  const checkDetails=(value)=>{
   console.log(value);
  a(`/details/${value}`)
  }
  
  return ( 
     <div>  
        <Container className='container'>
          <h2 className='head mt-4 mb-4'><span>M</span>ovies <span>L</span>ist</h2>
          <Row className='row row-cols-lg-3'>
            {
              Data.map((result,i)=>(
                <Col className='col p-4'>
                  <Card style={{ width: '18rem' }}  className='card'>
                    <Card.Img variant="top" src={result.image.medium} />

                      <Card.Body>
                        <Card.Title>Movie Name:{result.name}</Card.Title>
                        <Card.Title>Rating:{result.rating.average}</Card.Title>
                        <Button className="btn-style" variant="primary" onClick={()=>checkDetails(result.id)}>More Details</Button>
                      </Card.Body>
                  </Card>
                </Col>
        

              ))
            }    
          </Row>
        </Container>
   
      </div>
  );
}

export default App;