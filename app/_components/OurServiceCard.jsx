"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebase"; 
// const services = [
//   {
//     title: "Digital Marketing",
//     imageUrl: "/ourServices/1.png",
//     url: "/services#digitalMarketing",
//     index: 1,
//   },
//   {
//     title: "Web Development",
//     imageUrl: "/ourServices/6.png",
//     url: "/services#websiteDevelopment",
//     index: 2,
//   },
//   {
//     title: "IT Solutions",
//     imageUrl: "/ourServices/7.png",
//     url: "/services#itSolutions&Services",
//     index: 3,
//   },
//   {
//     title: "Designing",
//     imageUrl: "/ourServices/5.png",
//     url: "/services#designing",
//     index: 4,
//   },
//   {
//     title: "Content Creation",
//     imageUrl: "/ourServices/2.png",
//     url: "/services#contentCreation",
//     index: 5,
//   },
//   {
//     title: "Media Production",
//     imageUrl: "/ourServices/4.png",
//     url: "/services#mediaProduction",
//     index: 6,
//   },
//   {
//     title: "Architecture",

//     imageUrl: "/ourServices/3.png",
//     url: "/services#architecture",

//     index: 7,
//   },
//   {
//     title: "influencer marketing",
//     imageUrl: "/ourServices/8.jpg",
//     url: "/services#mediaProduction",
//     index: 8,
//   },
//   // Add more service objects here
// ];

function OurServiceCard() {
  const [flipped, setFlipped] = useState([]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    // Fetch services data from Firestore
    const fetchServices = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "serviceCard"));
        const servicesData = querySnapshot.docs.map((doc) => doc.data());
        
        // Sort the services data by index field
        const sortedServices = servicesData.sort((a, b) => a.index - b.index);
        setServices(sortedServices);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };

    fetchServices();

    // Randomly select some cards to flip and zoom
    const flipIndices = new Set();
    while (flipIndices.size < Math.floor(0)) {
      flipIndices.add(Math.floor(Math.random() * services.length));
    }
    setFlipped(Array.from(flipIndices));

    // Set interval to trigger automatic flip effect
    const intervalId = setInterval(() => {
      setFlipped((prev) =>
        prev.map((index) =>
          index === Math.floor(Math.random() * services.length) ? index : index
        )
      );
    }, 5000); // Flip every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [services.length]);


  return (
    <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <div
          key={index}
          className={cn(
            "relative flex flex-col gap-4",
            flipped.includes(index) ? "perspective-1000" : ""
          )}
        >
          <Link
            href={service?.url || ""}
            className={cn(
              "group relative block justify-center overflow-hidden rounded-lg",
              flipped.includes(index) ? "flip-container" : ""
            )}
          >
            <div
              className={cn(
                "transition-transform duration-500",
                flipped.includes(index) ? "flip-inner flip-animation" : ""
              )}
            >
              <img
                alt={service.title}
                src={service.imageUrl}
                className={cn(
                  "h-full w-full object-cover transition-transform duration-500",
                  flipped.includes(index)
                    ? "zoom-effect"
                    : "group-hover:scale-105 zoom-effect group-hover:opacity-50"
                )}
              />

              {/* Explore Button */}
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <button className="border-[3px] border-white text-white py-2 px-6 rounded-lg hover:border-black hover:bg-white hover:text-brand">
                  Explore
                </button>
              </div>
            </div>
          </Link>
          <h2 className="text-center text-2xl font-medium uppercase">
            {service.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default OurServiceCard;
