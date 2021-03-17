module.exports = {
    // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'rick-morty-bg': "url('assets/images/background.png')"
            })
        },

        screens: {
            '3xl': {'max': '1920px'},
            '2xl': {'max': '1535px'},
            'xl': {'max': '1279px'},
            'lg': {'max': '1023px'},
            'md': {'max': '767px'},
            'sm': {'max': '639px'},
        },

        colors: {
            white: {
                DEFAULT: '#FFFFFF'
            },
            red: {
                DEFAULT: '#bb2a2a'
            },
            yellow: {
                DEFAULT: '#E3AE00'
            },
            black: {
                light: '#363636',
                DEFAULT: '#000000'
            },
            gray: {
                DEFAULT: '#a8a8a8'
            }
        },

        spacing: {
            '5': '0.5rem',
            '10': '1rem',
            '15': '1.5rem',
            '20': '2rem',
            '30': '3rem',
            '40': '4rem',
            '60': '6rem',
            '70': '7rem',
            '75': '7.5rem',
            '80': '8rem',
            '90': '9rem',
            '100': '10rem',
            '125': '12.5rem',
            '127': '12.7rem',
            '150': '15rem',
            '195': '19.5rem',
            '200': '20rem',
            '250': '20.5rem',
            '300': '30rem',
            '325': '32.5rem',
            '350': '35rem',
            '400': '40rem',
            '500': '50rem',
            '650': '65rem'
        },

        fontSize: {
            '10': '1rem',
            '12': '1.2rem',
            '15': '1.5rem',
            '18': '1.8rem',
            '22': '2.2rem',
            '24': '2.4rem',
            '48': '4.8rem',
        },

        borderRadius: {
            '15': '1.5rem',
            '25': '2.5rem',
        }
    },

    variants: {
        extend: {},
    },

    plugins: [],
}
