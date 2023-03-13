import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import Blog from "../Components/ItemCard";
import { useDispatch, useSelector } from "react-redux";


function Fetching(){

    const [movies,setMovies]=useState([])
useEffect( () =>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87")
    .then((data) => setMovies(data.data.results))
    .catch((err) => console.log(err))
} ,[])


const [name, setName] = useState("b")
const [page, setPage] = useState("1")
const ChangeInfo=(e) =>{
  
    setName(e.target.value)
    
  
}
const changePage=(e) =>{
    setPage(e.target.text) 
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
}
useEffect( () =>{
    axios.get("https://api.themoviedb.org/3/movie/popular",{
        params:{
            api_key:"9b743af1d4fde1d65af33c40dcccce87",
            page:page
        }
    })
    .then((data) => setMovies(data.data.results))
    .catch((err) => console.log(err))
} ,[page])




useEffect( () =>{
    axios.get("https://api.themoviedb.org/3/search/movie",{
        params:{
            api_key:"9b743af1d4fde1d65af33c40dcccce87",
            query:name
        }
    })
    .then((data) => setMovies(data.data.results))
    .catch((err) => console.log(err))
} ,[name])

const lang = useSelector((state) => state.lang)


useEffect( () =>{
    axios.get("https://api.themoviedb.org/3/movie/popular",{
        params:{
            api_key:"9b743af1d4fde1d65af33c40dcccce87",
            language:lang
        }
    })
    .then((data) => setMovies(data.data.results))
    .catch((err) => console.log(err))
} ,[lang])

    return(
        <>

        <Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" w-25 mt-3 "
              aria-label="Search"
              onChange={(e) => ChangeInfo(e)}
            />
         
          </Form>
        <div id="top" className="container">
        <div className="row p-5">
            {movies.map((ele) =>{
            
            return (
               
              
              
               
                <div className="col-sm-12 col-md-6 col-lg-3 mb-3 " style={{height:"75vh"}} key={ele.id}>
        
                    <Blog  title={ele.title}  id={ele.id} lan={ele.original_language} src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} />

                </div>)
        })}
        </div>
        </div>
        <div className="d-flex justify-content-center">
   
        <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item  onClick={(e) => changePage(e)}>{1}</Pagination.Item>
      <Pagination.Item onClick={(e) => changePage(e)}>{2}</Pagination.Item>
      <Pagination.Item onClick={(e) => changePage(e)}>{3}</Pagination.Item>
      <Pagination.Item  onClick={(e) => changePage(e)}>{4}</Pagination.Item>
      <Pagination.Item onClick={(e) => changePage(e)}>{5}</Pagination.Item>
      <Pagination.Item onClick={(e) => changePage(e)}>{6}</Pagination.Item>
      <Pagination.Item onClick={(e) => changePage(e)}>{7}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
        </div>
 
        </>
    )
}
export default Fetching