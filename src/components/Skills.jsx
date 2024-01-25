import React from 'react'
import android from "../assets/skills/android-studio.png"
import c from "../assets/skills/c.png"
import css from "../assets/skills/css.png"
import git from "../assets/skills/git.png"
import html from "../assets/skills/html.png"
import java from "../assets/skills/java.png"
import js from "../assets/skills/js.png"
import mongodb from "../assets/skills/mongodb.png"
import python from "../assets/skills/python.png"
import risc from "../assets/skills/risc-v.png"
import sql from "../assets/skills/sql.svg"


function Skills() {
    const skills = [
        {
            id: 1,
            title: "Android Studio",
            alt: "Android Studio Logo",
            image: android
        },
        {
            id: 2,
            title: "C",
            alt: "C Logo",
            image: c
        },
        {
            id: 3,
            title: "CSS",
            alt: "CSS Logo",
            image: css
        },
        {
            id: 4,
            title: "Git",
            alt: "Git Logo",
            image: git
        },
        {
            id: 5,
            title: "HTML",
            alt: "HTML Logo",
            image: html
        },
        {
            id: 6,
            title: "Java",
            alt: "Java Logo",
            image: java
        },
        {
            id: 7,
            title: "JavaScript",
            alt: "JavaScript Logo",
            image: js
        },
        {
            id: 8,
            title: "MongoDB",
            alt: "MongoDB Logo",
            image: mongodb
        },
        {
            id: 9,
            title: "Python",
            alt: "Python Logo",
            image: python
        },
        {
            id: 10,
            title: "RISC-V",
            alt: "RISC-V Logo",
            image: risc
        },
        {
            id: 11,
            title: "SQL",
            alt: "SQL Logo",
            image: sql
        }
    ]


  return (
    <div id="skills" className="bg-gradient-to-b from-gray-500 to-gray-900 w-full min-h-screen max-h-full pt-32 p-6">
        <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-400 border-b-4 border-gray-800 inline px-2">Skills</h1>
            <div className="flex gap-8 flex-wrap justify-center p-8">
                {skills.map(skill => (
                    <div key={skill.id} className="w-full md:w-72 h-48 p-4 shadow-lg shadow-black-800 border border-gray-800 rounded-md">
                        <img src={skill.image} alt="Android Studio" className="w-full h-3/4 object-contain" />
                        <p className="text-center text-gray-400 text-xl mt-4">{skill.title}</p>
                    </div>
                ))}
                
            </div>
        </div>

    </div>
  )
}

export default Skills