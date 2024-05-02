import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from "react";

const Contact = () => {
    const form = useRef();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();
        if (name && email && message != "") {
            emailjs.sendForm('service_chztbwt', 'template_c6o9xvr', form.current, 'XSpVxjI1q64unxs7G')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            alert("message sent succesfully")
            setEmail("")
            setName("")
            setMessage("")
        } else {
            alert("please enter name and email")
        }
    };
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (

        <div name="contact" className='w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-28'>
            <div data-aos="fade-up" className='flex flex-col p-4 justify-center max-w-6xl mx-auto'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6 text-xl'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
                       
                        <input value={name} onChange={(e) => setName(e.target.value)} name="from_name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" placeholder='Enter your name' />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} name="from_email" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4' type="text" placeholder='Enter your email' />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-white' rows="10" placeholder='Enter your message'></textarea>

                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Let's Talk </button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact