import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../Hook/useAuth';


const Register = () => {
     const { SingInWithGoogle, singInwithGitHub, handleEmailChange,
          handlePasswordChange, heandleRegistration, error } = useAuth();

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
               <Form onSubmit={heandleRegistration} className="m-5" >

                    <div className="row mb-3 ">
                         <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                         <div className="col-sm-10">
                              <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                         </div>
                    </div>
                    <div className="row mb-3">
                         <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                         <div className="col-sm-10">
                              <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                              <div className=" text-danger">
                                   {error}
                              </div>
                         </div>
                    </div>
                    <div className="row mb-3">
                         <div className="col-sm-10 offset-sm-2">
                              <div className="form-check">
                                   <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                   <label className="form-check-label" htmlFor="gridCheck1">
                                        tarms and condison
                                   </label>
                              </div>
                         </div>

                    </div>
                    <button type="submit" className="btn btn-warning">Registar</button>
                    <p className="text-center" >Already user <Link to="/login" >Log-In</Link></p>


               </Form>
               <div className="text-center">
                    <Button onClick={handelGoogleLogIn} className="btn btn-warning text-center " >Sing With Google</Button>
                    <Button onClick={handleGitHubLogIn} className="btn btn-warning text-center ms-3 " >Sing With GitHub</Button>
               </div>
          </div>
     );
};

export default Register;