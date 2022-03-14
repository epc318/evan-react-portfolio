import React from "react";

function project() {
    const [imgs] =([
        {
            name: "Curtain Commerce",
            description: "CLI e-commerce app",
            projectLink: "https://github.com/epc318/Curtain-Commerce-ORM-Backend",
            gitHubLink: "https://github.com/epc318/Curtain-Commerce-ORM-Backend",
            src: "Curtain-commerce.png"
        },

        {
            name: "Work Day Scheduler 24.0",
            description: "Javascript scheduling application",
            projectLink: "https://sheltered-badlands-90401.herokuapp.com/",
            gitHubLink: "https://github.com/epc318/Work-Day-Scheduler-2.0",
            src: "Scheduler.PNG"
        },

        {
            name: "Weather Dashboard X-treme",
            description: "API Forecasting Application",
            projectLink: "https://epc318.github.io/Weather-Dashboard-Xtreme/",
            gitHubLink: "https://github.com/epc318/Weather-Dashboard-Xtreme",
            src: "weather-api.PNG"
        }
    ])



    return (
        <>
            {imgs.map((image) => (
                <div>
                    <div>
                        <h2>{image.name}</h2>
                        <h3>{image.description}</h3>
                        <ul>
                            <li><a href={image.projectLink}>Project Deployment:</a></li>

                            <li><a href={image.githubLink}>Github Repository:</a></li>
                        </ul>
                    </div>
                    <img src={require(`../../assets/imgs/${image.src}`)}
                         alt={image.name}
                    />
                </div>
            ))}
        </>
    )
}


export default project;