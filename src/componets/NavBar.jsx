import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'


const NavBar = () => {

    const [nav,setNav] = useState(false);
    
    const links = [
        {
            id: 1,
            link: "home",
            
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
        <div className="z-50  flex justify-between items-center w-full h-20 text-white fixed px-4  bg-black">

            <div>
                <h1 className="text-5xl font-signature ml-2">Rutu</h1>
            </div>

            <ul className="hidden md:flex">
                {
                links.map(({id,link}) => {
                    return (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                        >
                                <Link to={link} smooth duration={500} className="text-slate-300 text-xl">{link}</Link>
                           
                        </li>
                    );
                })
                }
            </ul>

            <div onClick={()=> setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-gray-500">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
                {nav && 
                  <ul className="flex flex-col justify-center items-center w-full absolute top-0 left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
                  {
                      links.map(({id,link} ) => {
                          return (
                              <li
                                  key={id}
                                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                              >
                             <Link onClick={()=>setNav(false)} to={link} smooth duration={500} className="text-slate-300 text-xl">{link}</Link>

                                 
                              </li>
                          );
                      })
                      }
                      
                  </ul>
                
                }
          
        </div>
    );
};

export default NavBar;
