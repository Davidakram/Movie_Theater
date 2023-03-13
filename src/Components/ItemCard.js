
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"


function Blog(props) {
  
  return (
    <Card className="position-relative " style={{height:"100%"}}>
    <Card.Img variant="top" src={props.src} />
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Link to={`/show/${props.id}`}>  <Button variant="warning">Details</Button></Link>
    </Card.Body>
    </Card>
  );
}

export default Blog;