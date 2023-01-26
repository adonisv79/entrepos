import React, { ReactNode } from 'react'
import Head from 'next/head'
import HeaderMenu from './HeaderMenu'
import { UserProfile } from '@auth0/nextjs-auth0/client'

type LayoutProps = {
  user?: UserProfile
  isLoading?: boolean
  children?: ReactNode
}

export default ({ user, isLoading = false, children }: LayoutProps) => (
  <div>
    <Head>
      <title>EntrePOS</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <div className='box'>
          <img src="/logo-s.png" alt="EntrePOS Logo" width="250" />
          <HeaderMenu user={user} isLoading={isLoading} />
      </div>
    </header>
    {children}
    <footer>
      <div className='box'>
        <span>EntrePOS is a free open-sourced POS project built for micro and small business enterprises.</span>
      </div>
    </footer>
  </div>
)
