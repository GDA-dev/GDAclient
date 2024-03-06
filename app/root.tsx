import React, { useContext, useEffect } from 'react'
import { withEmotionCache } from '@emotion/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { MetaFunction, LinksFunction } from '@remix-run/node' // Depends on the runtime you choose
import { useLoaderData, json } from "@remix-run/react";
import { ServerStyleContext, ClientStyleContext } from './context'
import tailwind from "./root.css";

export async function loader() {

  return json({
    ENV: {
      API_URL: process.env.API_URL,
      GRAPHQL_URL: process.env.GRAPHQL_URL,
      CLOUDINARY_URL: process.env.CLOUDINARY_URL,
      CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET
    },
  });

};


export const meta: MetaFunction = () => {
  return [
    { charset: 'utf-8' },
    { title: 'New Remix App' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ];
};

export let links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' },
    { rel: 'stylesheet', href: tailwind },
  ]
}

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    const data = useLoaderData<typeof loader>();

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
            }}
          />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-27px)"
};

const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "transparent",
              pointerEvents: "none",
              mx: 0,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
});

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  )
}