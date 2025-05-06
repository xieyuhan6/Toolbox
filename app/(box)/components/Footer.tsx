"use client";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="footer">
      <p>Today is {time.toLocaleDateString()}</p>
      <p>Current time:{time.toLocaleTimeString()}</p>
    </div>
  );
};
