import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { IoNewspaperOutline } from "react-icons/io5"

function Sidebar() {
    const icons = [
        {
            icon: <FaLinkedin size={30}/>,
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/karl-vinuya/",
            id: 1
        },
        {
            icon: <FaGithub size={30}/>,
            text: "Github",
            link: "https://github.com/vinuyakarl",
            id: 2
        },
        {
            icon: <IoMdMail size={30}/>,
            text: "Email",
            link: "mailto:karleric@ualberta.ca",
            id: 3
        },
        {
            icon: <IoNewspaperOutline size={30}/>,
            text: "Resume",
            link: "https://drive.google.com/file/d/1do-bQyVHgNqrRb3yxRgsH2YDsq_Z556T/view?usp=sharing",
            id: 4
        }
    ]

  return (
    <div className="flex-col top-[35%] right-0 fixed">
        <ul className="hidden md:block">
            {icons.map(icon => (
                <li key={icon.id} className="flex justify-between items-center w-40 h-14 px-4 bg-gray-400 rounded-s-lg transform translate-x-[100px] hover:translate-x-0 duration-200 my-1">
                    <a target="_blank" href={icon.link} className="flex justify-between items-center w-full text-white">
                        {icon.icon}{icon.text}
                    </a>
                </li>
            ))}
        </ul>


    </div>
  )
}

export default Sidebar