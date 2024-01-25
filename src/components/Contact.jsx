import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { IoNewspaperOutline } from "react-icons/io5"

function Contact() {
  const icons = [
    {
        icon: <FaLinkedin size={60}/>,
        text: "karl-vinuya",
        link: "https://www.linkedin.com/in/karl-vinuya/",
        id: 1
    },
    {
        icon: <FaGithub size={60}/>,
        text: "vinuyakarl",
        link: "https://github.com/vinuyakarl",
        id: 2
    },
    {
        icon: <IoMdMail size={60}/>,
        text: "karleric@ualberta.ca",
        link: "mailto:karleric@ualberta.ca",
        id: 3
    },
    {
        icon: <IoNewspaperOutline size={60}/>,
        text: "Resume",
        link: "https://drive.google.com/file/d/1do-bQyVHgNqrRb3yxRgsH2YDsq_Z556T/view?usp=sharing",
        id: 4

    }
]


  return (
    <div id="contact" className="bg-gradient-to-b from-gray-500 to-gray-900 w-full min-h-fit max-h-full pt-32 pb-10 md:px-5">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-400 border-b-4 border-gray-900 inline px-2">Contact</h1>
        <ul className="flex flex-col p-8 gap-4">
          {icons.map(icon => (
            <li key={icon.id}>
              <a target="_blank" href={icon.link} className="flex items-center w-fit gap-8 text-2xl hover:scale-105 hover:ps-2 duration-200 hover:text-white">
                {icon.icon}{icon.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Contact