function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`
}

// SETUP COLORS
export const GREY = {
  0: "#FFFFFF",
  100: "#f0f1f2",
  200: "#d1d5d8",
  300: "#b2b8be",
  400: "#949ca4",
  500: "#75808a",
  600: "#5b646b",
  700: "#41474d",
  800: "#272b2e",
  900: "#0d0e0f",
}

export const PRIMARY = {
  lighter: "#e3f7ff",
  light: "#39c4ff",
  main: "#009de0",
  dark: "#008bc6",
  darker: "#00141c",
  contrastText: "#fff",
}

export const SECONDARY = {
  lighter: "#d0d4d9",
  light: "#727f8d",
  main: "#191c1f",
  dark: "#191c1f",
  darker: "#191c1f",
  contrastText: "#fff",
}

export const TERTIARY = {
  lighter: "#ffe3ed",
  light: "#ff397f",
  main: "#f50057",
  dark: "#8e0032",
  darker: "#55001e",
  contrastText: "#fff",
}

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#0090de",
  dark: "#0090de",
  darker: "#0090de",
  contrastText: "#fff",
}

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
}

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
}

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
}

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
}

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
}

const palette = {
  common: { black: "#191C1F", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  tertiary: { ...TERTIARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: { paper: "#fff", default: "#f7f7f7", neutral: GREY[200] },
  action: {
    active: GREY[600],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
}

export default palette
