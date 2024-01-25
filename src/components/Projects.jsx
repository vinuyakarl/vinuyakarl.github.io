import React from 'react'
import travelNotes from "../assets/projects/travelnotes.png"
import keepItAll from "../assets/projects/keepitall.png"
import recipeSerenity from "../assets/projects/recipeserenity.png"
import Project from './Project'

function Projects() {
    const projects = [
        {
            id: 1,
            title: "TravelNotes",
            description: "TravelNotes, an Android app crafted with Java and Android Studio, streamlines travel planning with intuitive itinerary management and secure authentication. It seamlessly integrates Firebase for real-time updates, providing users with a user-friendly interface for efficient trip organization.",
            link: "https://github.com/vinuyakarl/TravelNotes",
            image: travelNotes,
            technologies: "Java, Android Studio, Firebase"
        },
        {
            id: 2,
            title: "KeepItAll",
            description: "KeepItAll, a Java-based Android app developed with Android Studio, simplifies personal item management. Users organize possessions, attach photos, and apply tags for efficient categorization. The app prioritizes reliability, featuring an intuitive interface for streamlined organization. Collaboratively developed, KeepItAll ensures user-friendly functionality within a dynamic team.",
            link: "https://github.com/CMPUT301F23T24/KeepItAll",
            image: keepItAll,
            technologies: "Java, Android Studio, Firebase, JUnit, Figma"
        },
        {
            id: 3,
            title: "RecipeSerenity",
            description: "RecipeSerenity, a visually engaging and user-friendly web app, utilizing React, CSS, and JavaScript. Integrated Spoonacular API for diverse recipe data, showcasing proficiency in third-party service integration. Empowers users to explore a vast collection of 360,000+ recipes, access ingredients, follow step-by-step instructions, and enhance overall user experience through an integrated search feature.",
            link: "https://github.com/vinuyakarl/RecipeSerenity",
            image: recipeSerenity,
            technologies: "JavaScript, React, CSS"
        },
    ]

    return (
        <div id="projects" className="bg-gradient-to-b from-gray-900 to-gray-500 w-full min-h-screen max-h-full pt-32 pb-5 md:px-5">
            <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-400 border-b-4 border-gray-900 inline px-2">Projects</h1>
                <div className="flex flex-col p-8 gap-24">
                    {projects.map(project => (
                        <Project key={project.id} project={project}/>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Projects