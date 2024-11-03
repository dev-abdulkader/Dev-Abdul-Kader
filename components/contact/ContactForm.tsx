import Image from "next/image";
import React from "react";
import undraw from "@/public/contact/undraw_contact_us.svg";

const ContactForm = () => {
  return (
    <section className="">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 py-14">
        <div className="bg-blue-600 hidden lg:block col-span-2">
          <Image
            src={undraw}
            alt="Contact Us"
            height={300}
            width={300}
            className="w-full h-full p-20"
          />
        </div>

        <div className="bg-white w-full col-span-1 px-6 lg:px-16 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 space-grotesk-700">
              Contact Us
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700 space-grotesk-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 space-grotesk-700">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 space-grotesk-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 space-grotesk-700">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 space-grotesk-700">
                  Type of Request
                </label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none appearance-none"
                    required
                  >
                    <option value="">Select Request Type</option>
                    <option value="request_proposal">Request Proposal</option>
                    <option value="query_faq">Query FAQ</option>
                    <option value="schedule_meeting">Schedule Meeting</option>
                  </select>
                  {/* Custom Arrow Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                    fill="none"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 9l7 7 7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 space-grotesk-700">
                  Message
                </label>
                <textarea
                  placeholder="Enter Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  rows={4}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 space-grotesk-700"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 py-6">
              &copy; 2024 Owl Dots - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
