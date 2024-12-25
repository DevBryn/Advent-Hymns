import React from "react";
import Link from "next/link";

export default function Card({ children, link }) {
  return (
    <Link href={link}>
      <div className="bg-primary-green p-6 rounded-xl shadow-lg cursor-pointer hover:bg-primary-green/80 transition-colors">
        {children}
      </div>
    </Link>
  );
}
