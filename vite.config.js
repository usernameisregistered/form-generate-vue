import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  server: {
    host: '0.0.0.0',
    port: "3001"
  },
  plugins: [
    createVuePlugin({})
  ],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
}
