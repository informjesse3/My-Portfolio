import React from "react";
import game8 from "../../public/logo2.png";

export default function Login() {
  return (
    <div className="min-h-screen py-40 bg-white">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex-col items-center justify-center p-12 bg-no-repeat bg-center">
            <img
              className=" w-full object-cover object-left scale-x-[-1]"
              src={game8}
              alt="/"
            />
            <div>
              <h1 className="text-gray-500 text-3xl mb-3">Welcome</h1>
              <p class="text-gray-500">
                Welcome! Start your adventure by signing up.{" "}
                {/* <a href="#" class="text-[#EE9B00] font-semibold">
                  Learn more
                </a> */}
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/2 py-16 px-12">
            <h2 class="text-3xl mb-4 text-gray-500">Sign Up</h2>
            <p class="mb-4 text-gray-500">
              Create your account. It’s free and only takes a minute
            </p>
            <form action="#">
              <div class="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  class="border border-gray-400 py-1 px-2 text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  class="border border-gray-400 py-1 px-2 text-gray-600"
                />
              </div>
              <div class="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  class="border border-gray-400 py-1 px-2 w-full text-gray-600"
                />
              </div>
              <div class="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  class="border border-gray-400 py-1 px-2 w-full text-gray-600"
                />
              </div>
              <div class="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="border border-gray-400 py-1 px-2 w-full text-gray-600"
                />
              </div>
              <div class="flex mt-5 gap-2">
                <input
                  type="checkbox"
                  class="  text-gray-600 "
                />
                <span className="text-gray-600">
                  I accept the{" "}
                  <a href="#" class="text-[#915eff] font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" class="text-[#915eff] font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div class="mt-5">
                <button class="w-full bg-[#915eff] py-3 text-center text-gray-100">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
