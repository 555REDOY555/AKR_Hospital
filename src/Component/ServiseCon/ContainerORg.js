import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const ContainerORg = (props) => {
     const { Name, img, text, _kye, price } = props.all

     return (
          <div>
               <div className="col hover-card ">
                    <div className="card    ">
                         <img src={img} className="card-img-top img-fluid " alt="..." />
                         <div className="card-body">
                              <h5 className="card-title">{Name}</h5>
                              <p className="card-text text-primary ">{text}</p>
                              <h2 className="text-primary mb-3 " >
                                   {price}
                              </h2>
                              <Link to={`/details/${_kye}`} ><Button className="btn btn-warning" >Details</Button></Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ContainerORg;