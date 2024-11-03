// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { BsDashLg, BsPlusLg } from "react-icons/bs";
// import certificate from "@/public/certificate/certificate.png";
// import { motion } from "framer-motion";

// // TypeScript type definition for the `isOpen` state
// type AccordionState = number | null;

// export default function About() {
//   // Define the state type as `AccordionState`
//   const [isOpen, setIsOpen] = useState<AccordionState>(null);

//   // Type the `toggle` function with `number` as the index
//   const toggle = (idx: number) => {
//     setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
//   };

//   return (
//     <section className="p-5 relative dark-gradient" id="about">
//       <div className="w-full overflow-hidden rounded-lg dark:bg-zinc-800">
//         {/* Accordion Item 1 */}
//         <div className="border-gray-500/50 bg-[#E0E0E0] p-5">
//           <button
//             onClick={() => toggle(0)}
//             className="flex w-full items-center justify-between font-medium outline-none"
//           >
//             <span className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bonny-regular">
//               About
//             </span>
//             <motion.span
//               className="rounded-full p-2"
//               initial={{ scale: 1 }}
//               animate={{ rotate: isOpen === 0 ? 180 : 0, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             >
//               {isOpen === 0 ? (
//                 <BsDashLg className="text-[3rem] sm:text-[6rem] md:text-[8rem]" />
//               ) : (
//                 <BsPlusLg className="text-[3rem] sm:text-[6rem] md:text-[8rem]" />
//               )}
//             </motion.span>
//           </button>
//           <div
//             className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
//               isOpen === 0
//                 ? "grid-rows-[1fr] pb-3 pt-3 opacity-100"
//                 : "grid-rows-[0fr] opacity-0"
//             }`}
//           >
//             <div className="overflow-hidden font-pilcrow-regular text-base sm:text-xl md:text-2xl pr-4">
//               In 2019, I came to Dhaka to pursue my graduation and got admitted
//               to Primeasia University for a B.Sc. in Computer Science and
//               Engineering (CSE). It was during my time at the university that I
//               developed a passion for programming. I learned all the basic
//               concepts and technologies, which laid the foundation for my
//               journey into the world of software development. My web development
//               journey began when I enrolled in a Full Stack Web Development
//               course at Programming Hero. The course provided a deep dive into
//               MERN stack technologies, which include MongoDB, Express.js, React,
//               and Node.js. From there, I started exploring and building projects
//               using these technologies, gaining hands-on experience in creating
//               dynamic and responsive web applications. This journey has been
//               instrumental in shaping my skills as a full-stack developer, with
//               a particular focus on the MERN stack. As I continued to hone my
//               skills, I became more passionate about web development, constantly
//               exploring new tools and frameworks to stay updated with the latest
//               industry trends.
//             </div>
//           </div>
//         </div>

//         {/* Accordion Item 2 */}
//         <div className="border-gray-500/50 p-5 bg-[rgb(144,209,154)]">
//           <button
//             onClick={() => toggle(1)}
//             className="flex w-full items-center justify-between font-medium outline-none"
//           >
//             <span className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bonny-regular">
//               Experience
//             </span>
//             <motion.span
//               className="rounded-full p-2"
//               initial={{ scale: 1 }}
//               animate={{ rotate: isOpen === 1 ? 180 : 0, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             >
//               {isOpen === 1 ? (
//                 <BsDashLg className="text-[3rem] sm:text-[6rem] md:text-[8rem]" />
//               ) : (
//                 <BsPlusLg className="text-[3rem] sm:text-[6rem] md:text-[8rem]" />
//               )}
//             </motion.span>
//           </button>
//           <div
//             className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
//               isOpen === 1
//                 ? "grid-rows-[1fr] pb-3 pt-3 opacity-100"
//                 : "grid-rows-[0fr] opacity-0"
//             }`}
//           >
//             <div className="overflow-hidden gap-10 grid grid-cols-1 md:grid-cols-2  font-pilcrow-regular text-base sm:text-xl md:text-2xl pr-4">
//               {/* Experience 1 */}
//               <div className="bg-white shadow-md rounded-lg p-4 ">
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//                   Software Engineer Intern - MERN Stack
//                 </h3>
//                 <p className="text-gray-600">ZORGT IT GROUP</p>
//                 <p className="text-gray-500">July 15, 2024 - Present</p>
//                 <p className="text-gray-700 mt-2">
//                   Currently working as a Software Engineer Intern focusing on
//                   MERN stack technologies. Involved in developing and
//                   maintaining full-stack web applications, collaborating with a
//                   team to deliver high-quality solutions.
//                 </p>
//               </div>

