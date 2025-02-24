import React from "react";

import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";

import Hero from "../components/Hero/Hero";
import AboutMe from "../components/About-Me/About-Me";
import TechStack from "../components/TechStack/TechStack";


export default function Homepage() {

    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
        { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
        { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
        { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
        ];
    

    return(
        <div className="flex flex-col max-w-7xl mx-auto space-y-8 md:py-36 pb-14 m-auto">
           
            <Hero />
            <AboutMe />
            <TechStack />
           
        </div>
    )
}