import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import FavouritesItem from "../Components/FavouritesItem";

function Favourites(){

const MovieItem=useSelector((state)=>state.Movies)
const [movies,setMovies]=useState([])

useEffect(() => {
   setMovies(MovieItem)
  }, [MovieItem.length]);
  

return(
    <div className="container">
           <div className="row p-5"> 
           {movies.map((ele,index)=>{
            return(
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3 "  key={ele.movie.id}>
                    <FavouritesItem index={index} title={ele.movie.original_title}  id={ele.movie.id}  src={`https://image.tmdb.org/t/p/w500/${ele.movie.poster_path}`}  />
                    <h1>Favourites</h1>
                </div>
            )
           })}
           </div>
    </div>
 
)

}
export default Favourites