import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function SignIn() {
    const[info,setInfo]=useState({
        email:"",
        password:""
    })

    const[error,setErr]=useState({
        emailErr:"",
        passwordErr:""
    })

    const ChangeInfo=(e) =>{
        if(e.target.name=="email"){
            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
                setErr({
                    ...error,
                    emailErr:"Given email is not in a valid form"
                })
            }
            else{
                setInfo({
                    ...info,
                    email:e.target.value
                })
                setErr({
                    ...error,
                    emailErr:""
                })
            }

        }else if( e.target.name=="password"){
            if(e.target.value.length <8){
                setErr({
                    ...error,
                    passwordErr:"Password cannot be less than 8 characters"
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
    }


    const submitUserData = (e) => {
        e.preventDefault()
    }
    return (
      <Form onSubmit={(e) => submitUserData(e)} className="mt-5" >
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Label className="text-warning mb-3">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="w-50 m-auto" required={info.email.length==0 && "required"} name="email" onChange={(e) => ChangeInfo(e) } />
          <p className="text-warning mt-2 fw-bold"> {error.emailErr}</p>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-warning mb-3">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="w-50 m-auto" required={info.password.length==0&& "required"} name="password" onChange={(e) => ChangeInfo(e)} />
          <p className="text-warning mt-2 fw-bold"> {error.passwordErr}</p>
        </Form.Group>
       
        <Button variant="warning" className='w-25 mt-5 p-2' type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  export default SignIn;