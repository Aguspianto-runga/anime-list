// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}", // Semua file di folder src dengan ekstensi js, ts, jsx, atau tsx
//     "./pages/**/*.{js,ts,jsx,tsx}", // Jika Anda menggunakan folder pages
//     "./components/**/*.{js,ts,jsx,tsx}", // Jika Anda memiliki folder components
//     "./app/**/*.{js,ts,jsx,tsx}", // Jika Anda menggunakan folder app (Next.js 13+)
//   ],
//   theme: {
//     extend: {
//       colors: { //colors tidak jadi mungkin masalah tailwind
//         color: {
//           primary: '#eeeeee',
//           accent: '#ffc639',
//           secondary: '#393e46',
//           dark: '#222831',
//         },
//       },
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-comic': 'comic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops)'
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      color: { // tidak berfungsi  sehingga pakai manual di tempat yg mau pakai warnanya langsung (bg-[#eeeeee])
        primary: '#eeeeee',
        accent: '#ffc639',
        secondary: '#393e46',
        dark: '#222831'
      }
    }
  },
  plugins: [],
}