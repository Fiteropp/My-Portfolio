import React from "react";

import checkers_img from "../assets/img/checkers-c++-img.png";
import mern_travel from "../assets/img/mern-travel.png"

import InfiniteMenu from "../components/UI/InfiniteMenu";

export default function Projects() {

    const projects = [
        {
            image: checkers_img,
            link: 'https://github.com/Fiteropp/SFML-Checkers',
            title: 'C++ Checkers',
            description: 'Checkers written in C++ using SFML Library '
        },
        {
            image: mern_travel,
            link: 'https://github.com/Fiteropp/MERN-Travel-Project',
            title: 'Travel Project',
            description: 'MERN-Stack'
        },
        {
            image: 'https://picsum.photos/500/500?grayscale',
            link: 'https://google.com/',
            title: 'Item 3',
            description: 'This is pretty cool, right?'
        },
        {
            image: 'https://picsum.photos/600/600?grayscale',
            link: 'https://google.com/',
            title: 'Item 4',
            description: 'This is pretty cool, right?'
        }
    ];

    return (
        <div class="bg-black h-dvh w-dvw flex justify-center font-sans font-extrabold">
            <h2 class="text-5xl absolute z-10 font- ">My Projects:</h2>
            <div class="relative h-dvh">
                <InfiniteMenu items={projects} />
            </div>
           
        </div>
    )
}