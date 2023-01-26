import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import MainHeader from './headers/MainHeader'

type LayoutProps = {
  user?: any
  loading?: boolean
  children?: ReactNode
}

export default ({ user, loading = false, children }: LayoutProps) => (
  <div>
    <Head>
      <title>EntrePOS</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainHeader user={user} loading={loading} />
    {children}
    <footer>
      <div className='box'>
        <span>EntrePOS is a free open-sourced POS project built for micro and small business enterprises.</span>
      </div>
    </footer>
  </div>
)