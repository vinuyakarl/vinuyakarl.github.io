import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-scroll'

function Navbar() {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            title: 'Home',
            link: "home"
        },
        {
            id: 2,
            title: "Skills",
            link: "skills"
        },
        {
            id: 3,
            title: 'Projects',
            link: "projects"
        },
        {
            id: 4,
            title: 'Contact',
            link: "contact"
        }
    ]

    return (
        <div className="flex justify-between items-center w-full h-24 px-6 text-gray-400 bg-gray-900 fixed">
            <Link to={"home"} smooth duration={500}>
                <h1 className="cursor-pointer font-signature text-5xl font-black text-white">KV</h1>
            </Link>
            
            <ul className=" hidden md:flex gap-6 text-2xl">
                {links.map(link => (
                    <li key={link.id} className="cursor-pointer hover:scale-125 hover:text-white duration-200">
                        <Link to={link.link} smooth duration={500}>{link.title}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer text-4xl hover:scale-125 hover:text-white duration-200">
                {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
            </div>
            
            <ul className={`flex flex-col justify-center items-center w-full top-24 left-0 absolute bg-gray-900 transition-all duration-500 ${nav ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{height: `calc(100vh - 6rem)`}}>
                {links.map(link => (
                    <li key={link.id} className="text-5xl py-4 cursor-pointer hover:scale-125 hover:text-white duration-200">
                        <Link to={link.link} smooth duration={500} onClick={() => setNav(!nav)}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar