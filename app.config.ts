export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',
    button: {
      padding: {
        '2xs': 'px-2 py-1',
        xs: 'px-2.5 py-1.5',
        sm: 'px-2.5 py-1.5',
        md: 'px-2.5 py-2',
        lg: 'px-2.5 py-2.5',
        xl: 'px-2.5 py-2.5'
      },
      color: {
        gray: {
          ghost: `text-light-link dark:text-dark-link hover:text-primary-500 dark:hover:text-dark-link hover:bg-light-gray dark:hover:bg-dark-gray`
        }
      }
    },
    input: {
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-1',
        }
      },
      size: {
        lg: 'text-base',
      },
      default: {
        size: 'lg'
      }
    },
    select: {
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-dark text-gray-900 dark:text-white focus:ring-1',
        }
      },
      size: {
        lg: 'text-base',
      },
      default: {
        size: 'lg'
      }
    }
  }
})