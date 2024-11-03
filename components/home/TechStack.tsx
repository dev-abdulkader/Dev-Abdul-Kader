import React from "react";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import {
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const TechStack = () => {
  const techStackIcons = [
    { icon: <FaReact size={60} color="#61DAFB" />, name: "React" },
    { icon: <SiNextdotjs size={60} color="#000000" />, name: "Next.js" },
    { icon: <FaNodeJs size={60} color="#339933" />, name: "Node.js" },
    { icon: <SiExpress size={60} color="#000000" />, name: "Express.js" },
    { icon: <SiMongodb size={60} color="#47A248" />, name: "MongoDB" },
  ];

  return (
    <section className="pt-10">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 pt-10 lg:pt-0">
        {/* Component */}
        <div className="flex lg:flex-col flex-wrap items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
          {techStackIcons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="size-10 sm:size-12 md:size-14 bg-white rounded-full flex justify-center items-center p-3">
                {tech.icon}
              </div>
              <p className="mt-2 text-md font-pilcrow-regular text-white">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
