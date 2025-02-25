import React from "react";

import LiquidChrome from "../UI/LiquidChrome";

export default function Hero() {

    return (
        <div>
            <div className="absolute w-[100%] max-w-7xl h-[500px] -z-20 top-10 bg-gradient-to-r from-gray-900 to-transparent">
                <LiquidChrome
                    baseColor={[0.11, 0.1, 0.15]}
                    speed={0.1}
                    amplitude={0.6}
                    interactive={false}
                />
            </div>

            <div className="my-20 mx-10">

                <h4 className="text-gray-400">Hello I am Ilia, I am a</h4>
                <div className="flex flex-row">
                    <h1 className="text-[#5547a1] text-6xl flex-1/3 font-medium">
                        Software Developer
                    </h1>
                    <p className="flex-2/3 text-2xl">
                        Bringing ideas to life with innovative frontend development, crafting smooth and engaging digital experiences.
                    </p>
                </div>

            </div>
        </div>

    )
}