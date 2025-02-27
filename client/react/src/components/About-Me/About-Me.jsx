import React from "react";

import ScrollFloat from "../UI/ScrollFloat";

export default function AboutMe() {


    return (
        <section className="flex flex-col justify-center items-center max-w-6xl">
            <div className="place-self-start text-5xl">
                <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
                >
                About Me
                </ScrollFloat>
            </div>
            
            <div className="text-[1.2em]  gap-4 flex flex-col">
                <p>
                    Hi, I'm Ilia, a second-year software development student at vocational school Varia in Vantaa. I’m passionate about web development, game programming, and 3D modeling,
                    and I love building both functional and visually appealing projects.
                </p>

                <p>
                    My main expertise lies in full-stack web development, where I work with JavaScript, React, Node.js, and Express.js.
                    I have experience handling both frontend and backend, as well as working with MySQL and MongoDB databases.
                    One of my key projects was developing a MERN stack website from scratch during my studies.
                </p>

                <p>
                    I also have experience in C++ development, particularly in game programming using the SFML library. Additionally, I am familiar with Python for various development tasks.
                </p>
                
                <p>
                Besides coding, I have been passionate about 3D modeling since 2021, working with Blender to create hard surface models and using Substance Painter for texturing.
                I also design 3D-printable parts using SolidWorks and Fusion 360.
                </p>
                <p>
                    I speak English, Finnish and Russian.
                    I am always eager to learn, take on new challenges, and refine my skills in both software development and 3D design.
                </p>

            </div>
        </section>
    )
}