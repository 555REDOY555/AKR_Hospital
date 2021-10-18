import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ContainerORg from '../ServiseCon/ContainerORg';
import container from '../ServiseCon/ContainerORg';
import './Servise.css'

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
               <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 ">
                    {
                         servise.map(all => <ContainerORg all={all} ></ContainerORg>)
                    }

               </div>

          </div >
     );
};

export default Servise;