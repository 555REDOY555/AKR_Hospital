import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const ContainerORg = (props) => {
     const { Name, img, text, kye } = props.all

     return (
          <div>
               <div className="col hover-card ">
                    <div className="card    ">
                         <img src={img} className="card-img-top img-fluid " alt="..." />
                         <div className="card-body">
                              <h5 className="card-title">{Name}</h5>
                              <p className="card-text text-primary ">{text}</p>
                              <Link to={`/details/${kye}`} ><Button className="btn btn-warning" >Details</Button></Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ContainerORg;