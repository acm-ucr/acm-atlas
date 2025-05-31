"use client";

import { useEffect } from "react";

const Instagram = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://w.behold.so/widget.js";
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }, 20);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mx-auto mb-12 flex w-2/3 flex-col items-center">
      <p className="mb-8 text-center text-4xl font-bold text-acm-gray-500">
        FOLLOW OUR INSTAGRAM @ACM_UCR
      </p>
      <div data-behold-id={process.env.INSTAGRAM_BEHOLD_ID} />
    </div>
  );
};

export default Instagram;
