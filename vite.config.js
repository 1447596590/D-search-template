import { defineConfig } from 'vite'

import htmlTemplate from 'vite-plugin-html-template'
import babel from 'vite-plugin-babel';
// import commonjs from '@rollup/plugin-commonjs'
import vitePluginRequire from "vite-plugin-require";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        htmlTemplate({
            pages: "index"
            ,
        }),
        babel(),
        vitePluginRequire()
        // commonjs()
    ],
    build: {
        commonjsOptions: { transformMixedEsModules: true } // Change
      }
})
