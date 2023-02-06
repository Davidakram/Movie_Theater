import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import SingleProductCart from "../Components/SingleProductCart";
import { AddtoFav } from "../Store/Actions/Actions";
import {  useSelector } from "react-redux";


function SingleProduct(props){
    const lang = useSelector((state) => state.lang)

    const params=useParams()
    const ShowId=params.id
    const[movie,setMovie]=useState({})
    const [count,setCount]=useState("1")
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${ShowId}?api_key=9b743af1d4fde1d65af33c40dcccce87`)
        .then((details)=>setMovie(details.data)).catch((error) => console.log(error))
    },[])
    useEffect( () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${ShowId}`,{
            params:{
                api_key:"9b743af1d4fde1d65af33c40dcccce87",
                language:lang
            }
        })
        .then((data) => setMovie(data.data))
        .catch((err) => console.log(err))
    } ,[lang])
    
    const Adding=(e)=>{
        if(e.target.className==="fa-regular fa-star text-warning fw-bold fs-3"){
            dispatch(AddtoFav(movie,count))
            setCount(parseInt(count)+1)
            e.target.className="fa-regular fa-star text-danger fw-bold fs-3"
        }
    }


    return(
        <div className="container" style={{width:"fit-content",marginTop:"24px"}}>
        <div className="row ">
            <div className="david">
            <SingleProductCart  title={movie.title} over={movie.overview}  lan={movie.original_language} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        
            <br></br>
            {/* <p>Total Price : {quantity * myProduct.id}</p> */}
            <Button variant="outline-warning"   ><i  onClick={(e)=>Adding(e)} className="fa-regular fa-star text-warning fw-bold fs-3"></i></Button>
            </div>
        </div>
    </div>
    )
   
}
export default SingleProduct

// ---> in the bUtton onClick={()=>Adding()}