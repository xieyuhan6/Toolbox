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
      <p>By <a href="https://my-portfolio-pi-five-49.vercel.app/"><span className="text-3xl bg-blue-200 rounded-lg hover:bg-blue-400 transition-colors">yuhan</span></a></p>
    </div>
  );
};
