export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type State = {
  theme: Theme
}

export interface Theme {
  color: Color;
  accent: Accent;
  font: Font;
  background: Background;
  opacity: Opacity;
  layout: Layout;
  header: Header;
  bookmark: Bookmark;
  group: Group;
  toolbar: SearchOrToolbar;
  style: string;
  radius: number;
  shadow: number;
  shade: Shade;
  custom: Custom;
}
interface Color {
  range: Range;
  contrast: Contrast;
  shades: number;
}
interface Range {
  primary: Primary;
}
interface Primary {
  h: number;
  s: number;
}
interface Contrast {
  start: number;
  end: number;
}
interface Accent {
  hsl: Hsl;
  rgb: Rgb;
  random: Random;
  cycle: Cycle;
}
interface Hsl {
  h: number;
  s: number;
  l: number;
}
interface Rgb {
  r: number;
  g: number;
  b: number;
}
interface Random {
  active: boolean;
  style: string;
}
interface Cycle {
  active: boolean;
  speed: number;
  step: number;
}
interface Font {
  display: DisplayOrUi;
  ui: DisplayOrUi;
}
interface DisplayOrUi {
  name: string;
  weight: number;
  style: string;
}
interface Background {
  type: string;
  color: StartOrEndOrColor;
  gradient: Gradient;
  image: ImageOrVideo;
  video: ImageOrVideo;
}
interface StartOrEndOrColor {
  hsl: Hsl;
  rgb: Rgb;
}
interface Gradient {
  angle: number;
  start: StartOrEndOrColor;
  end: StartOrEndOrColor;
}
interface ImageOrVideo {
  url: string;
  blur: number;
  grayscale: number;
  scale: number;
  accent: number;
  opacity: number;
  vignette: Vignette;
}
interface Vignette {
  opacity: number;
  start: number;
  end: number;
}
interface Opacity {
  general: number;
}
interface Layout {
  color: Color1;
  divider: Divider;
}
interface Color1 {
  by: string;
  hsl: Hsl;
  rgb: Rgb;
  blur: number;
  opacity: number;
}
interface Divider {
  size: number;
}
interface Header {
  color: Color2;
  search: SearchOrToolbar;
}
interface Color2 {
  by: string;
  hsl: Hsl;
  rgb: Rgb;
  opacity: number;
}
interface SearchOrToolbar {
  opacity: number;
}
interface Bookmark {
  color: Color2;
  item: Item;
}
interface Item {
  border: number;
  opacity: number;
}
interface Group {
  toolbar: SearchOrToolbar;
}
interface Shade {
  opacity: number;
  blur: number;
}
interface Custom {
  all?: (null)[] | null;
  edit: boolean;
}
