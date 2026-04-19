import type { ReactNode } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import appCss from '../styles.css?url'
import { NotFound } from '../components/NotFound'

const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { title: 'Vaibhavee Singh — Notebook' },
      {
        name: 'description',
        content:
          'Editorial-technical portfolio of Vaibhavee Singh — AI engineering intern at Blinkit, previously Scopely. Building AI systems that work at real-world scale.',
      },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: '',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500;700&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
    scripts: [
      {
        // Inline theme boot — prevents FOUC when a user previously chose "ink".
        children: `(function(){try{var t=localStorage.getItem('vs-theme');if(t==='ink')document.documentElement.dataset.themeBoot='ink';}catch(e){}})();`,
      },
      ...(umamiWebsiteId
        ? [
            {
              defer: true,
              src: 'https://cloud.umami.is/script.js',
              'data-website-id': umamiWebsiteId,
            },
          ]
        : []),
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body data-screen-label="Portfolio">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

// Re-export for unused import suppression when routes are empty.
export { Outlet }
