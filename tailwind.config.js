/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ['Ubuntu'],
                lobstar:['Lobster']
            },
            backgroundImage: {
                'error-bg': "url('./error-bg.jpg')"
            }
        },
    },
    plugins: [require("daisyui")],
};
