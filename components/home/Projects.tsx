"use client";
import React, { useState } from "react";
import { FaReact, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiSwiper,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaEnvelope, FaNodeJs } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import Image, { StaticImageData } from "next/image";
import CustomCrossBar from "../common/CustomCrossBar";
import MotionOpacity from "../motion/MotionOpacity";
import realestate from "@/public/realestate.png";
import ecommerce from "@/public/ecommerce.png";
import mooncosmetics from "@/public/mooncosmetics.png";
import heyjabi from "@/public/heyjabi.png";
import stationary from "@/public/stationary.png";

import AnimatedWord from "../motion/AnimatedWord";

// Define TypeScript interfaces for props and data
interface Tag {
  name: string;
  icon: React.ReactNode;
}

interface ProjectItem {
  id: number;
  imgSrc: StaticImageData;
  title: string;
  description: string;
  contribution: string;
  tags: Tag[];
  visitLink: string;
  viewProjectLink: string;
  bgColor: string;
}

const tagIcons: { [key: string]: React.ReactNode } = {
  "Next.js": <SiNextdotjs color="#000000" />,
  React: <FaReact color="#61DAFB" />,
  "Tailwind CSS": <SiTailwindcss color="#38B2AC" />,
  TypeScript: <SiTypescript color="#007ACC" />,
  Swiper: <SiSwiper color="#0F4C81" />,
  "react-hook-form": <FaJs color="#F7E03C" />,
  "react-fast-marquee": <FaJs color="#F7E03C" />,
  "react-icons": <FaReact color="#61DAFB" />,
  EmailJS: <FaEnvelope color="#D44638" />,
  "Node.js": <FaNodeJs color="#339933" />,
  "Express.js": <SiExpress color="#000000" />,
  MongoDB: <SiMongodb color="#47A248" />,
};

const CustomArrow = () => {
  return (
    <button
      className="button   size-14 bg-white rounded-full flex justify-center items-center transition-all duration-300
mx-auto shadow-xl text-lg  backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full  hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden   group
"
    >
      <span className="svg items-center hidden sm:flex  -rotate-45">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50" // increased from 50 to 100
          height="40" // increased from 20 to 40
          viewBox="0 0 50 15"
          fill="none"
        >
          <path
            fill="black"
            d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
          ></path>
        </svg>
      </span>
      <style jsx>{`
        .button {
          animation: border-change 0.3s linear;
        }
        .button:hover .svg svg {
          animation: jello-vertical 0.9s both;
        }
        @keyframes jello-vertical {
          0% {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(0.75, 1.25, 1);
          }
          40% {
            transform: scale3d(1.25, 0.75, 1);
          }
          50% {
            transform: scale3d(0.85, 1.15, 1);
          }
          65% {
            transform: scale3d(1.05, 0.95, 1);
          }
          75% {
            transform: scale3d(0.95, 1.05, 1);
          }
          100% {
            transform: scale3d(1, 1, 1);
          }
        }
      `}</style>
    </button>
  );
};

