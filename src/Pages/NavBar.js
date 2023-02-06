import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from 'react';
import { changeLanguage } from '../Store/Actions/Actions';

function NavBar() {
  const Count=useSelector((state)=>state.Movies.length)
  const dispatch=useDispatch()
  const lang = useSelector((state) => state.lang)

  useEffect(() => {
    const element = document.getElementById('box');
    element.textContent=Count
  }, [Count]);

 const ChangeMyLang = () => {
  dispatch(changeLanguage(lang === "En" ? "Ar" : "En"))
}

  return (
    <Navbar bg="dark" expand="lg" >
          
      <Container fluid>
        <Link className="text-warning" to="/"><Button style={{border:"none"}} variant="outline-warning" >Movies</Button></Link>
        <Link className="text-warning" to="/favourites"><Button style={{border:"none"}} variant="outline-warning" >Favourites</Button></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' ,padding:"0px"}}
            navbarScroll
          >
         <Link className="text-warning" to="#"><Button   onClick={() => ChangeMyLang()}style={{border:"none"}} className='ms-5' variant="outline-warning" >{lang}</Button></Link>

          <div className="mt-1">
            <Link className="text-warning" to="/favourites">
                <i className="fa fa-shopping-cart text-warning"></i>
                <div className="badge badge-danger text-warning"id="box">0</div>

              </Link>
        </div>
                      
            <Link className="text-warning" to="/signin"><Button style={{border:"none"}} className='ms-3' variant="outline-warning" >Sign In</Button></Link>
            <Link className="text-warning" to="/signup"><Button style={{border:"none"}} className='ms-5' variant="outline-warning">Sign Up</Button></Link>
         
          </Nav>
        
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
   
    
  );
}

export default NavBar;