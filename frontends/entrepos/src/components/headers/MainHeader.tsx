import Link from 'next/link'

type HeaderProps = {
    user?: any
    loading: boolean
}

export default ({ user, loading }: HeaderProps) => ( 
    <header>
        <div className='box'>
            <nav className='horizontal-menu'>
                <ul>
                <li>
                    <Link href="/" legacyBehavior><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior><a>About</a></Link>
                </li>
                <li>
                    <Link href="/users" legacyBehavior><a>Users List</a></Link>
                </li>
                <li>
                    <Link href="/api/users" legacyBehavior><a>Users API</a></Link>
                </li>
                <li>
                    <Link href="/advanced/api-profile" legacyBehavior>
                    <a>API rendered profile (advanced)</a>
                    </Link>
                </li>
                {!loading &&
                    (user ? (
                    <>
                        <li>
                        <Link href="/profile" legacyBehavior>
                            <a>Client rendered profile</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/advanced/ssr-profile" legacyBehavior>
                            <a>Server rendered profile (advanced)</a>
                        </Link>
                        </li>
                        <li>
                        <a href="/api/auth/logout">Logout</a>
                        </li>
                    </>
                    ) : (
                    <li>
                        <a href="/api/auth/login">Login</a>
                    </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
)
