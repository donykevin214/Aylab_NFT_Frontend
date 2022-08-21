import { extendTheme, theme as baseTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import styles from './styles'
import borders from './foundations/borders'
import components from './components'

const config: ThemeConfig = {}

const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1366px',
})

const colors = {
  ...baseTheme.colors,
  white: {
    '100': '#FFFFFF',
    '200': 'rgba(255, 255, 255,0.2)',
  },
  black: {
    '100': '#000000',
    '200': 'rgba(0, 0, 0, 0.35)',
  },
  red: {
    '100': '#FF1313',
  },
  blue: {
    '100': '#2549FF',
    '200': '#1ED0FF',
    '300': 'rgba(10, 50, 255, 1)',
  },
  yellow: {
    '100': 'rgba(255, 170, 30, 1)',
    '200': '#FFAA1E',
  },
  pink: {
    '100': '#EA32D5',
  },
  green: {
    '100': '#2FFF38',
    '200': '#AAFF00',
  },
}

const textStyles = {
  '12': {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '14': {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '16': {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '18': {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '24': {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '30': {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '48': {
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '64': {
    fontSize: 64,
    fontWeight: 'bold',
    lineHeight: 1,
  },
}

const layerStyles = {}

// https://chakra-ui.com/docs/theming/theme
const theme = extendTheme({
  config,
  colors,
  fonts: {
    body: "'Helvetica','LoRes9OT','sans-serif'",
  },
  sizes: {
    xl: '1080px',
  },
  fontSizes: {
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '24': '24px',
  },
  styles,
  borders,
  components,
  breakpoints,
  layerStyles,
  textStyles,
})

export default theme
