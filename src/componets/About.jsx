import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div  name="about" className='w-full  bg-gradient-to-b from-gray-800 pt-36 to-black text-white'>

    <div  data-aos="fade-up" className='max-w-6xl h-full p-4 mx-auto flex flex-col justify-center w-full '>
        <div  className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
        </div>
        <p className='text-xl mt-10 leading-10'>I'm Rutu Dobariya, a passionate front-end web developer hailing from Gujarat. Proficient in HTML, CSS, JavaScript, React, Tailwind CSS, and more.. I create captivating digital experiences. My journey began with a fascination for crafting user-friendly interfaces that led me to specialize in React's dynamic capabilities and design aesthetics. With a commitment to continuous learning and collaboration, I leverage tools like GitHub for seamless version control and efficient teamwork. Let's connect and turn your ideas into engaging web realities.</p>
        <br />
        <p className='text-xl leading-10' >A mechanical enthusiast turned coding enthusiast. While gears once fascinated me, lines of code now captivate my imagination. Embracing technology, I've dived into coding languages like HTML, CSS, and JavaScript, and I'm adept at frameworks like React..</p>
      <br />
        <p className='text-xl leading-10'>I'm excited to contribute to the limitless possibilities of technology. If you share my passion for innovation or want to collaborate on projects , let's connect. Together, we can shape the future by fusing the tangible and the virtual.</p>
    </div>

    </div>
  )
}

export default About