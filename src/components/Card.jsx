import React from "react";

export default function Card({ children }) {
  return (
    <div className="bg-primary-green p-6 rounded-xl shadow-lg cursor-pointer">
      {children}
    </div>
  );
}
