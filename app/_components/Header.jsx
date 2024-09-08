"use client";
import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative w-full flex h-[80px] items-center justify-center">
      <Navbar className="top-0 bg-brand " />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show logo after scrolling half of the screen
      if (scrollPosition > windowHeight / 2) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-full rounded-full  bg-brand mx-5    z-50",
        className
      )}
    >
      <Menu setActive={setActive} className="bg-brand flex flex-row gap-6">
        <div className="flex flex-row gap-20">
          <MenuItem setActive={setActive} active={active} item={"Home"} />
          <MenuItem setActive={setActive} active={active} item={"About"} />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
            className="justify-start text-blue-500"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
        </div>

        {/* Logo */}
        <div
          className={cn(
            "transition-opacity duration-500 ease-in-out",
            showLogo ? "opacity-100" : "opacity-0"
          )}
        >
          <Image src="/Zlogo.png" alt="Logo" className="h-12 w-auto" 
          width={50}
          height={50}/>
        </div>

        <div className="flex flex-row gap-20">
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Career">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Work">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
