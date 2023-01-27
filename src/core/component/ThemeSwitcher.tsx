"use client";

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { useTheme } from "next-themes";
import useHasMounted from "../../hooks/useHasMounted";
import { themes } from "../../config/theme";

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();
  if (!hasMounted || !theme) return null;

  const currentIndex = Math.abs(themes.findIndex((t) => t.name === theme));
  const currentTheme = themes[currentIndex];
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  if (nextTheme === undefined || currentTheme === undefined) {
    return <></>;
  }

  return (
    <div>
      <button
        className=" inline-flex items-center justify-center gap-2 px-4 py-2"
        onClick={() => setTheme(nextTheme.name)}
      >
        {currentTheme.emoji}
      </button>
    </div>
  );
};

export default ThemeSwitchButton;
