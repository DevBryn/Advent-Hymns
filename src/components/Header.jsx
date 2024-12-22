"use client";
import React from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <header className="bg-primary-green h-14 shadow-md sticky top-0">
      <nav className="flex justify-between max-w-[90vw] sm:max-w-[80vw] m-auto h-14 items-center">
        <div>
          <Link href={"/"} className="text-white font-medium">
            Advent Hymns
          </Link>
        </div>
        <HiBars3 className="w-6 h-6 sm:hidden cursor-pointer" />
        <div className="hidden sm:flex">
          <ul className="flex gap-4 text-sm">
            <li
              className={`${
                selectedTab == "home" ? "tab-selected" : "tab-normal"
              }`}
            >
              <Link
                className={`${
                  selectedTab == "home"
                    ? "text-white"
                    : "text-light-gray hover:text-white transition-colors"
                }`}
                href={"/"}
                onClick={() => setSelectedTab("home")}
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                selectedTab == "player" ? "tab-selected" : "tab-normal"
              }`}
            >
              <Link
                className={`${
                  selectedTab == "player"
                    ? "text-white"
                    : "text-light-gray hover:text-white transition-colors"
                }`}
                href={"/player"}
                onClick={() => setSelectedTab("player")}
              >
                Player
              </Link>
            </li>
            <li
              className={`${
                selectedTab == "about" ? "tab-selected" : "tab-normal"
              }`}
            >
              <Link
                className={`${
                  selectedTab == "about"
                    ? "text-white"
                    : "text-light-gray hover:text-white transition-colors"
                }`}
                href={"/about"}
                onClick={() => setSelectedTab("about")}
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
