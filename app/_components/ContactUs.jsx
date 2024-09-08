import React from "react";

function ContactUs() {
  return (
    <div className="flex items-center justify-center pt-10 pb-10 bg-white bg-opacity-5">
      <div className="grid md:grid-cols-3 gap-6 text-white rounded-lg p-8 w-full max-w-3xl">
        {/* Contact Details Section */}
        <div className="col-span-2 flex flex-col justify-evenly">
          <div>
            <h2 className="text-3xl font-semibold">Connect With Us</h2>
            <p className="mt-2">
              Expert Digital Solutions Tailored to Your Needs.
            </p>
          </div>
          <div>
            <p className="mt-2">+91 987654321</p>
          </div>
          <div>
            <p className="mt-2">contact@zager.in</p>
          </div>
          <div>
            <p className="mt-2">
              CSIT Campus, Shivaji Nagar, Balod Road, Durg, Chhattisgarh,
              491001
            </p>
          </div>
        </div>

        {/* Input Form Section */}
        <div className="col-span-1 flex items-center justify-center">
          <form className="flex flex-col gap-2 w-full">
            <div className="col-span-2">
              <label className="block text-slate-200">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border bg-brand border-white rounded-md outline-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-slate-200">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 mt-2 border bg-brand border-white rounded-md outline-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-slate-200">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border bg-brand border-white rounded-md outline-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-slate-200">Message</label>
              <textarea
                className="w-full px-4 py-2 mt-2 border bg-brand border-white rounded-md outline-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="px-6 py-2 text-black bg-white rounded-md hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
