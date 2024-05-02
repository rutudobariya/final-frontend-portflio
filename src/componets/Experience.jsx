import React from 'react';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import tailwind from '../assets/images/tailwind.webp';
import react from '../assets/images/react.png';
import github from '../assets/images/github.png';
import bootstrap from '../assets/images/bootstrap.png';
import redux from '../assets/images/redux.png';
import jquery from '../assets/images/jquery.png';
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from "react";

const Experience = () => {

    const techs = [
        {
            id:1,
            src: html,
            title : "Html",
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title : "Css",
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: js,
            title : "Javascript",
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: tailwind,
            title : "Tailwind",
            style: 'shadow-sky-400'
        },
        {
            id:5,
            src: react,
            title : "React",
            style: 'shadow-blue-500'
        },
        {
            id:6,
            src: github,
            title : "Github",
            style: 'shadow-slate-500'
        }, 
        {
            id:7,
            src: bootstrap,
            title : "Bootstrap",
            style: 'shadow-purple-500'
        },
        {
            id:8,
            src: redux,
            title : "Redux",
            style: 'shadow-blue-500'
        },
        
        {
            id:9,
            src: jquery,
            title : "JQuery",
            style: 'shadow-sky-500'
        },
    ]
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full pt-36">
      <div data-aos="fade-up"  className="max-w-6xl mx-auto p-4 flex flex-col justify-center w-full text-white">

        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6 text-lg uppercase text-center'>This are the technology I've worked with</p>
        </div>

        <div  data-aos="fade-up"  className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0'>
            {
                techs.map(({id,src,title,style})=>{
                    return(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-5 rounded-lg ${style} items-center grid `}>
                <img src={src} alt="" className='w-32 mx-auto'/>
                <p className='mt-4 text-lg uppercase'>{title}</p>
            </div>
                    )
                })
            }
            
        </div>
      </div>
    </div>
  )
}

export default Experience