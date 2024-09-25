// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind'


import vercel from '@astrojs/vercel/serverless';


import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
    output: 'hybrid',
    integrations: [tailwind()],
    experimental: {
        env: {
            schema: {
                SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }),
                SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' })
            }
        }
    },

    adapter: netlify(),
});