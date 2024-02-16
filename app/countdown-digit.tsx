import React from "react";
import { rozha_one } from "./fonts";

interface CountdownDigitProps {
  digit: number;
}

const CountdownDigit: React.FC<CountdownDigitProps> = ({ digit }) => {
  const digitString = digit.toString().padStart(2, "0");

  return (
    <div className="flex flex-row gap-0.5 md:gap-1.5">
      <div
        className={`${rozha_one.className} bg-black text-white w-8 h-10 md:w-14 md:h-20 flex items-center justify-center text-2xl md:text-5xl`}
      >
        {digitString[0]}
      </div>
      <div className="text-black text-2xl md:text-5xl"></div>
      <div
        className={`${rozha_one.className} bg-black text-white w-8 h-10 md:w-14 md:h-20 flex items-center justify-center text-2xl md:text-5xl`}
      >
        {digitString[1]}
      </div>
    </div>
  );
};

export default CountdownDigit;
