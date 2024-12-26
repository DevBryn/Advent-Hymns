"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

const Header = () => {
  const current_page = usePathname();

  return (
    <header className="bg-primary-green h-14 shadow-md sticky top-0">
      <nav className="flex justify-between max-w-[90vw] sm:max-w-[80vw] m-auto h-14 items-center">
        <div>
          <Link href={"/"} className="font-medium">
            Advent Hymns
          </Link>
        </div>
        <HiBars3 className="w-6 h-6 sm:hidden cursor-pointer" />
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
      </nav>
    </header>
  );
};

export default Header;
