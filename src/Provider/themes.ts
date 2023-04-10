import { Theme } from "./types";

export const nighttab: Theme = {
  color: { range: { primary: { h: 222, s: 14 } }, contrast: { start: 17, end: 83 }, shades: 14 },
  accent: { hsl: { h: 221, s: 100, l: 50 }, rgb: { r: 0, g: 80, b: 255 }, random: { active: false, style: 'any' }, cycle: { active: false, speed: 300, step: 10 } },
  font: {
    display: { name: '', weight: 400, style: 'normal' },
    ui: { name: '', weight: 400, style: 'normal' }
  },
  background: {
    type: 'theme',
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: '', blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  opacity: { general: 100 },
  layout: { color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, blur: 0, opacity: 10 }, divider: { size: 0 } },
  header: { color: { by: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 }, opacity: 10 }, search: { opacity: 100 } },
  bookmark: { color: { by: 'theme', opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { toolbar: { opacity: 100 } },
  toolbar: { opacity: 100 },
  style: 'dark',
  radius: 25,
  shadow: 75,
  shade: { opacity: 30, blur: 0 },
  custom: { all: [], edit: false }
}

export const obsidian: Theme = {
  color: {
    range: { primary: { h: 198, s: 0 } },
    contrast: { start: 10, end: 60 },
    shades: 14
  },
  accent: {
    hsl: { h: 267, s: 78, l: 60 },
    rgb: { r: 145, g: 73, b: 233 },
    random: { active: false, style: "any" },
    cycle: { active: false, speed: 300, step: 10 }
  },
  font: {
    display: { name: '', weight: 400, style: 'normal' },
    ui: { name: '', weight: 400, style: 'normal' }
  },
  background: {
    type: "theme",
    color: { hsl: { h: 221, s: 47, l: 17 }, rgb: { r: 23, g: 36, b: 64 } },
    gradient: {
      angle: 160, start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } }, end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: {
      url: "", blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 }
    },
    video: { url: "", blur: 0, grayscale: 0, scale: 100, accent: 0, opacity: 100, vignette: { opacity: 0, start: 90, end: 70 } }
  },
  opacity: { general: 100 },
  layout: {
    color: { by: "theme", blur: 0, opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } },
    divider: { size: 0 }
  },
  header: { color: { by: "theme", opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, search: { opacity: 100 } },
  bookmark: { color: { by: "theme", opacity: 10, hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } }, item: { border: 0, opacity: 100 } },
  group: { toolbar: { opacity: 100 } },
  toolbar: { opacity: 100 },
  style: "dark",
  radius: 20,
  shadow: 100,
  shade: { opacity: 10, blur: 0 },
  custom: { all: [], edit: false }
}