const Projects = () => {
  const projectData: ProjectItem[] = [
    {
      id: 1,
      imgSrc: ecommerce,
      title: "Cloth Shop",
      description:
        "This ecommerce project was developed during my internship at Zorg IT.",
      contribution:
        "I was responsible for designing the landing pages and implementing all animations and interactive features.",
      tags: [
        { name: "Next.js", icon: tagIcons["Next.js"] },
        { name: "React", icon: tagIcons["React"] },
        { name: "Tailwind CSS", icon: tagIcons["Tailwind CSS"] },
        { name: "Framer Motion", icon: null },
        { name: "Redux", icon: tagIcons["Redux"] },
      ],
      visitLink: "https://cloth-shop-eight.vercel.app",
      viewProjectLink: "#",
      bgColor: "#D3B08E", // Light yellow background color
    },
    {
      id: 2,
      imgSrc: heyjabi,
      title: "Heyjabi Fashion",
      description: "This project was developed for a local client",
      contribution:
        "I contributed to the development of the landing page in frontend.",
      tags: [
        { name: "Next.js", icon: tagIcons["Next.js"] },
        { name: "Tailwind CSS", icon: tagIcons["Tailwind CSS"] },
        { name: "Framer Motion", icon: null },
        { name: "EmailJS", icon: tagIcons["EmailJS"] },
      ],
      visitLink: "https://heyjabi-woad.vercel.app",
      viewProjectLink: "#",
      bgColor: "#2F3542", // Light purple background color
    },
    {
      id: 3,
      imgSrc: mooncosmetics,
      title: "Moon Cosmetics",
      description: "This project was developed for a local client.",
      contribution:
        "I developed the frontend for the Moon Cosmetics website, utilizing Next.js for the framework and Tailwind CSS for styling.",
      tags: [
        { name: "Next.js", icon: tagIcons["Next.js"] },
        { name: "React", icon: tagIcons["React"] },
        { name: "Tailwind CSS", icon: tagIcons["Tailwind CSS"] },
        { name: "Framer Motion", icon: null },
        { name: "EmailJS", icon: tagIcons["EmailJS"] },
      ],
      visitLink: "https://www.mooncosmeticsbd.com/",
      viewProjectLink: "#",
      bgColor: "#FF2C2B",
    },
    {
      id: 4,
      imgSrc: realestate,
      title: "Real Estate",
      description:
        "This ecommerce project was developed during my internship at Zorg IT.",
      contribution:
        "I contributed to the development of the header, hero section, why choose us, latest projects, gallery, customer reviews, and focus area.",
      tags: [
        { name: "Next.js", icon: tagIcons["Next.js"] },
        { name: "React", icon: tagIcons["React"] },
        { name: "Tailwind CSS", icon: tagIcons["Tailwind CSS"] },
        { name: "Framer Motion", icon: null },
        { name: "EmailJS", icon: tagIcons["EmailJS"] },
      ],
      visitLink: "https://real-estate-nine-navy.vercel.app/",
      viewProjectLink: "#",
      bgColor: "#6B5BE5",
    },
    {
      id: 5,
      imgSrc: stationary,
      title: "Stationary Website",
      description: "This project was developed for a local client",
      contribution:
        "I contributed to the development of the landing page in frontend.",
      tags: [
        { name: "Next.js", icon: tagIcons["Next.js"] },
        { name: "Tailwind CSS", icon: tagIcons["Tailwind CSS"] },
        { name: "Framer Motion", icon: null },
        { name: "EmailJS", icon: tagIcons["EmailJS"] },
      ],
      visitLink: "https://stationary-frontend-two.vercel.app",
      viewProjectLink: "#",
      bgColor: "#2F3542",
    },
  ];

  return (
    <div className="dot-pattern py-10">
      <AnimatedWord
        text="Real Projects"
        className="text-center text-slate-500 text-7xl py-5 sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bonny-regular"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-4 max-w-7xl mx-auto w-full">
        {projectData.map((project) => (
          <MotionOpacity key={project.id}>
            <div
              className="relative p-4 rounded-2xl group shadow-md h-[500px] md:h-[550px] lg:h-[650px] flex flex-col gap-5 overflow-hidden"
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold text-white font-bonny-medium">
                  {project.title}
                </h2>
                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <button className="size-14 bg-white hover:text-white rounded-full flex justify-center items-center transition-colors duration-300 ease-in-out hover:bg-slate-800">
                    <GoArrowUpRight className="text-2xl relative" />
                  </button> */}
                  <CustomArrow />
                </a>
              </div>
              <p className="text-white text-md font-pilcrow-regular">
                {project.description}
              </p>

              <div className="h-full flex-grow border w-full overflow-hidden custom-scrollbar rounded-2xl cursor-pointer">
                <Image
                  src={project.imgSrc}
                  height={300}
                  width={300}
                  layout="responsive"
                  className="w-full object-cover relative"
                  alt={project.title}
                />
              </div>

              {/* Description Container */}
              <div
                className="absolute bottom-0 left-0 w-full z-10 h-[85%] md:h-1/2 bg-opacity-80 p-6 text-white flex flex-col justify-center items-center text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                style={{ backgroundColor: project.bgColor, opacity: 0.9 }}
              >
                {/* <h3 className="text-2xl font-bold mb-4">
                  {project.description}
                </h3> */}
                {/* <p className="text-lg mb-4 font-pilcrow-regular">
                  {project.contribution}
                </p> */}
                <div className="flex gap-3 flex-wrap justify-center items-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="flex items-center gap-2 px-2 py-1 bg-white text-black rounded-md shadow"
                    >
                      {tag.icon}
                      <span className="text-sm">{tag.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </MotionOpacity>
        ))}
      </div>
    </div>
  );
};

export default Projects;
