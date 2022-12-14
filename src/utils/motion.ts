import type { Variants } from 'framer-motion'

export const inputVariants: Variants = {
    hidden: {
        opacity: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 140,
        },
    },
    show: {
        opacity: 1,
        transition: {
        type: 'spring',
        stiffness: 80,
        delay: 1,
        },
    }
}

export const mapVariants: Variants = {
    hidden: {
        opacity: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 140
        },
    },
    show: {
        opacity: 1,
        transition: {
        type: 'spring',
        stiffness: 80,
        delay: 1,
        },
    }
}

export const placeVariants: Variants = {
    hidden: {
        opacity: 0,
        zIndex: -1,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 140,
        },
    },
    show: {
        opacity: 1,
        zIndex: 1,
        transition: {
        type: 'spring',
        stiffness: 80,
        delay: 1,
        },
    }
}

export const slideIn = (direction: string, type: string, delay: number, duration: number) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
})