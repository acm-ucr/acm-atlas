"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface StatItemProps {
  end: number;
  label: string;
  duration: number;
  color: string;
  numberSize: string;
  labelSize: string;
}

const StatItem = ({
  end,
  label,
  duration,
  color,
  numberSize,
  labelSize,
}: StatItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      <div ref={ref} className={`${numberSize} font-bold ${color}`}>
        {isVisible ? <CountUp start={0} end={end} duration={duration} /> : 0}+
      </div>
      <div className={`${color} ${labelSize}`}>{label}</div>
    </div>
  );
};
export default StatItem;
