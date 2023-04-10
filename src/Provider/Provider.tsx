import { createContext, createEffect, createSignal, ParentComponent, useContext } from "solid-js"
import get from 'lodash.get'
import { State, Theme } from "./types"
import { Hsl, hslToRgb } from "../utils/color"
import { obsidian } from "./themes"

const OPTIONS = {
  layout: {
    area: {
      header: { justify: ['left', 'center', 'right'], align: ['left', 'center', 'right'] },
      bookmark: { justify: ['left', 'center', 'right'], align: ['left', 'center', 'right'] }
    },
    alignment: ['top-left', 'top-center', 'top-right', 'center-left', 'center-center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'],
    direction: ['horizontal', 'vertical'],
    order: ['header-bookmark', 'bookmark-header'],
    scrollbar: ['auto', 'thin', 'none']
  },
  header: {
    item: { justify: ['left', 'center', 'right'] },
    search: { width: { by: ['auto', 'custom'] }, text: { justify: ['left', 'center', 'right'] } }
  },
  bookmark: {
    item: { justify: ['left', 'center', 'right'] },
    orientation: ['top', 'bottom'],
    style: ['block', 'list']
  },
  group: {
    area: { justify: ['left', 'center', 'right'] },
    order: ['header-body', 'body-header']
  },
  toolbar: {
    location: ['corner', 'header'],
    position: ['top-left', 'top-right', 'bottom-right', 'bottom-left']
  },
  theme: {
    accent: { random: { style: ['any', 'light', 'dark', 'pastel', 'saturated'] } },
    style: ['dark', 'light', 'system'],
    layout: { color: { by: ['theme', 'custom'] } },
    header: { color: { by: ['theme', 'custom'] } },
    bookmark: { color: { by: ['theme', 'custom'] } },
    background: { type: ['theme', 'accent', 'color', 'gradient', 'image', 'video'] }
  }
} as const

const defaultState: State = {
  theme: obsidian,
}

function generateColors(current: State, nightRoot: HTMLElement) {
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

const makeAppContext = () => {
  const nightRoot = document.querySelector('html')!
  const [state, setState] = createSignal<State>(defaultState);

  const applyCSSVar = (paths: string | string[]) => {    
    if (!Array.isArray(paths)) { paths = [paths] } // TODO deprecate this

    const current = state()

    for (const path of paths) {
      const value = get(current, path)
      const name = path.replace(/\./g, '-').toLowerCase()
      nightRoot.style.setProperty('--' + name, value);
    }
  }

  const applyCSSClass = (paths: string | string[]) => {
    if (!Array.isArray(paths)) { paths = [paths] } // TODO deprecate this

    const current = state()

    for (const path of paths) {
      const values: any[] = get(OPTIONS, path)
      for (const item of values) {
        nightRoot.classList.remove('is-' + path.replace(/\./g, '-').toLowerCase() + '-' + item);
      }
      const value = get(current, path)
      nightRoot.classList.add('is-' + path.replace(/\./g, '-').toLowerCase() + '-' + value);
    }
  }

  const applyCSSState = (paths: string | string[]) => {
    if (!Array.isArray(paths)) { paths = [paths] } // TODO deprecate this

    const current = state()

    for (const path of paths) {
      const value = get(current, path)
      if (value) {
        nightRoot.classList.add('is-' + path.replace(/\./g, '-').toLowerCase());
      } else {
        nightRoot.classList.remove('is-' + path.replace(/\./g, '-').toLowerCase());
      }
    }
  }


  createEffect(() => {
    generateColors(state(), nightRoot)
    applyCSSVar([
      'theme.accent.rgb.r',
      'theme.accent.rgb.g',
      'theme.accent.rgb.b',
      'theme.accent.hsl.h',
      'theme.accent.hsl.s',
      'theme.accent.hsl.l',
      'theme.font.display.weight',
      'theme.font.display.style',
      'theme.font.ui.weight',
      'theme.font.ui.style',
      'theme.opacity.general',
      'theme.background.color.rgb.r',
      'theme.background.color.rgb.g',
      'theme.background.color.rgb.b',
      'theme.background.color.hsl.h',
      'theme.background.color.hsl.s',
      'theme.background.color.hsl.l',
      'theme.background.image.blur',
      'theme.background.image.grayscale',
      'theme.background.image.scale',
      'theme.background.image.accent',
      'theme.background.image.opacity',
      'theme.background.image.vignette.opacity',
      'theme.background.image.vignette.start',
      'theme.background.image.vignette.end',
      'theme.background.video.blur',
      'theme.background.video.grayscale',
      'theme.background.video.scale',
      'theme.background.video.accent',
      'theme.background.video.opacity',
      'theme.background.video.vignette.opacity',
      'theme.background.video.vignette.start',
      'theme.background.video.vignette.end',
      'theme.background.gradient.angle',
      'theme.background.gradient.start.rgb.r',
      'theme.background.gradient.start.rgb.g',
      'theme.background.gradient.start.rgb.b',
      'theme.background.gradient.start.hsl.h',
      'theme.background.gradient.start.hsl.s',
      'theme.background.gradient.start.hsl.l',
      'theme.background.gradient.end.rgb.r',
      'theme.background.gradient.end.rgb.g',
      'theme.background.gradient.end.rgb.b',
      'theme.background.gradient.end.hsl.h',
      'theme.background.gradient.end.hsl.s',
      'theme.background.gradient.end.hsl.l',
      'theme.radius',
      'theme.shadow',
      'theme.shade.opacity',
      'theme.shade.blur',
      'theme.layout.color.rgb.r',
      'theme.layout.color.rgb.g',
      'theme.layout.color.rgb.b',
      'theme.layout.color.hsl.h',
      'theme.layout.color.hsl.s',
      'theme.layout.color.hsl.l',
      'theme.layout.color.opacity',
      'theme.layout.color.blur',
      'theme.layout.divider.size',
      'theme.header.color.rgb.r',
      'theme.header.color.rgb.g',
      'theme.header.color.rgb.b',
      'theme.header.color.hsl.h',
      'theme.header.color.hsl.s',
      'theme.header.color.hsl.l',
      'theme.header.color.opacity',
      'theme.header.search.opacity',
      'theme.bookmark.color.rgb.r',
      'theme.bookmark.color.rgb.g',
      'theme.bookmark.color.rgb.b',
      'theme.bookmark.color.hsl.h',
      'theme.bookmark.color.hsl.s',
      'theme.bookmark.color.hsl.l',
      'theme.bookmark.color.opacity',
      'theme.bookmark.item.opacity',
      'theme.toolbar.opacity',
      'theme.group.toolbar.opacity'
    ]);
    // TODO figure out what these two bottom ones do...
    applyCSSClass([
      'theme.style',
      'theme.background.type',
      'theme.layout.color.by',
      'theme.header.color.by',
      'theme.bookmark.color.by'
    ]);
    applyCSSState([
      'theme.layout.divider.size',
      'theme.accent.cycle.active'
    ]);
  })

  return {
    state, setState,
    applyCSSVar,
  } as const
}

type AppContext = ReturnType<typeof makeAppContext>

const initialContext: AppContext = makeAppContext();
const appContext = createContext<AppContext>(initialContext);

import './body.css'
import './layout.css'
import './theme.css'
import '../FontAwesome/index.css'

export const NightProvider: ParentComponent = (props) => (
  <appContext.Provider value={initialContext}>
    {props.children}
  </appContext.Provider>
)

export const useNightContext = () => useContext<AppContext>(appContext);
