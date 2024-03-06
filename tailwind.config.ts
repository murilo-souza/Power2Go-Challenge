import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        table: 'minmax(18rem, 20rem) 1fr',
      },
    },
  },
  plugins: [],
}
export default config
