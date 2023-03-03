import '@/styles/globals.css'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head'
import Script from 'next/script'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session,
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
    </SessionContextProvider>
    </ThemeProvider>
    </>
  )
}
export default MyApp