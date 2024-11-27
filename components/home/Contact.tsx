"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import FormTextarea from "../forms/FormTextarea";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import FormSelect from "../forms/FormSelect";
import emailjs from "@emailjs/browser";
import MotionTransitionLeft from "../motion/MotionTransitionLeft";
import MotionTransitionRight from "../motion/MotionTransitionRight";
import AnimatedWord from "../motion/AnimatedWord";

const Contact: React.FC = () => {
  const [response, setResponse] = useState("Send Message");

  const submitHandler = async (data: any) => {
    setResponse("Sending...");
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          setResponse("Message Sent");
          setTimeout(() => setResponse("Send Message"), 2000);
          console.log(result);
        },
        (error) => {
          setResponse("Sending Failed");
          setTimeout(() => setResponse("Send Message"), 2000);
          console.log(error);
        }
      );
    console.log("data is ", data);
  };
  return (
    <div className="bg-black" id="contact overflow-hidden">
      <AnimatedWord
        text="Contact Me"
        className="text-center text-slate-500 text-7xl py-5 sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bonny-regular"
      />
      <div className="flex md:flex-row flex-col justify-center items-center px-3 py-20  lg:min-h-screen">
        <div className="md:w-1/2 w-full mb-5 md:mb-0">
          <MotionTransitionLeft>
            <ContactInfo />
          </MotionTransitionLeft>
        </div>

        <main className="md:w-1/2 xl:w-[40vw] overflow-hidden 2xl:w-[30vw] w-full p-0 md:pt-10 ">
          <MotionTransitionRight>
            <div className="bg-white px-12 py-32 rounded-sm relative w-full">
              <div>
                <h2 className="text-5xl  mb-4 font-bonny-medium">
                  Get in Touch
                </h2>
                <p className="mb-6 font-pilcrow-regular">
                  Define your goals and identify areas where I can add value to
                  your business.
                </p>
              </div>

              <Form submitHandler={submitHandler}>
                <FormInput
                  name="fullName"
                  label="Full Name"
                  placeholder="Full Name"
                  required
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                />
                <FormInput
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Phone Number"
                  required
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                />

                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Email Address"
                  required
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                />
                {/* <FormSelect
              name="enquiryType"
              label="What is your enquiry about?"
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
              ]}
              required
              className="bg-[#F1F1F1] rounded-md p-3 outline-none focus:outline-none"
            /> */}
                <FormTextarea
                  name="message"
                  label="Additional Information"
                  placeholder="Your Message"
                  required
                  className="w-full  py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className={`${
                      response === "Sending..."
                        ? "bg-gray-500"
                        : response === "Message Sent"
                        ? "bg-green-600"
                        : response === "Sending Failed"
                        ? "bg-red-500"
                        : "bg-slate-800"
                    } text-white w-[150px] py-2 rounded-lg active:scale-[0.96] transition-all`}
                  >
                    {response}
                  </button>
                </div>
              </Form>
            </div>
          </MotionTransitionRight>
        </main>
      </div>
    </div>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div className="text-white">
      <h2 className=" md:text-5xl text-3xl w-3/4 mb-4 font-bonny-regular">
        I am always here to assist you and respond to your inquiries
      </h2>
      <p className="mb-8 w-3/4 font-pilcrow-regular">
        Whether you have questions, need assistance, or simply want to share
        your thoughts, I’m eager to hear from you. Feel free to connect with me
        through any of the methods below, and I will get back to you promptly. I
        look forward to hearing from you!
      </p>

      <div className="grid grid-cols-2 font-pilcrow-regular">
        <div className="mb-4">
          <h3 className="mb-2">Contact Number</h3>
          <p>+8801788838782</p>
        </div>

        <div className="mb-4">
          <h3 className="mb-2">My Location</h3>
          <p>Dhaka,Bangladesh</p>
        </div>

        <div className="mb-4">
          <h3 className="mb-2">Email</h3>
          <p>abdulemail789@gmail.com</p>
        </div>

        <div>
          <h3 className="mb-2">Social Network</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/abd.joni.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              f
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              x
            </a>
            <a
              href="https://www.linkedin.com/in/md-abdul-kader-852871202/"
              target="_blank"
              rel="noopener noreferrer"
            >
              in
            </a>
            <a
              href="https://github.com/abdulkader789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800"
            >
              g
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
