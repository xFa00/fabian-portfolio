"use client";

import { useEffect, useState } from "react";

const fullName = "Fabián Chiran";

export default function TypewriterName() {
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = window.setInterval(() => {
      currentIndex += 1;
      setText(fullName.slice(0, currentIndex));

      if (currentIndex >= fullName.length) {
        window.clearInterval(interval);
      }
    }, 115);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <span aria-hidden="true">{text}</span>

      <span
        aria-hidden="true"
        className="terminal-cursor ml-2 inline-block h-[0.85em] w-[2px] bg-green-400 align-[-0.08em]"
      />

      <span className="sr-only">{fullName}</span>
    </>
  );
}