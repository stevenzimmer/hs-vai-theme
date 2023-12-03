/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/index.js",
        "./src/js/*.js",
        "./src/layouts/**/*.html",
        "./src/modules/*.module/*.{html,js}",
        "./src/partials/**/*.html",
        "./src/templates/**/*.html",
        "./src/sections/**/*.html",
        "./src/extra-classes.txt"

    ],
    theme: {
        extend: {
            colors: {
                v: {
                    purple: "#553EB0",
                    offwhite: "#F7FAFC",
                    grey: "#5D697D",
                    blue: "#27acf1",
                    body: "#4D4D50",
                    black: "#2F2F35",
                    yellow: "#FED257",
                },
            },   
        },
        container: {
            center: true,
            screens: {
                "2xl": "1260px",
            },
        },
    },
    plugins: [],
};
