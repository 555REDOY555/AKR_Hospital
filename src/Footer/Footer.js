import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Footer.css'

const Footer = () => {
     return (
          <div>
               <div className="bg-primary mt-2  fixed">
                    <div className="row  pb-3 pt-2">
                         <div className="col-md-6 col-12 text-white text-center border-end">
                              <h1>Existing member</h1>
                              <h2 className="mt-3" >Sign in</h2>
                              <Button className="btn  text-white  " >Sign in</Button>

                              <p className="mt-3" >Or Activate your secure online account</p>
                              <h1 className="" >Need Help?</h1>
                              <p className="mt-2" >We are here to help you find the answers and get the assistance you need.</p>
                              <Button className="btn  text-white  " ><span>Help && support</span></Button>
                         </div>
                         <div className="col-md-6 col-12 text-white text-center ">
                              <h3>WPA Health app</h3>
                              <p className="mt-4">Members can easily manage their cover with our app.</p>
                              <div className="row">
                                   <div className="col-md-4 col-12">
                                        <img height="210px" src="https://www.wpa.org.uk/_nuxt/img/phone-wpa-health@1x.6e8dd03.jpg" alt="" />
                                   </div>
                                   <div className="col-md-6 col-12 mt-5">
                                        <ul className="mt-5">
                                             <li>Make a claim 24/7</li>
                                             <li>Access 24/7 Remote GP Services</li>
                                             <li>Track claims and benefit limits</li>
                                             <li>Send and receive secure messages</li>
                                             <li>View membership literature</li>
                                        </ul>

                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div >
     );
};

export default Footer;