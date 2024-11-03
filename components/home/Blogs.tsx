import Image from "next/image";
import React from "react";

const Blogs = () => {
  return (
    <div id="blogs">
      {/* Container */}

      {/* Component */}
      <section className="bg-indigo-50 px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-7xl flex flex-col items-stretch md:px-10">
          {/* Title */}
          <h2 className="text-3xl  md:text-7xl mb-10 melodrama-600 text-center">
            Blogs I have Written
          </h2>
        </div>
      </section>
      {/* Content */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="flex flex-col items-center">
            {/* Content */}
            <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
              <a
                href="#"
                className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
              >
                <Image
                  width={300}
                  height={300}
                  src=""
                  alt=""
                  className="h-60 object-cover"
                />
                <div className="px-6 py-4">
                  <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                    lifestyle
                  </p>
                  <p className="mb-4 text-xl font-semibold">
                    The latest news with Flowspark
                  </p>
                  <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                    Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                    amet luctus venenatis elit ut aliquam, purus sit amet luctus
                    venenatis
                  </p>
                  <div className="flex">
                    <Image
                      width={300}
                      height={300}
                      src=""
                      alt=""
                      className="mr-4 h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h6 className="text-base font-bold">Laila Bahar</h6>
                      <div className="flex flex-col lg:flex-row">
                        <p className="text-sm text-gray-500">Sept 28, 2022</p>
                        <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                          -
                        </p>
                        <p className="text-sm text-gray-500">6 mins read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
              >
                <Image
                  width={300}
                  height={300}
                  src=""
                  alt=""
                  className="h-60 object-cover"
                />
                <div className="px-6 py-4">
                  <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                    lifestyle
                  </p>
                  <p className="mb-4 text-xl font-semibold">
                    The latest news with Flowspark
                  </p>
                  <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                    Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                    amet luctus venenatis elit ut aliquam, purus sit amet luctus
                    venenatis
                  </p>
                  <div className="flex">
                    <Image
                      width={300}
                      height={300}
                      src=""
                      alt=""
                      className="mr-4 h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h6 className="text-base font-bold">Laila Bahar</h6>
                      <div className="flex flex-col lg:flex-row">
                        <p className="text-sm text-gray-500">Sept 28, 2022</p>
                        <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                          -
                        </p>
                        <p className="text-sm text-gray-500">6 mins read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
              >
                <Image
                  width={300}
                  height={300}
                  src=""
                  alt=""
                  className="h-60 object-cover"
                />
                <div className="px-6 py-4">
                  <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                    lifestyle
                  </p>
                  <p className="mb-4 text-xl font-semibold">
                    The latest news with Flowspark
                  </p>
                  <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8">
                    Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                    amet luctus venenatis elit ut aliquam, purus sit amet luctus
                    venenatis
                  </p>
                  <div className="flex">
                    <Image
                      width={300}
                      height={300}
                      src=""
                      alt=""
                      className="mr-4 h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h6 className="text-base font-bold">Laila Bahar</h6>
                      <div className="flex flex-col lg:flex-row">
                        <p className="text-sm text-gray-500">Sept 28, 2022</p>
                        <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                          -
                        </p>
                        <p className="text-sm text-gray-500">6 mins read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Button */}
            <a
              href="#"
              className="rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
            >
              View More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
