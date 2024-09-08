import { Phone } from "lucide-react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-brand">
      <div className="mx-auto max-w-screen-xl  px-4 md:py-10 py-5 sm:px-6  lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-white   text-2xl font-bold ">
              <h1>Zager Digital Services</h1>
            </div>

            <p className=" text-xs pt-1 text-white">
              Expert Digital Solutions Tailored to Your Needs.
            </p>

            <div className="flex flex-col pt-6 text-sm gap-5 w-full">
              <div>
                <p className="text-md text-white flex flex-row items-center gap-3">
                  <FaPhoneAlt className="" />{" "}
                  <span className=" ">+91 987654321</span>
                </p>
              </div>
              <div>
                <p className="text-md text-white flex flex-row items-center  gap-3">
                  <MdEmail className="" />{" "}
                  <span className="">contact@zager.in</span>
                </p>
              </div>
              <div>
                <p className="text-md text-white flex flex-row gap-3">
                  <FaLocationDot className="" />{" "}
                  <span className="">
                    CSIT Campus, Shivaji Nagar , Balod Road, Durg, Chhattisgarh,
                    491001{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-wrap  justify-start md:justify-evenly pt-5 md:pt-10 text-white gap-8 grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-bold text-lg ">Services</p>

              <ul className="pt-3 space-y-2 text-sm ">
                <li>
                  <Link href="#" className=" transition hover:opacity-75">
                    {" "}
                    Digital Marketing{" "}
                  </Link>
                </li>

                <li>
                  <Link href="#" className="transition hover:opacity-75">
                    Teaching
                  </Link>
                </li>
                <li>
                  <Link href="#" className=" transition hover:opacity-75">
                    Content Creation
                  </Link>
                </li>

                <li>
                  <Link href="#" className="transition hover:opacity-75">
                    Photo/Videography
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-lg ">Quick Link</p>

              <ul className="pt-3 space-y-2 text-sm">
                <li>
                  <Link href="#" className=" transition hover:opacity-75">
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link href="#" className=" transition hover:opacity-75">
                    {" "}
                    About Us{" "}
                  </Link>
                </li>

                <li>
                  <Link href="#" className=" transition hover:opacity-75">
                    Career{" "}
                  </Link>
                </li>
                <li>
                  <Link href="#" className=" transition hover:opacity-75">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-lg ">Follow us</p>

              <ul className="pt-3 space-y-2 text-sm">
                <li>
                  <Link href="#" className=" transition hover:opacity-75">
                    {" "}
                    FaceBook{" "}
                  </Link>
                </li>

                <li>
                  <Link href="#" className=" transition hover:opacity-75">
                    {" "}
                    Instagram{" "}
                  </Link>
                </li>

                <li>
                  <Link href="#" className="transition hover:opacity-75">
                    {" "}
                    LinkedIn{" "}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:opacity-75">
                    {" "}
                    Twitter{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
