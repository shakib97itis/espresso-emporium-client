import { Container } from 'postcss'
import theme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            alabaster: '#ECEAE3',
            cultured: '#F5F4F1',
            tan: '#D2B48C',
            charcoal: '#374151',
            'dark-sienna': '#331A15',
            'eerie-black': '#1B1A1A',
            'middle-yellow-red': '#E3B577',
            'davys-grey': '#5C5B5B',
            'black-olive': '#3C393B',
            'carmine-pink': '#EA4744',
            'anti-flash-white': '#F4F3F0',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Raleway', ...defaultTheme.fontFamily.sans],
                display: ['Rancho', 'cursive'],
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light'],
    },
}
