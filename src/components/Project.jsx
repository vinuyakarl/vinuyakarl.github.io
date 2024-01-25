import React from 'react'
import { FaGithub } from "react-icons/fa"


function Project({project}) {

    const alternateProjects = () => {
        if(project.id % 2) {
            return (
                <><div className="flex-1 flex justify-center items-center ">
                    <img src={project.image} className="object-contain w-auto h-auto max-h-full max-w-full border-4 border-black rounded-xl"/>
                </div>

                <div className="flex-1 flex flex-col justify-center md:p-16 md:text-end text-xl">
                    <div className="flex-1 flex flex-col justify-center gap-2">
                        <p className="text-4xl text-gray-400 font-bold">{project.title}</p>
                        <p>{project.description}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:items-end items-center pt-4">
                        <a href={project.link} target='_blank' className="w-fit flex flex-3 text-gray-400 hover:scale-125 hover:text-white md:hover:me-4 duration-200 justify-center md:justify-end align-middle gap-2">
                            <FaGithub size={30}/>
                            Source Code
                        </a>
                        <p className="font-bold"><span className="text-gray-400">Technologies Used: </span> {project.technologies}</p>
                    </div>
                </div></>
            )
        }
        else {
            return (
                <><div className="flex-1 flex flex-col justify-center md:p-16 md:text-start text-xl">
                        <div className="flex-1 flex flex-col justify-center gap-2">
                            <p className="text-4xl text-gray-400 font-bold">{project.title}</p>
                            <p>{project.description}</p>
                        </div>
                    <div className="flex flex-col gap-2 md:items-start items-center pt-4">
                        <a href={project.link} target='_blank' className="w-fit flex flex-3 text-gray-400 hover:scale-125 hover:text-white md:hover:me-4 duration-200 justify-center md:justify-end align-middle gap-2">
                            <FaGithub size={30}/>
                            Source Code
                        </a>
                        <p className="font-bold"><span className="text-gray-400">Technologies Used: </span> {project.technologies}</p>
                    </div>

                </div>

                <div className="flex-1 flex justify-center items-center">
                    <img src={project.image} className="object-contain w-auto h-auto max-h-full max-w-full border-4 border-black rounded-xl" />
                </div></>
            )
        }
    }


    return (
        <div className="w-full h-auto md:h-[36em] flex-col md:flex-row p-4 flex gap-4 border-4 border-gray-800 rounded-md shadow-2xl shadow-black">
            {alternateProjects()}
        </div>
    )
}

export default Project