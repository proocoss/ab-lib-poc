import { Theme } from "@emotion/react";
import { defaultTheme } from "../themes";

export const targetTheme = (theme: Theme) => {
  return Object.keys(theme).length > 0 ? theme : defaultTheme;
};

export const hexToRGB = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  let result

  if (alpha) result = `rgba(${r},${g},${b},${alpha})`;
  else result = `rgb(${r},${g},${b})`;

  return result;
};
