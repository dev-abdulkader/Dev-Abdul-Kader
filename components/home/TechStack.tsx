// import React from "react";
// import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
// import {
//   SiCplusplus,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiExpress,
//   SiGraphql,
//   SiMongodb,
//   SiPostgresql,
//   SiMysql,
// } from "react-icons/si";

// const TechStack = () => {
//   const techStackIcons = [
//     { icon: <FaReact size={60} color="#61DAFB" />, name: "React" },
//     { icon: <SiNextdotjs size={60} color="#000000" />, name: "Next.js" },
//     { icon: <FaNodeJs size={60} color="#339933" />, name: "Node.js" },
//     { icon: <SiExpress size={60} color="#000000" />, name: "Express.js" },
//     { icon: <SiMongodb size={60} color="#47A248" />, name: "MongoDB" },
//   ];

//   return (
//     <section className="pt-10">
//       {/* Container */}
//       <div className="mx-auto w-full max-w-7xl px-5 md:px-10 pt-10 lg:pt-0">
//         {/* Component */}
//         <div className="flex lg:flex-col flex-wrap items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
//           {techStackIcons.map((tech, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center"
//             >
//               <div className="size-10 sm:size-12 md:size-14 bg-white rounded-full flex justify-center items-center p-3">
//                 {tech.icon}
//               </div>
//               <p className="mt-2 text-md font-geist text-white">
//                 {tech.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;


"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaAngular,
  FaGithub,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiRedis,
  SiSocketdotio,
} from "react-icons/si";

const techStackIcons = [
  { icon: <FaJsSquare size={50} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaReact size={50} color="#61DAFB" />, name: "React" },
  { icon: <SiNextdotjs size={50} color="#000000" />, name: "Next.js" },
  { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: "TailwindCSS" },
  { icon: <SiRedux size={50} color="#764ABC" />, name: "Redux" },
  { icon: <FaAngular size={50} color="#DD0031" />, name: "Angular" },
  { icon: <FaReact size={50} color="#61DAFB" />, name: "React Native" },
  { icon: <FaNodeJs size={50} color="#339933" />, name: "Node.js" },
  { icon: <SiExpress size={50} color="#000000" />, name: "Express.js" },
  { icon: <SiNestjs size={50} color="#E0234E" />, name: "NestJS" },
  { icon: <FaPython size={50} color="#3776AB" />, name: "Python" },
  { icon: <SiDjango size={50} color="#092E20" />, name: "Django" },
  { icon: <SiMongodb size={50} color="#47A248" />, name: "MongoDB" },
  { icon: <SiMysql size={50} color="#00758F" />, name: "MySQL" },
  { icon: <SiGraphql size={50} color="#E10098" />, name: "GraphQL" },
  { icon: <SiRedis size={50} color="#DC382D" />, name: "Redis" },
  { icon: <SiSocketdotio size={50} color="#010101" />, name: "Socket.IO" },
  { icon: <FaDocker size={50} color="#2496ED" />, name: "Docker" },
  { icon: <FaGithub size={50} color="#181717" />, name: "GitHub Actions" },
];

const TechStack = () => {
  // const firstHalf = techStackIcons.slice(0, techStackIcons.length / 2);
  // const secondHalf = techStackIcons.slice(techStackIcons.length / 2);
  return (
    <section className="py-10  relative overflow-hidden">
      {/* Gradient shadows */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#0e0e0e] to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#0e0e0e] to-transparent z-10" />

      {/* Top Row */}
      <Marquee speed={100} gradient={false} className="mb-6">
        {techStackIcons.map((tech, index) => (
          <div
            key={`row1-${index}`}
            className="flex flex-col items-center justify-center mx-20"
          >
            <div className="bg-white rounded-full p-3 shadow-lg">
              {tech.icon}
            </div>
            <p className="mt-2 text-sm text-white">{tech.name}</p>
          </div>
        ))}
      </Marquee>

      {/* Bottom Row (reverse direction) */}
      {/* <Marquee speed={50} direction="right" gradient={false}>
        {secondHalf.map((tech, index) => (
          <div
            key={`row2-${index}`}
            className="flex flex-col items-center justify-center mx-20"
          >
            <div className="bg-white rounded-full p-3 shadow-lg">
              {tech.icon}
            </div>
            <p className="mt-2 text-sm text-white">{tech.name}</p>
          </div>
        ))}
      </Marquee> */}
    </section>
  );
};

export default TechStack;
