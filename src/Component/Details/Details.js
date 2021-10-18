import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
     const { kye } = useParams();
     const [data, setData] = useState([]);
     useEffect(() => {
          fetch(`/AllServise.json`)
               .then(res => res.json())
               .then(data => setData(data))
     }, [])

     const Iteam = data.filter(td => td._kye == kye)
     console.log(data)
     return (
          <div className="ms-5" >
               <div className="col hover-card ms-5 ">
                    <div className="card  ms-5 w-75   ">
                         <img src={Iteam[0]?.img} className="card-img-top img-fluid " alt="..." />
                         <div className="card-body">
                              <h5 className="card-title">{Iteam[0]?.Name}</h5>
                              <p className="card-text text-primary ">{Iteam[0]?.text}</p>
                              <h5>{Iteam[0]?.ds}</h5>



                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Details;