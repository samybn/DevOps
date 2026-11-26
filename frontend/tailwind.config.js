/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#f5f5f7',
          surface: '#ffffff',
          nested: '#f2f2f3',
          border: '#e2e2e5',
          text: '#1d1d1f',
          'text-secondary': '#707070',
          action: '#0071e3',
          'action-hover': '#0066cc',
          link: '#0066cc',
        },
        status: {
          propose: { bg: '#ececef', text: '#474747' },
          valide: { bg: '#e5f0fc', text: '#0066cc' },
          convoque: { bg: '#fbe1d1', text: '#5d2a1a' },
          soutenu: { bg: '#e3f3e8', text: '#1e6b3a' },
          clos: { bg: '#1d1d1f', text: '#f5f5f7' },
        },
        decision: {
          admis: { bg: '#e3f3e8', text: '#1e6b3a' },
          corrections: { bg: '#fff1d6', text: '#8a5a00' },
          ajourne: { bg: '#fde8e8', text: '#9b1c1c' },
        },
        peach: {
          bg: '#fbe1d1',
          text: '#5d2a1a',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['44px', { lineHeight: '52px', letterSpacing: '-0.5px', fontWeight: '400' }],
        'h1': ['40px', { lineHeight: '46px', letterSpacing: '-0.6px', fontWeight: '400' }],
        'h2': ['28px', { lineHeight: '34px', letterSpacing: '-0.6px', fontWeight: '400' }],
        'h3': ['20px', { lineHeight: '28px', letterSpacing: '-0.6px', fontWeight: '400' }],
        'title': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'badge': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'tiny': ['10px', { lineHeight: 'normal', fontWeight: '400' }],
      },
      borderRadius: {
        'card': '20px',
        'field': '12px',
        'modal': '24px',
        'pill': '9999px',
      },
      boxShadow: {
        'modal': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'menu': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'toast': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

