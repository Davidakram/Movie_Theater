
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { RemoveFromFav } from '../Store/Actions/Actions';


function FavouritesItem(props) {


    const dispatch=useDispatch()


    const Removing=(index)=>{
        dispatch(RemoveFromFav(index))
        
     }


  return (
    <Card className="position-relative " style={{height:"100%"}}>
    <Card.Img variant="top" src={props.src} />
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Button onClick={()=>Removing(props.index)} variant="danger">Remove From Favourites</Button>
    </Card.Body>
    </Card>
  );
}

export default FavouritesItem;