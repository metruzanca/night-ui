/**
 * These were directly copied from:
 * zombiefox/nightTab/src/utility/convertColor.js
 * 
 * Only changes made were typescript related and export statements.
 * 
 * I've added tests for these functions in test/utils/color.test.ts
 * If we ever need to update these functions, we can do so with confidence.
 */

import { State } from "src/Provider/types";

export type Rgb = { r: number, g: number, b: number }
export type Hex = `#${string}`
export type Hsl = { h: number, s: number, l: number }

export function rgbToHex(rgb: Rgb) {
  let integer = ((Math.round(rgb.r) & 0xFF) << 16) +
    ((Math.round(rgb.g) & 0xFF) << 8) +
    (Math.round(rgb.b) & 0xFF);

  let string = integer.toString(16);

  return '#' + '000000'.substring(string.length) + string;
}

export function rgbToHsl(rgb: Rgb) {
  let r = rgb.r / 255;
  let g = rgb.g / 255;
  let b = rgb.b / 255;
  let min = Math.min(r, g, b);
  let max = Math.max(r, g, b);
  let delta = max - min;
  let h = 0;
  let s: number;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  let l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

export function hexToRgb(hex: Hex) {
  let match = hex.toString(/*16*/).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

  if (!match) {
    return {
      r: 0,
      g: 0,
      b: 0
    };
  }

  let colorString = match[0];

  if (match[0].length === 3) {
    colorString = colorString.split('').map((char) => {
      return char + char;
    }).join('');
  }

  let integer = parseInt(colorString, 16);
  let r = (integer >> 16) & 0xFF;
  let g = (integer >> 8) & 0xFF;
  let b = integer & 0xFF;

  return {
    r: r,
    g: g,
    b: b
  };
}

export function hslToRgb(hsl: Hsl) {
  let h = hsl.h / 360;
  let s = hsl.s / 100;
  let l = hsl.l / 100;
  let t2;
  let t3;
  let val;

  if (s === 0) {
    val = l * 255;
    return {
      r: Math.round(val),
      g: Math.round(val),
      b: Math.round(val)
    };
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }

  let t1 = 2 * l - t2;

  let rgb: [number, number, number] = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);

    if (t3 < 0) {
      t3++;
    }

    if (t3 > 1) {
      t3--;
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  return {
    r: Math.round(rgb[0]),
    g: Math.round(rgb[1]),
    b: Math.round(rgb[2])
  };
}


export function generateColors(current: State, nightRoot: HTMLElement) {
  const contrastEnd = current.theme.color.contrast.end
  const contrastStart = current.theme.color.contrast.start
  const shades = (contrastEnd - contrastStart) / (current.theme.color.shades - 1);

  for (const [type, primaryHsl] of Object.entries(current.theme.color.range)) {
    for (var i = 0; i < current.theme.color.shades; i++) {
      const hsl: Hsl = {
        ...primaryHsl,
        l: Math.round((shades * i) + current.theme.color.contrast.start),
      };

      const rgb = hslToRgb(hsl);

      nightRoot.style.setProperty(`--theme-${type}-${i + 1}-r`, rgb.r.toString())
      nightRoot.style.setProperty(`--theme-${type}-${i + 1}-g`, rgb.g.toString())
      nightRoot.style.setProperty(`--theme-${type}-${i + 1}-b`, rgb.b.toString())

      nightRoot.style.setProperty(`--theme-${type}-${i + 1}-h`, hsl.h.toString());
      nightRoot.style.setProperty(`--theme-${type}-${i + 1}-s`, hsl.s.toString());
      nightRoot.style.setProperty(`--theme-${type}-${i + 1}-l`, hsl.l.toString());
    }
  }

  for (let i = 1; i <= current.theme.color.shades; i++) {
    nightRoot.style.setProperty(`--theme-primary-${i}`, `var(--theme-primary-${i}-h), calc(var(--theme-primary-${i}-s) * 1%), calc(var(--theme-primary-${i}-l) * 1%)`);
  }
}