import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
const LicenseCounter = () => {
  const [started, setStarted] = useState(() => {
    return localStorage.getItem("pageRevealed") === "true";
  });

  useEffect(() => {
    const handleStart = () => setStarted(true);
    window.addEventListener("startPricingTimer", handleStart);
    return () => window.removeEventListener("startPricingTimer", handleStart);
  }, []);

  return (
    <div className="esconder w-full max-w-lg mx-auto mt-5 md:mt-6 px-4">
      <p id="license-cta-text" className="text-sm md:text-base text-amber-400 font-semibold text-center leading-relaxed mb-2">
        You are among the first 10 people — click the button below<br />
        and claim your licence as fast as possible!
      </p>

      <div className="flex justify-center mb-2">
        <ChevronDown className="w-6 h-6 text-amber-400 animate-bounce" />
      </div>

      <a href="https://go.centerpag.com/PPU38CQ7M9M" target="_blank" rel="noopener noreferrer" className="buy-button-green text-sm md:text-lg tracking-widest">
        CLICK HERE TO GET LOTTOCASH
      </a>
      <a href="https://go.centerpag.com/PPU38CQ7M9M" target="_blank" rel="noopener noreferrer" className="block text-sm md:text-base text-blue-400 underline text-center mt-4 hover:text-blue-300 transition-colors">
        I want my lifetime licence now
      </a>
    </div>
  );
};

export default LicenseCounter;
