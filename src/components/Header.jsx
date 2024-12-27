"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

const Header = () => {
  const current_page = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary-green h-14 shadow-md sticky top-0">
      <nav className="flex justify-between max-w-[90vw] sm:max-w-[80vw] m-auto h-14 items-center">
        <div>
          <Link href={"/"} className="font-medium">
            Advent Hymns
          </Link>
        </div>
        <div
          onClick={handleMenuClick}
          className={menuOpen ? "hidden sm:hidden" : "flex sm:hidden"}
        >
          <HiBars3 className="w-6 h-6 cursor-pointer" />
        </div>
        <div
          onClick={handleMenuClick}
          className={menuOpen ? "flex sm:hidden" : "sm:hidden hidden"}
        >
          <HiMiniXMark className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="hidden sm:flex">
          <ul className="flex gap-4 text-sm">
            <li
              className={`${
                current_page === "/" ? "tab-selected" : "tab-normal"
              }`}
            >
              <Link
                className={`${
                  current_page === "/"
                    ? "text-white"
                    : "text-light-gray hover:text-white transition-colors"
                }`}
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                current_page === "/songs" ? "tab-selected" : "tab-normal"
              }`}
            >
              <Link
                className={`${
                  current_page === "/songs"
                    ? "text-white"
                    : "text-light-gray hover:text-white transition-colors"
                }`}
                href={"/songs"}
              >
                Hymnals
              </Link>
            </li>
            <li
              className={`${
                current_page === "/player" ? "tab-selected" : "tab-normal"
              }`}
            >
              <Link
                className={`${
                  current_page === "/player"
                    ? "text-white"
                    : "text-light-gray hover:text-white transition-colors"
                }`}
                href={"/player"}
              >
                Player
              </Link>
            </li>
            <li
              className={`${
                current_page === "/about" ? "tab-selected" : "tab-normal"
              }`}
            >
              <Link
                className={`${
                  current_page === "/about"
                    ? "text-white"
                    : "text-light-gray hover:text-white transition-colors"
                }`}
                href={"/about"}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`absolute sm:hidden top-14 left-0 w-full bg-black/50 rounded-b-xl backdrop-blur-sm flex flex-col items-center gap-2 p-6 transform transition-transform ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li
            className={`list-none w-full text-center p-4 hover:bg-accent-yellow/90 rounded-md ${
              current_page === "/songs" ? "bg-accent-yellow/90" : ""
            }`}
          >
            <Link onClick={handleMenuClick} href={"/songs"}>
              Hymnals
            </Link>
          </li>
          <li
            className={`list-none w-full text-center p-4 hover:bg-accent-yellow/90 rounded-md ${
              current_page === "/player" ? "bg-accent-yellow/90" : ""
            }`}
          >
            <Link onClick={handleMenuClick} href={"/player"}>
              Player
            </Link>
          </li>
          <li
            className={`list-none w-full text-center p-4 hover:bg-accent-yellow/90 rounded-md ${
              current_page === "/about" ? "bg-accent-yellow/90" : ""
            }`}
          >
            <Link onClick={handleMenuClick} href={"/about"}>
              About
            </Link>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Header;
