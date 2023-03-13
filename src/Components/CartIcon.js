import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function CartIcon(){
    


    const Count=useSelector((state)=>state.count)
    return(
        <div className="mt-1">
            <Link className="text-warning" to="/favourites">
                <i className="fa fa-shopping-cart text-warning"></i>
                <div className="badge badge-danger text-warning">{Count}</div>

                 </Link>
        </div>
       
    )
}
export default CartIcon