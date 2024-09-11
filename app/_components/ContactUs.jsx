import React from "react";

function ContactUs() {
  return (
    <div className="flex items-center justify-center pt-10 pb-10 bg-gray-300">
      <div className="grid md:grid-cols-2 gap-6 text-white rounded-lg p-8 w-full max-w-4xl bg-brand shadow-md">
        {/* Contact Details Section */}
        <div className="flex flex-col justify-start space-y-4">
          <div>
            <h2 className="text-3xl font-semibold">Connect With Us</h2>
            <p className="mt-2 text-gray-200">
              Expert Digital Solutions Tailored to Your Needs.
            </p>
          </div>
          <div>
            <p className="mt-2 text-gray-200">+91 987654321</p>
          </div>
          <div>
            <p className="mt-2 text-gray-200">contact@zager.in</p>
          </div>
          <div>
            <p className="mt-2 text-gray-200">
              CSIT Campus, Shivaji Nagar, Balod Road, Durg, Chhattisgarh, 491001
            </p>
          </div>
        </div>

        {/* Input Form Section */}
        <div className="flex flex-col justify-start space-y-4">
          <form className="flex flex-col gap-4 w-full">
            <div>
              <label className="block text-gray-200">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-200">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-200">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-200">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 text-brand font-bold bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
