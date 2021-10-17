import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Servise = () => {
     const [servise, setservise] = useState([])

     useEffect(() => {
          fetch(`AllServise.json`)
               .then(res => res.json())
               .then(data => setservise(data))
     }, [])

     console.log(servise)



     return (
          <div>
               <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                         servise.map(all => <div className="col">
                              <div className="card ">
                                   <img src={all.img} className="card-img-top img-fluid " alt="..." />
                                   <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                   </div>
                              </div>
                         </div>)
                    }

               </div>

          </div>
     );
};

export default Servise;