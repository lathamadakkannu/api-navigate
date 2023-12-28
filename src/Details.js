import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Details(){
    const[Data,setData]=useState([])

    useEffect(()=>{
      axios.get("https://api.tvmaze.com/shows/1/episodes")
      .then((res)=>{
  
      setData(res.data)
      console.log(res.data);
      })
      
    },[])

    const params=useParams()
    const item=Data.find((e)=>e.id=== parseInt(params.id))
    console.log(item);

    return(
        <div>
            <Container className='container '> 
                <span className="details-style">More Informations</span>
                <Row className=''>
                 <Card style={{ width:'80%',height:'120vh',textAlign:'center',backgroundColor:"#dcdcdc",borderRadius:"10px",margin:"10px",marginLeft:"13%"}}>
        
                    <Card.Body className="text-style">

                        <Col style={{display:"flex"}}>
                            <Card.Img variant="top" style={{width:'55%',padding:"5px",height:'35vh'}}src={item?.image.medium} />

                            <Card.Text className="summary-style">Summary :{item?.summary}</Card.Text>
                        </Col>

                        <Col className="info">
                            <Card.Title>Title : {item?.name}</Card.Title>
                            <Card.Text>Id :{item?.id}</Card.Text>
                            <Card.Text>Rating :{item?.rating.average}</Card.Text>
                            <Card.Text>Airtime :{item?.airtime}</Card.Text>
                            <Card.Text>Airdate :{item?.airdate}</Card.Text>
                            <Card.Text>Airstamp :{item?.airstamp}</Card.Text>
                            <Card.Text>Number : {item?.number}</Card.Text> 
                            <Card.Text>Type :{item?.type}</Card.Text>  
                            <Card.Text>Season:{item?.season}</Card.Text>
                            <Card.Text>URL:{item?.url}</Card.Text>
                            {/* <Card.Text>URL:<a href="#" alt=''>{item?.url}</a></Card.Text> */}
                            
                        </Col>

                    </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}
export default Details;