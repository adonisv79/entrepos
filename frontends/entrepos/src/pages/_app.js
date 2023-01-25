import { UserProvider } from '@auth0/nextjs-auth0/client'
import './styles/default.scss'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {

  const { user } = pageProps

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  )
}