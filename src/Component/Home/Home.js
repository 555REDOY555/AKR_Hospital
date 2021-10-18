import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css'
import photo from '../healthcare-providers.4416666.jpg'

const Home = () => {
     return (
          <div>

               <div className="row">
                    <div class="card  b-5">
                         <img src={photo} class="card-img" alt="..." />
                         <div class="card-img-overlay">
                              <h5 class="card-title Home-h3-tag-banner ">Homepage Healthcare / providers</h5>
                              <p class="card-text"><h1 className="Home-h1-tag-banner">Healthcare providers</h1></p>
                              <p class="card-text"> <h2 className="Home-h2-tag-banner" >This area contains information for healthcare providers.</h2></p>
                         </div>
                         <div className="text-center mt-5">
                              <h1 >Healthcare provider information</h1>
                              <p className="mt-5 "  >Our members are free to choose where, when and who provides them with treatment. All we ask is that you register with us for <br />
                                   recognition first. If you are not registered, but would like to be, please select 'Apply for WPA recognition' below.</p>
                         </div>

                    </div>
                    <div className="">
                         <div className="row row-cols-1 row-cols-md-2 g-4 ">
                              <div className="col">
                                   <div className="card">

                                        <div className="card-body card-1 text-center">
                                             <h5 className="card-title  fs-1 pb-5 ">Check medical fees</h5>
                                             <div className="py-5">
                                                  <p className="card-text ">Search the WPA Fee Schedule to find out what amounts we will pay towards the fee charged by a specialist.</p>
                                                  <Link to="/servise" > <button className="btn btn-warning" >Go To Servise</button>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col">
                                   <div className="card">

                                        <div className="card-body card-2 text-center">
                                             <h5 className="card-title  fs-1 pb-5 ">Check medical fees</h5>
                                             <div className=" py-5">
                                                  <p className="card-text ">Search the WPA Fee Schedule to find out what amounts we will pay towards the fee charged by a specialist.</p>
                                                  <Link to="/servise" > <button className="btn btn-warning" >Go To Servise</button>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col">
                                   <div className="card">

                                        <div className="card-body card-3 text-center">
                                             <h5 className="card-title  fs-1 pb-5 ">Check medical fees</h5>
                                             <div className=" py-5">
                                                  <p className="card-text ">Search the WPA Fee Schedule to find out what amounts we will pay towards the fee charged by a specialist.</p>
                                                  <Link to="/servise" > <button className="btn btn-warning" >Go To Servise</button>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col">
                                   <div className="card">

                                        <div className="card-body card-4 text-center">
                                             <h5 className="card-title  fs-1 pb-5 ">Check medical fees</h5>
                                             <div className=" py-5">
                                                  <p className="card-text ">Search the WPA Fee Schedule to find out what amounts we will pay towards the fee charged by a specialist.</p>
                                                  <Link to="/servise" > <button className="btn btn-warning" >Go To Servise</button>
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div >
     );
};

export default Home;