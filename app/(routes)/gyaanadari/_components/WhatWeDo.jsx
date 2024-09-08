import Image from "next/image";
import React from "react";

function WhatWeDo() {
  return (
    <section className="flex flex-col items-center justify-center px- py-16 ">
      <h2 className="text-2xl font-light text-gray-600 mb-2">WHAT</h2>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">WE DO?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full bg-gray-200 p-10">
        {/* Content Creation */}
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-1/3 flex items-center justify-center">
            <Image
              src="/ourservices/gif1.gif" 
              alt="Content Creation Placeholder"
              width={250}
              height={250}
              className="object-contain"
            />
            
          </div>
          <div className="w-2/3 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Content Creation</h3>
            <p className="text-gray-600">
              Our team of skilled creators produces high-quality content tailored to your interests. From in-depth articles to engaging multimedia, we ensure that every piece of content is crafted with care and accuracy.
            </p>
          </div>
        </div>

        {/* News Coverage */}
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-1/3 flex items-center justify-center">
            <img
              src="https://via.placeholder.com/100x100"
              alt="News Coverage Placeholder"
              className="object-contain"
            />
          </div>
          <div className="w-2/3 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">News Coverage</h3>
            <p className="text-gray-600">
              Stay updated with the latest developments across various sectors. We provide timely and comprehensive news coverage, ensuring you’re always informed about what matters most.
            </p>
          </div>
        </div>

        {/* Podcasting */}
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-1/3  flex items-center justify-center">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Podcasting Placeholder"
              className="object-contain"
            />
          </div>
          <div className="w-2/3 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Podcasting</h3>
            <p className="text-gray-600">
              Tune into our diverse range of podcasts, where we explore intriguing subjects, share expert opinions, and engage in thought-provoking discussions. Our podcasts are designed to entertain and educate, providing valuable content you can listen to anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Interviews */}
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-1/3 flex items-center justify-center">
            <img
              src="https://via.placeholder.com/100x100"
              alt="Interviews Placeholder"
              className="object-contain"
            />
          </div>
          <div className="w-2/3 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interviews</h3>
            <p className="text-gray-600">
              Dive deep with exclusive interviews featuring industry experts, thought leaders, and other key figures. Our interviews provide unique insights and perspectives on current trends and topics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
