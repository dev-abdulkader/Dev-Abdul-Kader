

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
        <h2 className="text-3xl text-white  md:text-7xl mb-10  text-center">
          About Me
        </h2>
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-xl lg:mb-24 font-geist">
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
            <h3 className="text-2xl font-geist">
              Hello, I&apos;m Md. Abdul Kader
            </h3>
            <h2 className="text-3xl md:text-6xl font-geist">
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
                    <span className="text-5xl font-geist">
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
                          className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && "!rotate-180"
                            }`}
                        />
                        <rect
                          y="5"
                          width="12"
                          height="2"
                          rx="1"
                          className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && "!rotate-180"
                            }`}
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${isOpen === idx
                      ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden pr-4 text-sm md:text-lg font-geist">
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
