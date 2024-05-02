import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.png";
import project9 from "../assets/images/project-9.png";

import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from "react";

const Porfolio = () => {

    const portfolios = [
        {
            id:1,
            src:project1,
            name:"Bootstrap Fitness website",
            demo:"http://www.dhevanfitnesh.byethost7.com/?i=1",
            code:"https://github.com/rutudobariya/17Jun_Rutu_JavaScript/tree/Master/bootstrap/live-projects"
        },
        {
            id:2,
            src:project2,
            name:"GFX Artist Website",
            demo:"https://manthangfx.netlify.app/",
            code:"https://github.com/rutudobariya/Html_css_projects/tree/Master/GFX%20Artist%20Website"

        },
        {
            id:3,
            src:project3,
            name:"Task Manager App",
            demo:"https://task-manager-app1604.netlify.app/",
            code:"https://github.com/rutudobariya/Task-manager-app"

        },
        {
            id:4,
            src:project4,
            name:"Static Ecommerce Website",
            demo:"https://jatinflipkart.netlify.app/",
            code :"https://github.com/rutudobariya/Html_css_projects/tree/Master/flipkart%20clone"
      
        },
        {
            id:5,
            src:project5,
            name:"Ecommerce React Website",
            demo:"https://ruturealincemall.netlify.app/",
            code:"https://github.com/rutudobariya/final_project/tree/master?tab=readme-ov-file"

        },
        {
            id:6,
            src:project6,
            name:"Resume Builder",
            demo:"https://eactresumebuilder.netlify.app/",
            code:"https://github.com/rutudobariya/Task-manager-app/tree/Master/resumeBuilder--main"

        },
        {
          id:7,
          src:project7,
          name:"Ecomerce Redux Toolkit",
          demo:"https://final-project-pearl-pi.vercel.app/",
          code:"https://github.com/rutudobariya/final_project/tree/Master/src"

      },
      {
        id:8,
        src:project8,
        name:"YummiFood Website React",
        demo:"https://yumi-foodapp.netlify.app/",
        code:"https://github.com/rutudobariya/cart-react/tree/master?tab=readme-ov-file"

    },
    {
      id:9,
      src:project9,
      name:"Cart Redux website",
      demo:"https://cart-react-gold.vercel.app/",
      code:"https://github.com/rutudobariya/cart-react/tree/Master/"

  },
    ]

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
     
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b py-32 from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-6xl p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6 text-lg uppercase text-center">Check out some of my work here</p>
        </div>

        <div  data-aos="fade-up"  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 " >
        {
            portfolios.map(({id,src,name,demo,code})=>{
                return(
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src} alt="" className="rounded-md duration-300 hover:scale-105" />
            <p className="text-center pt-5 text-lg uppercase text-blue-400">{name}</p>
            <div className="flex items-center justify-center ">
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border border-blue-400 rounded-xl text-center"  href={demo} target="_blank" rel="noreferrer">Demo</a>
              <a href={code} target="_blank" rel="noreferrer"  className="border border-blue-400 rounded-xl text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >Code</a>
            </div>
          </div>
                )

            })
        }
          
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
