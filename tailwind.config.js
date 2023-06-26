import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  safelist: [
    {
      pattern: /grid-cols-./,
    },
    {
      pattern: /grid-rows-./,
    },
    {
      pattern: /row-span-./,
    },
    {
      pattern: /col-span-./,
    },
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        mlg: '1099px',
        mxl: '1200px',
        xxl: '1370px',
        '4xl': '2048px',
        ...defaultTheme.screens,
        'rl-ipad-md': [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 868px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          { min: '768px', max: '1098px', orientation: 'portrait' },
        ],
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        vw1: '6.4vw',
        vwh1: '5.6vw',
        vw01: '2vw',
        vw3xl: '1.6vw',
        vw2xl: '1.4vw',
        vwXl: '1.3vw',
        vw1Xl: '1.2vw',
        vwLg: '1vw',
        vwBase: '0.9vw',
        vwSm: '0.8vw',
        vwSm2: '0.75vw',
        vwSm1: '0.7vw',
        vwSm3: '0.55vw',
        vwXS: '0.5vw',
        vwXS2: '0.6vw',
        vwXXS: '0.25vw',
        pxXs: '10px',
        pxVXs: '5px',
        pxBase: '20px',
        px2xl: '28px',
        xxs: '0.6rem',
        extrasmall: '10px',
        toosmall: '8px',
      },
      height: {
        ...defaultTheme.height,
        'h-min': 'min-content',
        'h-1/10-vw': '10vw',
        'h-2/10-vw': '20vw',
        'h-3/10-vw': '30vw',
        'h-4/10-vw': '40vw',
        'h-5/10-vw': '50vw',
        'h-6/10-vw': '60vw',
        'h-7/10-vw': '70vw',
        'h-8/10-vw': '80vw',
        'h-9/10-vw': '90vw',
      },
      minWidth: {
        ...defaultTheme.minWidth,
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '12/12': '100%',
      },
    },
  },
  plugins: [],
};