//               {/* Experience 2 */}
//               <div className="bg-white shadow-md rounded-lg p-4 ">
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//                   Complete Web Development Course
//                 </h3>
//                 <p className="text-gray-600">Programming Hero</p>
//                 <p className="text-gray-500">Completed: 2021</p>
//                 <p className="text-gray-700 mt-2">
//                   Ranked in the top 5% of the class. The course covered
//                   comprehensive training in HTML, CSS, JavaScript, React,
//                   Node.js, and MongoDB, providing a solid foundation in
//                   full-stack web development.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Accordion Item 3 */}
//         <div className="border-gray-500/50 p-5 bg-[#5CB0DE]">
//           <button
//             onClick={() => toggle(2)}
//             className="flex w-full items-center justify-between font-medium outline-none"
//           >
//             <span className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bonny-regular">
//               Certification
//             </span>
//             <motion.span
//               className="rounded-full p-2"
//               initial={{ scale: 1 }}
//               animate={{ rotate: isOpen === 2 ? 180 : 0, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             >
//               {isOpen === 2 ? (
//                 <BsDashLg className="text-[3rem] sm:text-[6rem] md:text-[8rem]" />
//               ) : (
//                 <BsPlusLg className="text-[3rem] sm:text-[6rem] md:text-[8rem]" />
//               )}
//             </motion.span>
//           </button>
//           <div
//             className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
//               isOpen === 2
//                 ? "grid-rows-[1fr] pb-3 pt-3 opacity-100"
//                 : "grid-rows-[0fr] opacity-0"
//             }`}
//           >
//             <div className="overflow-hidden pr-4">
//               <div
//                 id="certification"
//                 className="rounded-2xl overflow-hidden  relative w-full "
//               >
//                 <Image
//                   src={certificate}
//                   alt="Certificate"
//                   objectFit="contain" // see - https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
//                   objectPosition="left" // see -
//                   className="rounded-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimatedWord from "../motion/AnimatedWord";

// Define an interface for the accordion data
interface AccordionItem {
  title: string;
  description: string;
}

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null); // State to manage which accordion item is open
  const dataArr: AccordionItem[] = [
    // Array of accordion items
    {
      title: "About Me",
      description:
        "In 2019, I moved to Dhaka and joined Primeasia University for a B.Sc. in CSE. During university, I developed a passion for programming, learning fundamental concepts that kickstarted my journey into software development.",
    },
    {
      title: "My Journey",
      description:
        "My web development journey began with a Full Stack Web Development course at Programming Hero, focusing on the MERN stack. I gained hands-on experience building dynamic applications, shaping my skills as a full-stack developer.",
    },
  ];

  const toggle = (idx: number) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx)); // Toggle the open state
  };
  return (
    <section className="bg-black text-white ">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <AnimatedWord
          text="Know About Me"
          className="text-center text-slate-500 text-7xl py-5 sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bonny-regular"
        />
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-xl lg:mb-24 font-pilcrow-regular">
          I&apos;m a dedicated software developer with a strong background in
          full-stack web development. My journey started in 2019, and since
          then, I have been passionate about creating meaningful digital
          experiences. I constantly strive to learn new technologies and
          contribute to innovative projects.
        </p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:h-[650px]">
          <div className="relative h-[500px] lg:h-auto">
            <div className="h-12 w-40 bg-black absolute top-0 left-0 rounded-br-[30px]  z-10">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11 absolute -right-10 -top-[2px]"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#000000"
                ></path>
              </svg>
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11 absolute left-0 top-10"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
            <Image
              src="/profile-pic.png"
              alt=""
              fill
              quality={80}
              objectFit="cover"
              className="inline-block h-full w-full rounded-2xl object-cover"
            />

            <div className="h-12 w-60 bg-black absolute rounded-tl-full bottom-0 right-0  z-10">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11 absolute right-0 -top-10 rotate-180 "
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#000000"
                ></path>
              </svg>
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-11 h-11 absolute -left-10 -bottom-5 rotate-180"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="#000000"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black px-10 ">
            <h3 className="text-2xl font-bonny-regular">
              Hello, I&apos;m Md. Abdul Kader
            </h3>
            <h2 className="text-3xl md:text-6xl font-pilcrow-regular">
              Passionate software developer.
            </h2>

            <div className="w-full max-w-[500px] rounded-lg ">
              {dataArr.map((PerAccordion, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-500/50 py-5 last-of-type:border-b-0 "
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="flex h-full w-full items-center justify-between  text-white outline-none"
                  >
                    <span className="text-5xl font-bonny-regular">
                      {PerAccordion.title}
                    </span>
                    <span className="rounded-full p-2">
                      <svg
                        className="ml-8 size-3 shrink-0 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="5"
                          width="12"
                          height="2"
                          rx="1"
                          className={`origin-center transform transition duration-200 ease-out ${
                            isOpen === idx && "!rotate-180"
                          }`}
                        />
                        <rect
                          y="5"
                          width="12"
                          height="2"
                          rx="1"
                          className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                            isOpen === idx && "!rotate-180"
                          }`}
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${
                      isOpen === idx
                        ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden pr-4 text-sm md:text-lg font-pilcrow-regular">
                      {PerAccordion.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
