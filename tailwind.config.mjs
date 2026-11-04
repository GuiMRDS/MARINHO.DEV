/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#FF5C00',
                deep: '#E6E6E6',
                surface: '#FFFFFF',
                text: '#050505',
                muted: '#666666',
                dark: '#050505',
                'dark-surface': '#121212',
            },
            fontFamily: {
                oswald: ['Oswald', 'sans-serif'],
                space: ['Space Grotesk', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                marquee: 'marquee 40s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
};
