import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                dark: '#202936',
                "dark-border": '#333F55',
                "light-border" : '#ebf1f6',
                "dark-link": '#7c8fac',
                "light-link": '#2a3547',
                "dark-gray" : '#26334A',
                "light-gray" : '#F6F9FC'
            },
        },
    },
}
