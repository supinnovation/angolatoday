import {Titillium_Web, Oswald, Manrope, Merriweather} from "next/font/google"

export const fontMenu = Titillium_Web({
  variable: "--font-header-1",
  weight: "700",
  subsets: ["latin"],
  preload: true,
  adjustFontFallback: false,
  
})

export const fontTitle3 = Titillium_Web({
  variable: "--font-title-3",
  weight: "600",
  subsets: ["latin"],
  preload: true,
  adjustFontFallback: false,
  
})

export const fontMenuSoft = Titillium_Web({
  variable: "--font-header-soft",
  weight: "400",
  subsets: ["latin"],
  preload: true,
  adjustFontFallback: false,
  
})

export const fontHeader = Oswald( {
  variable: "--font-header-2",
  subsets:  ["latin"],

  
})

export const fontHeader2 = Manrope( {
  variable: "--font-menu-header",
  adjustFontFallback: false,
  weight: "800",
  subsets: ['latin']
})

export const fontBody = Merriweather({
  variable: "--font-body",
  weight: '400',
  adjustFontFallback: false,
  subsets: ['latin']
})