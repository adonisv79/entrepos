import React, { ReactNode } from 'react'
import Head from 'next/head'
import HeaderMenu from './HeaderMenu'
import HeaderMenu2 from './HeaderMenu2'
import { UserProfile } from '@auth0/nextjs-auth0/client'

type LayoutProps = {
  user?: UserProfile
  isLoading?: boolean
  children?: ReactNode
}

const links = [
  { display: 'Home', href: '/' },
  { display: 'About', href: '/about' },
  { display: 'Users List', href: '/users' },
  { display: 'API rendered profile', href: '/advanced/api-profile' },
  { display: 'Profile', href: '/profile', auth: true, userlink: true },
  { display: 'My Enterprises', href: '/e', auth: true,  },
  { divider: true },
  { display: 'Logout', href: '/api/auth/logout', auth: true, userlink: true },
]

export default ({ user, isLoading = false, children }: LayoutProps) => (
  <div>
    <Head>
      <title>EntrePOS</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <HeaderMenu2 user={user} isLoading={isLoading} links={links} />
    </header>
    {children}
    <footer>
      <div className='box'>
        <span>EntrePOS is a free open-sourced POS project built for micro and small business enterprises.</span>
      </div>
    </footer>
  </div>
)
