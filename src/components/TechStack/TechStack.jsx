import React from "react";

import TiltedCard from "../UI/TiltedCard";
import { Tabs } from "../UI/Tabs";

export default function TechStack() {
  const tabs = [
    {
      title: "Technologies",
      value: "technologies",
      content: (
        <div className="w-full overflow-hidden relative h-50% rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-dark-violet">
          <p className="text-3xl font-medium">Technologies:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mdd:grid-cols-5 align-center items-center place-items-center justify-center shrink gap-5 mt-9 mb-2">

            <TiltedCard
              imageSrc="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256"
              captionText="React.Js"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png"
              captionText="Node.JS"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="130px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="https://www.svgrepo.com/show/331488/mongodb.svg"
              captionText="MongoDB"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="https://seeklogo.com/images/M/mysql-logo-B4943FE6DD-seeklogo.com.png"
              captionText="MySQL"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
              captionText="TailWind Css"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

          </div>
        </div>
      ),
    },
    {
      title: "Languages",
      value: "languages",
      content: (
        <div className="w-full overflow-hidden relative h-50% rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-dark-violet">
          <p className="text-3xl font-medium">Programming Languages:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mdd:grid-cols-4 align-center items-center place-items-center justify-center shrink gap-5 mt-9 mb-2">

            <TiltedCard
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
              captionText="JavaScript"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="https://www.vikingsoftware.com/wp-content/uploads/2024/02/C-2.png"
              captionText="C++"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

              <TiltedCard
              imageSrc="https://db.cs.uni-tuebingen.de/teaching/ws2223/sql-is-a-programming-language/logo.svg"
              captionText="SQL"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="https://cdn.iconscout.com/icon/free/png-512/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256"
              captionText="Python"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

          </div>
        </div>
      ),
    },

    {
      title: "Software",
      value: "software",
      content: (
        <div className="w-full overflow-hidden relative h-50% rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-dark-violet">
          <p className="text-3xl font-medium">Software</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mdd:grid-cols-4 align-center items-center place-items-center justify-center shrink gap-5 mt-9 mb-2">

            <TiltedCard
              imageSrc="https://download.blender.org/branding/community/blender_community_badge_black.png"
              captionText="Blender"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="130px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png"
              captionText="Adobe Photoshop"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="https://helpx.adobe.com/content/dam/substance-3d/general-knowledge/ecosystem/substance-3d-icons-svg/Adobe_Substance_3D_Painter_icon.svg"
              captionText="Adobe Substance Painter"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="148px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="https://myigetit.com/wp-content/uploads/2024/12/solid-works-copy.webp"
              captionText="SolidWorks"
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="148px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />

          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start mt-40 mb-150 sm:mb-100 md:mb-10 xl:mb-5">
      <Tabs tabs={tabs} />
    </div>
  );
}

