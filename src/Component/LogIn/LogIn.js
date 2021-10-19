import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initialize from '../FireBase/FireBaseInit';


initialize()

const LogIn = () => {
     const auth = getAuth();

     const { SingInWithGoogle, singInwithGitHub } = useAuth();

     const history = useHistory()
     const location = useLocation()
     const [error, setError] = useState('')
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")






     const handleEmailChange = e => {
          setEmail(e.target.value)
     }
     const handlePasswordChange = e => {
          if (e.target.value < 6) {

          }

          setPassword(e.target.value)
     }


     const logIn = (e) => {
          e.preventDefault();
          signInWithEmailAndPassword(auth, email, password)
               .then((result) => {
                    console.log(result.user)

                    history.push('/home')
               })
               .catch((error) => {
                    setError(error.message);
                    // ..
               });
     }








     const handelGoogleLogIn = () => {
          SingInWithGoogle()
          history.push("/Home")
          // .then(result => {

          // })
     }
     const handleGitHubLogIn = () => {
          singInwithGitHub()
          history.push("/Home")
          // .then(result => {
          //      
          // })

     }


     return (
          <div>
               <Form onSubmit={logIn} className="mx-5 mt-3">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                         <Form.Label column sm={2}>
                              Email
                         </Form.Label>
                         <Col sm={10}>
                              <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                         <Form.Label column sm={2}>
                              Password
                         </Form.Label>
                         <Col sm={10}>
                              <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                              <p className="text-danger" >{error}</p>
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                         <Col sm={{ span: 10, offset: 2 }}>
                              <Form.Check label="Remember me" />
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                         <Col sm={{ span: 10, offset: 2 }}>
                              <Button className="btn-warning" type="submit">Sign in</Button>
                         </Col>
                    </Form.Group>
               </Form>

               <p className="text-center" >Are you new here <Link to="/register" >Create account</Link></p>
               <div className="text-center">
                    <div className="text-center">
                         <Button onClick={handelGoogleLogIn} className="btn btn-warning text-center " >Sign With Google</Button>
                         <Button onClick={handleGitHubLogIn} className="btn btn-warning text-center ms-3 " >Sign With GitHub</Button>
                    </div>
               </div>
          </div>
     );
};

export default LogIn;