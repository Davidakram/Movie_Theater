import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

    
    function SignUp() {
      const[info,setInfo]=useState({
        email:"",
        password:"",
        name:"",
        username:"",
        checkpassword:""
    })

    const[error,setErr]=useState({
        emailErr:"",
        passwordErr:"",
        nameErr:"",
        usernameErr:"",
        checkErr:""
    })
    const ChangeInfo=(e) =>{
      if(e.target.name=="Name"){
        if(e.target.value.length ==0){
          setErr({
            ...error,
            nameErr:"Name is required"
          })
        }
        else{
          setErr({
            ...error,
            nameErr:""
          })
          setInfo({
            ...info,
            name:e.target.value,
          })
        }
      }
      else if(e.target.name=="Email"){
        if(e.target.value.length==0){
          setErr({
            ...error,
            emailErr:"Email is required"
          })
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
          setErr({
            ...error,
            emailErr:"Invalid Email format"
          })
        }else{
          setInfo({
            ...info,
            email:e.target.value
        })
        setErr({
            ...error,
            emailErr:""
        })
        }
        }
      else if(e.target.name=="UserName"){
        if(e.target.value.length==0){
          setErr({
            ...error,
            usernameErr:"UserName is required"
          })
        }
        else if ( /\s/g.test(e.target.value)){
          setErr({
            ...error,
            usernameErr:"UserName Cannot contain spaces"
          })
        }
        else{
          setInfo({
            ...info,
            username:e.target.value
        })
        setErr({
            ...error,
            usernameErr:""
        })
        }
      }
      else if(e.target.name=="Password"){
        if(e.target.value.length==0){
          setErr({
            ...error,
            passwordErr:"Password is required"
          })
        }
        else if(e.target.value.length<8){
          setErr({
            ...error,
            passwordErr:"Password must be atleast 8 characters"
          })
        }
        else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(e.target.value)){
          setErr({
            ...error,
            passwordErr:"Password must contains at least one lowercase , one uppercase , at least one digit and special character"
          })
        }
        else{
          setInfo({
            ...info,
            password:e.target.value
        })
        setErr({
            ...error,
            passwordErr:""
        })
        }
      
      }
      else if(e.target.name=="ConfirmPassword"){
        if(e.target.value.length==0){
          setErr({
            ...error,
            checkErr:"Check_Password is required"
          })
        }
        else if(e.target.value !=info.password){
          setErr({
            ...error,
            checkErr:"Check_Password must match Password entered above"
          })
        }
        else {
          setInfo({
            ...info,
            checkpassword:e.target.value
        })
        setErr({
            ...error,
            checkErr:""
        })
        }
      }
    }
      const submitUserData = (e) => {
        e.preventDefault()
        }
        return (
          <Form onSubmit={(e) => submitUserData(e)}>
             <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="text-warning mb-3 fs-4">Name</Form.Label>
              <Form.Control type="text" className='w-50 m-auto' placeholder="Enter ur name" onChange={(e) => ChangeInfo(e) } name="Name" />
              <p className="text-warning mt-2 fw-bold"> {error.nameErr}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="text-warning mb-3 fs-4">Email address</Form.Label>
              <Form.Control type="email" className='w-50 m-auto' placeholder="Enter email" onChange={(e) => ChangeInfo(e) } name="Email" />
              <p className="text-warning mt-2 fw-bold"> {error.emailErr}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="text-warning mb-3 fs-4">UserName</Form.Label>
              <Form.Control type="text" className='w-50 m-auto' placeholder="Enter  username" onChange={(e) => ChangeInfo(e) } name="UserName" />
              <p className="text-warning mt-2 fw-bold"> {error.usernameErr}</p>
            </Form.Group>
      
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="text-warning mb-3 fs-4">Password</Form.Label>
              <Form.Control type="password" className='w-50 m-auto' placeholder="Password" onChange={(e) => ChangeInfo(e) } name="Password" />
              <p className="text-warning mt-2 fw-bold"> {error.passwordErr}</p>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="text-warning mb-3 fs-4">ConfirmPassword</Form.Label>
              <Form.Control type="password" className='w-50 m-auto' placeholder="Re-Password" onChange={(e) => ChangeInfo(e) } name="ConfirmPassword" />
              <p className="text-warning mt-2 fw-bold"> {error.checkErr}</p>
            </Form.Group>
          
               
            <Button variant="warning" className='w-25 mt-2 p-2' type="submit">
              Submit
            </Button>
          </Form>
        );
}
    export default SignUp;
