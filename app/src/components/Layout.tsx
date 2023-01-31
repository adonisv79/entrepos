import { useUser } from '@auth0/nextjs-auth0/client'
import React, { ReactNode } from 'react'
import Head from 'next/head'
import HeaderMenu from './HeaderMenu'
import { UserProfile } from '@auth0/nextjs-auth0/client'
import { Container } from '@mui/system'


type LayoutProps = {
  user?: UserProfile
  isLoading?: boolean
  children?: ReactNode
}

export default ({ children }: LayoutProps) => {
  const { user, isLoading } = useUser()
  return (
    <div>
      <Head>
        <title>EntrePOS</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      { // render only when no longer isLoading
        !isLoading && (<>
          <Container maxWidth='xl'>

            <header>
              <HeaderMenu user={user} />
            </header>
            {children}
            <footer>
              <div className='box'>
                <span>EntrePOS is a free open-sourced POS project built for micro and small business enterprises.</span>
              </div>
            </footer>
          </Container>
        </>)
      }
    </div>
  )
}