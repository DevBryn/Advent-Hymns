"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  return (
    <form action="" className="flex">
      <input
        className="w-full h-10 rounded-l-md bg-transparent border border-[#687B7B] px-4 focus:border-accent-yellow focus:outline-none focus:ring-0"
        type="text"
        placeholder="Praise the Lord"
        name="quick-search"
      />
      <button className="flex items-center justify-center rounded-r-md w-14 h-10 bg-accent-yellow hover:bg-accent-yellow/80">
        <FiSearch className="size-5" />
      </button>
    </form>
  );
}
