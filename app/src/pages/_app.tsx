import { UserProvider } from '@auth0/nextjs-auth0/client'
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import './styles/default.scss'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {

  const { user } = pageProps

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <UserProvider user={user}>
            <Component {...pageProps} />
          </UserProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}