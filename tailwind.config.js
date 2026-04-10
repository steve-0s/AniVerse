/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                '2xs': '0.625rem',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
    ],
};