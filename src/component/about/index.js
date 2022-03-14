import React from "react";


function about() {
    return (
        <main>
            <div>
                <img src={require("../../../public/headshot.jpg")} alt="Profile of Adair" className="profile colored"/>
            </div>

            <div>
                <h2>Howdy, my name is Evan Carlson, Welcome to my React Portfolio!</h2>
                
                <p>My passion is firmly vested in Geographic Information Systems and cartography. I love designing maps and working with applications that make the most accurate 
                    and visually pleasing geographic figures possible. I also enjoy Web Development and hope to eventually combine it with my current GIS career. Aside from work,
                    I enjoy endurance sports like cycling and running and use them to explore my city, Minneapolis, Minnesota. I also enjoy camping, through hiking, and backpacking
                    wherever I possibly can. I hope to one day complete the Appalachian Tail.
                </p>
            </div>
        </main>
    )
}



export default about;