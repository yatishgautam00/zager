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
import { TfiMenu } from "react-icons/tfi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { TfiAngleDown } from "react-icons/tfi";
import Link from "next/link";
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
        "fixed top-10 inset-x-0 max-w-full rounded-full  bg-brand md:mx-5  z-50",
        className
      )}
    >
      <Menu
        setActive={setActive}
        className="bg-brand flex flex-row lg:gap-6 justify-between  "
      >
        <div className=" flex-row lg:gap-20 gap-2 md:gap-10 hidden md:flex">
          <Link href={"/"}>
            <MenuItem setActive={setActive} item={"Home"} />
          </Link>
          <Link href={"/about"}>
          <MenuItem setActive={setActive} item={"About"}  />
          </Link>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
            className="justify-start text-blue-500"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/services">Web Development</HoveredLink>
              <HoveredLink href="/services">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/services">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/services">Branding</HoveredLink>
            </div>
          </MenuItem>
        </div>

        {/* Logo */}
        <div
          className={cn(
            "transition-opacity duration-500 ease-in-out ",
            showLogo ? "opacity-100" : "md:opacity-0 opacity-100"
          )}
        >
          <Image
            src="/Zlogo.png"
            alt="Logo"
            className="h-12 w-auto"
            width={50}
            height={50}
          />
        </div>

        <div className="md:flex hidden flex-row lg:gap-20 gap-2 md:gap-10">
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/contact">Web Development</HoveredLink>
              <HoveredLink href="/contact">
                Interface Design
              </HoveredLink>
              
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Career">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/career">Career</HoveredLink>
              
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Work">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/gyaanadari">GYAANADRI</HoveredLink>
              <HoveredLink href="/jk-works">JK WORKS</HoveredLink>
              <HoveredLink href="/ira">Ira Media & Productions</HoveredLink>
              
            </div>
          </MenuItem>
        </div>

        <div className="md:hidden  ">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex p-4 py-2 bg-white  rounded-md bg-opacity-5 justify-center items-center cursor-pointer">
                <TfiMenu className="text-2xl " />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-brand">
              <SheetHeader>
                <SheetTitle className="text-white">
                  Zager Digital Services
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <MenuItem setActive={setActive} item={"Home"} />
                <MenuItem setActive={setActive} item={"About"} />
                <DropdownMenuComponent
                  title="Services"
                  links={[
                    { href: "/web-dev", label: "Web Development" },
                    { href: "/interface-design", label: "Interface Design" },
                    { href: "/seo", label: "SEO" },
                    { href: "/branding", label: "Branding" },
                  ]}
                />
                <MenuItem setActive={setActive} item="Contact" />
                <MenuItem setActive={setActive} item="Career" />
                <MenuItem setActive={setActive} item="Work" />
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Close Menu</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Menu>
    </div>
  );
}

function DropdownMenuComponent({ title, links }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-all duration-300">
          {title}
          <TfiAngleDown />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-brand text-white">
        <DropdownMenuLabel></DropdownMenuLabel>
        {links.map((link) => (
          <DropdownMenuItem asChild key={link.href}>
            <a href={link.href} className="w-full px-2 py-1 ">
              {link.label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
