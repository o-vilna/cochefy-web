/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#f0f4ff',
  				'100': '#e0e9ff',
  				'200': '#c7d6ff',
  				'300': '#a5b8ff',
  				'400': '#8191ff',
  				'500': '#0B64F4',
  				'600': '#013270',
  				'700': '#011B3C',
  				'800': '#001529',
  				'900': '#000a14',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#f8f9fa',
  				'100': '#f1f3f4',
  				'200': '#e8eaed',
  				'300': '#dadce0',
  				'400': '#bdc1c6',
  				'500': '#757575',
  				'600': '#5f6368',
  				'700': '#3c4043',
  				'800': '#202124',
  				'900': '#1a1a1a',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#faf5ff',
  				'100': '#f3e8ff',
  				'200': '#e9d5ff',
  				'300': '#d8b4fe',
  				'400': '#c084fc',
  				'500': '#D3BDFF',
  				'600': '#a855f7',
  				'700': '#9333ea',
  				'800': '#7c3aed',
  				'900': '#6b21a8',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			utility: {
  				'bg-white': '#FFFFFF',
  				'border-transparent': '#0000001A',
  				'bg-overlay': '#6672A838'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-primary': 'linear-gradient(164.54deg, #013270 -56.61%, #011B3C 97.88%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
