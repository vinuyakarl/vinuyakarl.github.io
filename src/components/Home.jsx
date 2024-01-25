import React from 'react'
import mainPic from '../assets/Karl-Vinuya.jpeg'
import { FaArrowCircleDown } from "react-icons/fa"
import { Link } from 'react-scroll'

function Home() {
  return (
    <div id="home" className="bg-gradient-to-b from-gray-900 to-gray-500 py-32">
        <div className="max-w-screen-lg flex flex-col mx-auto md:flex-row items-center justify-end lg:px-0 px-6 gap-10 h-full pt-24 pb-20">
            <div className="flex-1">
                <img 
                    src={mainPic} 
                    alt="Karl Vinuya"
                    className="rounded-2xl mx-auto object-contain w-3/4"
                />
            </div>

            <div className="flex-1 text-center">
                <h1 className="text-gray-400 py-4 text-5xl font-bold">Karl Vinuya</h1>
                <p className="text-gray-900">
                Hi there! I'm Karl Vinuya, a passionate 3rd-year Computer Science student at the University of Alberta. 
                With a strong foundation in languages like Java, Python, and JavaScript, I've successfully applied my skills to innovative projects, including a travel planning app and a personal item management system. 
                I thrive in collaborative environments, and I'm actively seeking internship opportunities to further develop my expertise and contribute to cutting-edge technology solutions. 
                Excited to explore new challenges and make a meaningful impact!
                </p>
            </div>
        </div>
        <Link to={"skills"} smooth duration={500}>
            <FaArrowCircleDown className='cursor-pointer hover:scale-125 hover:text-white duration-200 text-4xl mx-auto text-gray-400'/>
        </Link>
    </div>
  )
}

export default Home