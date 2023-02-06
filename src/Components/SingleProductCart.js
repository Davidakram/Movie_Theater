import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function SingleProductCart(props) {
  return (
    <Card style={{ width: '18rem'}} >
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
    
      </Card.Body>

     
    </Card>
  );
}

export default SingleProductCart;