import React from "react";

import SplitText from "../UI/SplitText";
import BlurText from "../UI/BlurText";

import { Polygon1, Polygon2 } from '../Polygons/Polygons';

export default function Hero() {

    return (
        <div className="w-[100%]">

            <div className="my-35">
                <Polygon1     />
                <div>
                    <SplitText
                        text="Hello I am Ilia, I am a"
                        className="text-2xl font-semibold text-center text-gray-400"
                        delay={50}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                    />

                    <BlurText
                        text="Software Developer"
                        delay={50}
                        animateBy="words"
                        direction="bottom"
                        className="text-6xl font-medium"

                    />
                </div>

                <div className="flex justify-start ">

                    <Polygon2     />
                </div>

            </div>
        </div>

    )

    
  }