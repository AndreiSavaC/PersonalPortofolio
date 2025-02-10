"use client";

import { useState } from "react";

const ShowPhoneButton = () => {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <>
      {!showNumber ? (
        <button
          onClick={() => setShowNumber(true)}
          className="sm:text-lg px-4 py-3 border border-zinc-700 w-[153px] sm:w-[170px] text-zinc-300 rounded hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-500"
        >
          Phone Number
        </button>
      ) : (
        <div className="sm:text-lg border border-zinc-700/50 text-emerald-400 px-4 h-[50px] flex items-center justify-center animate-appear">
          +40 753 537 681
        </div>
      )}
      <style jsx>{`
        @keyframes appear {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-appear {
          animation: appear 0.3s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default ShowPhoneButton;
