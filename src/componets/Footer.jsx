import {Link} from 'react-scroll'

const Footer = ()=>{
    return(
        <div className="w-full bg-gradient-to-b from-gray-800 via-gray-800 to-black">
            <hr />
            <div className="max-w-6xl mx-auto  py-10 px-20 grid grid-col-1 gap-10 sm:gap-3  sm:grid-cols-2 lg:grid-cols-3 text-white">
                <div className='grid gap-2'>
                    <h1 className='font-bold text-2xl pb-5 '>Pages</h1>
                    <Link to="home" smooth duration={500} className="hover:underline cursor-pointer text-slate-300 text-lg">Home</Link>
                    <Link to="about" smooth duration={500} className="hover:underline cursor-pointer text-slate-300 text-lg">About</Link>
                    <Link to="portfolio" smooth duration={500} className="hover:underline cursor-pointer text-slate-300 text-lg">Portfolio</Link>
                    <Link to="experience" smooth duration={500} className="hover:underline cursor-pointer text-slate-300 text-lg">Experience</Link>
                    <Link to="contact" smooth duration={500} className="hover:underline cursor-pointer text-slate-300 text-lg">Contact</Link>
                    
                </div>
                <div className='grid gap-2'>
                    <h1 className='font-bold text-2xl pb-5 '>Socials</h1>
                    <a href='https://www.instagram.com/Rutu dobariya' rel="noreferrer" target='_blank' className="hover:underline cursor-pointer text-slate-300 text-lg">Instagram</a>
                    <a href='https://www.linkedin.com/in/rutu-dobariya1604/'rel="noreferrer" target='_blank' className="hover:underline cursor-pointer text-slate-300 text-lg">Linkdein</a>
                    <a href='https://github.com/rutudobariya' rel="noreferrer" target='_blank' className="hover:underline cursor-pointer text-slate-300 text-lg">Github</a>
                    
                </div>
                
            <div className='text-white items-center flex '>
                	&#xA9; All rights reserved by Rutu dobariya
            </div>
            </div>
        </div>
    )
}


export default Footer