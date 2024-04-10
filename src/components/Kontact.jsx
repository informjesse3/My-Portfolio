import React from "react";

export default function Kontact() {
  return (
    <>
      <section className="relative w-full mx-auto bg-white">
        <div id="contact" className="max-w-[1040px] m-4 md:pl-20 py-16">
          <h1 className="py-4 text-4xl font-bold text-center text-[#000]">
            Contact
          </h1>
          <form
            action="https://getform.io/f/8bdaa4bc-519d-4301-a68b-5b65e5132316"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="gird md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-gray-600">
                  Name
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300 bg-white text-gray-800"
                  type="text"
                  name="name"
                />
              </div>
              {/* <div className="flex-col w-full ">
                <label className="uppercase text-sm py-2 text-gray-600">
                  Phone
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300 bg-white text-gray-800"
                  type="text"
                  name="phone"
                />
              </div> */}
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-gray-600">
                  Email
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300 bg-white text-gray-800"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-gray-600">
                  PHONE
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300 bg-white text-gray-800"
                  type="text"
                  name="phone"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-gray-600">
                  Subject
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300 bg-white text-gray-800"
                  type="text"
                  name="subject"
                />
              </div>
            </div>

            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-gray-600">
                Message
              </label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300 bg-white text-gray-800"
                name="message"
                rows="10"
              ></textarea>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
