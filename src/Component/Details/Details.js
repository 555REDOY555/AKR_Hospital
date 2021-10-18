import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
     const { kye } = useParams();
     const [data, setData] = useState([]);
     useEffect(() => {
          fetch(`AllServise.json`)
               .then(res => res.json())
               .then(data => setData(data))
     }, [])

     const Iteam = data.filter(td => td.kye === kye)
     console.log(data)
     return (
          <div>
               <div className="col hover-card ">
                    <div className="card    ">
                         <img src={Iteam?.img} className="card-img-top img-fluid " alt="..." />
                         <div className="card-body">
                              <h5 className="card-title">{Iteam?.Name}</h5>
                              <p className="card-text text-primary ">{Iteam?.text}</p>

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Details;