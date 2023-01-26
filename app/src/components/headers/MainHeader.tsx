import Link from 'next/link'
import HeaderMenu from './header-menu'

type HeaderProps = {
    user?: any
    loading: boolean
}

export default ({ user, loading }: HeaderProps) => ( 
    <header>
        <div className='box'>
            <img src="/logo-s.png" alt="EntrePOS Logo" width="250" />
            <HeaderMenu user={user} loading={loading} />
        </div>
    </header>
)
