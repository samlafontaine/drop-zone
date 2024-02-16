"use client";

import React, { useState, useEffect } from "react";
import CountdownDigit from "../countdown-digit";

const targetDate =
  new Date().getTime() +
  13 * 24 * 60 * 60 * 1000 +
  8 * 60 * 60 * 1000 +
  12 * 60 * 1000 +
  5 * 1100;

const Countdown = () => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 md:gap-7 mb-10 md:mr-36 md:mb-0">
      <div className="uppercase text-black text-2xl md:text-5xl font-black tracking-[0.2em]">
        leezy boost 103
      </div>
      <div className="flex flex-row gap-12 md:gap-12">
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-row gap-3 md:gap-6">
            <div className="flex flex-row gap-3 md:gap-6">
              <div className="flex flex-col gap-2 items-center">
                <CountdownDigit digit={time.days} />
                <div className="uppercase text-black text-sm md:text-2xl font-black tracking-[0.2em]">
                  days
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 md:gap-6">
              <div className="flex flex-col gap-2 items-center">
                <CountdownDigit digit={time.hours} />
                <div className="uppercase text-black text-sm md:text-2xl font-black tracking-[0.2em]">
                  hours
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 md:gap-6">
              <div className="flex flex-col gap-2 items-center">
                <CountdownDigit digit={time.minutes} />
                <div className="uppercase text-black text-sm md:text-2xl font-black tracking-[0.2em]">
                  mins
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 md:gap-6">
              <div className="flex flex-col gap-2 items-center">
                <CountdownDigit digit={time.seconds} />
                <div className="uppercase text-black text-sm md:text-2xl font-black tracking-[0.2em]">
                  secs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-black uppercase text-lg font-normal tracking-[0.2em]">
        until drop
      </div>
    </div>
  );
};

export default Countdown;
