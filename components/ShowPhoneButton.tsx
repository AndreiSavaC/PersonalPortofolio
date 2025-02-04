"use client";

import { useState } from "react";

const ShowPhoneButton = () => {
  const [showNumber, setShowNumber] = useState(false);

  return (
    <>
      {!showNumber ? (
        <button
          onClick={() => setShowNumber(true)}
          className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded hover:border-emerald-400 hover:text-emerald-400 transition-colors duration-500"
        >
          Show Phone Number
        </button>
      ) : (
        <div className="text-xl border border-zinc-700/50 text-emerald-400 px-6 h-[50px] flex items-center justify-center animate-appear">
          +40 123 456 789
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
