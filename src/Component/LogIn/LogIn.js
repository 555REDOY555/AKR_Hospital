import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const LogIn = () => {
     const { SingInWithGoogle, singInwithGitHub, handleEmailChange,
          handlePasswordChange, EnterDetails } = useAuth();

     const location = useLocation();

     const history = useHistory()




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
               <Form onSubmit={EnterDetails} className="mx-5 mt-3">
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
                         <Button onClick={handelGoogleLogIn} className="btn btn-warning text-center " >Sing With Google</Button>
                         <Button onClick={handleGitHubLogIn} className="btn btn-warning text-center ms-3 " >Sing With GitHub</Button>
                    </div>
               </div>
          </div>
     );
};

export default LogIn;