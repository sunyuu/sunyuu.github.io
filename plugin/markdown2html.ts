import type { Plugin } from 'vite'
import generate from '../src/utils/get-data'
import path from 'path'

const MD_DATA = '@md-data'

export default function pageRoutePlugin(): Plugin {
  return {
    name: 'vite-md-data-plugin',
    resolveId(id) {
      if (id === MD_DATA) {
        return id
      }
    },
    load(id) {
      if (id === MD_DATA) {
        return `export default ${JSON.stringify(generate(path.resolve(__dirname, '../post')))}`
      }
    }
  }
}
