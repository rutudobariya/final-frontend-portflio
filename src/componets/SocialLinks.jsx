import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import res from '../assets/images/rutuCVResume.pdf'

const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        
        <ul>
            <li className='flex rounded-md justify-between items-center h-14 w-40 px-4 bg-gray-500 text-white ml-[-100px] hover:rounded-md duration-500 hover:ml-[0px]' >
            <a href="https://www.linkedin.com/in/rutu-dobariya1604/" rel="noreferrer" target='_blank' className='flex justify-between items-center w-full text-white'>Linkedin <FaLinkedin size={30}/></a>

            </li>

            <li className='flex rounded-md justify-between items-center h-14 w-40 px-4 bg-gray-500 text-white ml-[-100px] hover:rounded-md duration-500 hover:ml-[0px]' >
            <a href="https://github.com/rutudobariya" rel="noreferrer" target='_blank'  className='flex justify-between items-center w-full text-white'>Github <FaGithub size={30}/></a>

            </li>

            <li className='flex rounded-md justify-between items-center h-14 w-40 px-4 bg-gray-500 text-white ml-[-100px] hover:rounded-md duration-500 hover:ml-[0px]' >
            <a href = "mailto:rutudobariya1604@gmail.com" className='flex justify-between items-center w-full text-white'>Email <HiOutlineMail size={30}/></a>

            </li>

            <li className='flex rounded-md justify-between items-center h-14 w-40 px-4 bg-gray-500 text-white ml-[-100px] hover:rounded-md duration-500 hover:ml-[0px]' >
            <a href={res} download   className='flex junpm run buildstify-between items-center w-full text-white'>Resume <BsFillPersonLinesFill size={30}/></a>

            </li>
        </ul>
    </div>
  )
}

export default SocialLinks