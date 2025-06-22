"use client";
import React, { useState } from "react";
import "./skills.css"; // Make sure to create this CSS file
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaUniversity,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiPlus } from "react-icons/hi2";
import { FaGitAlt } from "react-icons/fa6";
import AnimatedWord from "../motion/AnimatedWord";

const Skills: React.FC = () => {
  const [openServiceId, setOpenServiceId] = useState<number | null>(null);
  const handlePlusClick = (id: number) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };
  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "As a web developer, I specialize in creating responsive and dynamic websites using modern technologies like React and Next.js. My goal is to build user-friendly interfaces that enhance user experience and engagement.",
      techStack: [
        { icon: <FaReact size={30} color="#61DAFB" />, label: "React" },
        { icon: <SiNextdotjs size={30} color="white" />, label: "Next.js" },
        { icon: <FaNodeJs size={30} color="#8CC84B" />, label: "Node.js" },
        { icon: <SiMongodb size={30} color="#4DB33D" />, label: "MongoDB" },
      ],
      modalContent:
        "Projects include various responsive websites, using React and Next.js.",
    },
    {
      id: 2,
      title: "App Development",
      description:
        "In my role as an app developer, I focus on building mobile applications that provide seamless experiences across platforms. I leverage frameworks like React Native to deliver high-quality applications that meet user needs.",
      techStack: [
        {
          icon: <MdOutlinePhoneAndroid size={30} color="#3DDC84" />,
          label: "React Native",
        },
      ],
      modalContent:
        "Developed apps that are user-friendly, leveraging React Native.",
    },
    {
      id: 3,
      title: "UI/UX Design with Figma",
      description:
        "As a UI/UX designer, I utilize Figma to craft intuitive and aesthetically pleasing designs. I prioritize user research and usability testing to ensure that my designs not only look great but also offer a smooth user journey.",
      techStack: [
        { icon: <SiFigma size={30} color="#F24E1E" />, label: "Figma" }, // Added Figma icon
      ],
      modalContent:
        "Focused on user research and creating prototypes in Figma.",
    },
    {
      id: 4,
      title: "Tools",
      description:
        "In addition to my core competencies in software development, I leverage various tools that enhance my productivity and streamline my workflow. These tools are integral to my development process, allowing me to collaborate effectively.",

      techStack: [
        {
          icon: <FaGitAlt size={30} color="#F05032" />, // Git icon
          label: "Git",
        },
        {
          icon: <SiPostman size={30} color="#FF6C37" />, // Postman icon
          label: "Postman",
        },
      ],
      modalContent:
        "Involved in various projects and tech-related extracurricular activities.",
    },
  ];

  return (
    <div className=" overflow-hidden  relative z-10 dark-gradient" id="skills">
      <section className="">
        <h2 className="text-3xl text-white  md:text-7xl mb-10  text-center">
          My Skills
        </h2>
        <div className="flex justify-center items-center">
          <div className="solar-system">
            <div className="sun size-[100px]"></div>

            {/* Mercury: HTML */}
            <div className="orbit">
              <div className="planet mercury">
                <FaHtml5 size={30} color="#E34F26" />
              </div>
            </div>

            {/* Venus: CSS */}
            <div className="orbit">
              <div className="planet venus">
                <FaCss3Alt size={30} color="#1572B6" />
              </div>
            </div>

            {/* Earth: React */}
            <div className="orbit">
              <div className="planet earth">
                <FaReact size={30} color="#61DAFB" />
              </div>
            </div>

            {/* Mars: Next.js */}
            <div className="orbit">
              <div className="planet mars">
                <SiNextdotjs size={30} color="white" />
              </div>
            </div>

            {/* Jupiter: Node.js */}
            <div className="orbit">
              <div className="planet jupiter">
                <FaNodeJs size={30} color="#8CC84B" />
              </div>
            </div>

            {/* Saturn: MongoDB */}
            <div className="orbit">
              <div className="planet saturn">
                <SiMongodb size={30} color="#4DB33D" />
              </div>
            </div>

            {/* Uranus: TypeScript */}
            <div className="orbit">
              <div className="planet uranus">
                <SiTypescript size={30} color="#007ACC" />
              </div>
            </div>

            {/* Neptune: Tailwind CSS */}
            <div className="orbit">
              <div className="planet neptune">
                <SiTailwindcss size={30} color="#38B2AC" />
              </div>
            </div>

            {/* Pluto: Git */}
            <div className="orbit">
              <div className="planet pluto">
                <SiGit size={30} color="#F05032" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" pt-10 pb-20">
        <div className="grid  grid-cols-12 overflow-hidden gap-4 max-w-7xl mx-auto w-full text-white h-full px-5 lg:px-0">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`transition-colors duration-300 hover:bg-[#0f0f0e] flex flex-col gap-5 ${index === 0 || index === 3
                ? "col-span-12 sm:col-span-6 md:col-span-7"
                : "col-span-12  sm:col-span-6 md:col-span-5 "
                } bg-[#0A0A0A] border border-slate-800 rounded-md p-10 flex flex-col justify-between`}
            >
              <div className="flex justify-end">
                <div
                  className="size-12 border cursor-pointer group border-slate-700 rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-white hover:text-black"
                  onClick={() => handlePlusClick(service.id)}
                >
                  <HiPlus className="text-2xl transition-colors duration-300 group-hover:text-black text-white" />
                </div>
              </div>
              <div className="flex flex-col  gap-5">
                <h2>({service.id})</h2>
                <h2 className="font-geist uppercase text-4xl">
                  {service.title}
                </h2>
                <p className="font-geist">{service.description}</p>
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${openServiceId === service.id
                  ? "grid-rows-[1fr]  opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden pr-4">
                  {service.techStack.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {service.techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-[#0A0A0A] border border-slate-800 rounded-md inline-flex gap-5 items-center justify-between px-5 py-3"
                        >
                          {tech.icon}
                          <span className="text-md font-geist">
                            {tech.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
