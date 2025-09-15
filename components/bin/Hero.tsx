"use client";
import React from "react";
import undraw from "../../public/hero/undraw_profile.svg";
import { TypeAnimation } from "react-type-animation";

import Image from "next/image";
import { TextEffect } from "../core/text-effect";
import MotionScaleWrapper from "../motion/MotionScaleWrapper";
import AnimatedCircleText from "../common/AnimatedCircleText";
import TechStack from "./TechStack";
import { heroContent } from "@/data";
import profileImage from "@/public/profile-image.jpeg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="p-5  relative w-full min-h-screen overflow-hidden bg-[#c5fb45]">
      <div className="inverted-curve  relative bg-black h-10 w-2/3 ml-auto">
        <div className=" z-10 absolute hidden md:flex gap-5 left-5 top-2">
          <a href="#contact">
            <button className="cursor-pointer flex items-center  px-10 hover:bg-lime-900 py-1  border-lime-600 border active:border active:border-lime-400 rounded-md duration-100 ">
              <span className="text-xl font-geist text-lime-400 font-bold pr-1 ">
                Hire Me
              </span>
            </button>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=13jv0QDFkPrd8WJkxQ2VVKVQlEitc2nKt"
            download="Md.Abdul-Kader-MERN-Stack-Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center px-10 py-1 hover:bg-lime-900 border-lime-600 border active:border active:border-lime-400 rounded-md duration-100"
          >
            <span className="text-xl font-geist text-lime-400 font-bold pr-1">
              Download CV
            </span>
          </a>


        </div>
      </div>

      <header
        id="home"
        className="relative lg:pb-20   background-gradient-2  rounded-l-2xl rounded-br-2xl "
      >
        {/* Hero top */}
        <div className="py-8">
          {/* Container */}
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20  rounded-xl">
            {/* Title */}
            <div className="mb-6 max-w-4xl md:text-6xl">
              <div className="flex gap-5 py-2">
                <h1 className="text-3xl lg:leading-[4rem] lg:text-[5rem] text-white">
                  <span className="font-geist ">MD ABDUL KADER</span>{" "}
                </h1>
                <Image
                  src={profileImage}
                  width={300}
                  height={300}
                  alt=""
                  className="relative size-20 rounded-full object-cover "
                />
              </div>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "Computer Science Background",
                  1500,
                  "Worked with 3 Companies",
                  1500,
                  "Contributed to 15+ Projects",
                  1500,

                ]}
                wrapper="h1"
                speed={50}
                className="text-3xl font-geist lg:text-[4rem] lg:py-2 text-white sm:text-white cabinet-500 lg:leading-[4rem]"
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
        {/* Hero bottom */}
        <section className="">
          <div className="mx-auto max-w-7xl px-5  md:px-10  relative">
            {/* Component */}
            <div className="relative flex max-w-7xl flex-col gap-4 lg:flex-row lg:justify-end ">
              <div className="max-w-xl lg:mr-[550px] lg:max-w-sm">
                <TextEffect
                  per="word"
                  as="p"
                  preset="slide"
                  className="text-sm lg:text-md text-gray-300 font-geist"
                >
                  {heroContent[0].content[0]}
                </TextEffect>
                <motion.div
                  initial={{ opacity: 0, y: 50 }} // Start invisible and below the screen
                  animate={{ opacity: 1, y: 0 }} // End fully visible and in its final position
                  transition={{ delay: 3, duration: 0.7 }} // Delay of 5 seconds and smooth transition
                  className="flex space-x-4 justify-end w-full pb-10 pt-1"
                >
                  <div className="flex flex-col  text-white">
                    <a
                      href="https://www.facebook.com/abd.joni.9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm lg:text-md text-gray-300 font-geist"
                    >
                      Facebook &#8599;
                    </a>
                    <a
                      href="https://github.com/dev-abdulkader"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm lg:text-md text-gray-300 font-geist"
                    >
                      Github &#8599;
                    </a>
                    <a
                      href="https://www.linkedin.com/in/md-abdul-kader-852871202/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm lg:text-md text-gray-300 font-geist"
                    >
                      LinkedIn &#8599;
                    </a>
                    <a
                      href="https://wa.me/8801788838782"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm lg:text-md text-gray-300 font-geist"
                    >
                      Whatsapp &#8599;
                    </a>
                  </div>
                </motion.div>
              </div>

              <MotionScaleWrapper>
                <Image
                  src={undraw}
                  width={300}
                  height={300}
                  alt=""
                  className="relative -bottom-10 right-0 mt-12 w-[480px] object-contain lg:absolute lg:mt-0 lg:h-[480px] "
                />
              </MotionScaleWrapper>
            </div>
            <div className="absolute top-32 left-20 lg:top-auto  lg:bottom-20 lg:left-16">
              <AnimatedCircleText />
            </div>
          </div>
        </section>

        <TechStack />
      </header>
    </div>
  );
};

export default Hero;
