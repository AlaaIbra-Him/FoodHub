/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pr-blue': '#0B3D91', 
                'ac-blue': '#4A90E2', 

                'bg-light': '#F7F8FA', 
                'text-dark': '#333333',

            },
        },
    },
    plugins: [],
}