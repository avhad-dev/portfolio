"use client";

import { useState, useEffect } from "react";

export default function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Function to format the current time
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(`${formatter.format(new Date())} IST`);
    };

    // Set initial time
    updateTime();

    // Update time every 10 seconds to keep it fresh
    const intervalId = setInterval(updateTime, 10000);

    return () => clearInterval(intervalId);
  }, []);

  // Return a placeholder of the same size while hydrating to avoid layout shift,
  // but keep it visually hidden to avoid hydration mismatch errors.
  if (!time) {
    return <span className="opacity-0">00:00 AM IST</span>;
  }

  return <span>{time}</span>;
}
