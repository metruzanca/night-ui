import { describe, expect, it } from 'vitest'
import { rgbToHex, hexToRgb, hslToRgb, rgbToHsl, generateColors } from '../../src/utils/color'
import { State } from '../../src/Provider/types'

describe('rgbToHex', () => {
  it('should convert rgb to hex', () => {
    expect(rgbToHex({ r: 0, g: 80, b: 255 })).toBe('#0050ff')
  })
  // More tests...
})

describe('rgbToHsl', () => {
  it('should convert rgb to hsl', () => {
    expect(rgbToHsl({ r: 0, g: 80, b: 255 })).toEqual({ h: 221, s: 100, l: 50 })
  })
  // More tests...
})

describe('hexToRgb', () => {
  it('should convert hex to rgb', () => {
    expect(hexToRgb('#0050ff')).toEqual({ r: 0, g: 80, b: 255 })
  })
  // More tests...
})

describe('hslToRgb', () => {
  it('should convert hsl to rgb', () => {
    expect(hslToRgb({ h: 221, s: 100, l: 50 })).toEqual({ r: 0, g: 81, b: 255 })
  })
  // More tests...
})

// ZombieFox's Magic function
describe('generateColors', () => {
  it('should generate colors', () => {
    const partialState: State = {
      //@ts-ignore
      theme: {
        color: {
          contrast: {
            end: 83,
            start: 17,
          },
          shades: 5,
          range: {
            primary: {
              h: 222,
              s: 14,
            }
          }
        }
      }
    }
  
    const element = document.createElement('div')
    generateColors(partialState, element)

    const values = {
      "--theme-primary-1-r": "37",
      "--theme-primary-1-g": "41",
      "--theme-primary-1-b": "49",
      "--theme-primary-1-h": "222",
      "--theme-primary-1-s": "14",
      "--theme-primary-1-l": "17",
      "--theme-primary-2-r": "75",
      "--theme-primary-2-g": "82",
      "--theme-primary-2-b": "99",
      "--theme-primary-2-h": "222",
      "--theme-primary-2-s": "14",
      "--theme-primary-2-l": "34",
      "--theme-primary-3-r": "110",
      "--theme-primary-3-g": "120",
      "--theme-primary-3-b": "145",
      "--theme-primary-3-h": "222",
      "--theme-primary-3-s": "14",
      "--theme-primary-3-l": "50",
      "--theme-primary-4-r": "159",
      "--theme-primary-4-g": "166",
      "--theme-primary-4-b": "183",
      "--theme-primary-4-h": "222",
      "--theme-primary-4-s": "14",
      "--theme-primary-4-l": "67",
      "--theme-primary-5-r": "206",
      "--theme-primary-5-g": "209",
      "--theme-primary-5-b": "218",
      "--theme-primary-5-h": "222",
      "--theme-primary-5-s": "14",
      "--theme-primary-5-l": "83",
      "--theme-primary-1": "var(--theme-primary-1-h), calc(var(--theme-primary-1-s) * 1%), calc(var(--theme-primary-1-l) * 1%)",
      "--theme-primary-2": "var(--theme-primary-2-h), calc(var(--theme-primary-2-s) * 1%), calc(var(--theme-primary-2-l) * 1%)",
      "--theme-primary-3": "var(--theme-primary-3-h), calc(var(--theme-primary-3-s) * 1%), calc(var(--theme-primary-3-l) * 1%)",
      "--theme-primary-4": "var(--theme-primary-4-h), calc(var(--theme-primary-4-s) * 1%), calc(var(--theme-primary-4-l) * 1%)",
      "--theme-primary-5": "var(--theme-primary-5-h), calc(var(--theme-primary-5-s) * 1%), calc(var(--theme-primary-5-l) * 1%)"
    }

    for (const [key, value] of Object.entries(values)) {
      expect(element.style.getPropertyValue(key)).toBe(value)
    }
  })
})