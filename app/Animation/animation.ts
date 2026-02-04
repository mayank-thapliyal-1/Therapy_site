type InViewOptions = {
  y?: number
  x?: number
  duration?: number
  delay?: number
  once?: boolean
}

export const slideInView = ({
  y = 150,
  x = 0,
  duration = 0.8,
  delay = 0,
  once = true
}: InViewOptions = {}) => ({
  initial: { y, x, opacity: 0 },
  whileInView: { y: 0, x: 0, opacity: 1 },
  viewport: { once },
  transition: { duration, delay }
});
// animations/motion.ts

type HoverOptions = {
  bg?: string
  color?: string
  border?: string
  scale?: number
  duration?: number
}

export const hoverStyle = ({
  bg = "#15173D",
  color = "white",
  border = "#15173D",
  scale = 1,
  duration = 0.2
}: HoverOptions = {}) => ({
  whileHover: {
    backgroundColor: bg,
    color: color,
    borderColor: border,
    scale
  },
  transition: {
    duration
  }
});
