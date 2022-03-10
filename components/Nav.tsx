import Link from "next/link"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>HOME</a>
                    </Link>
                </li>
                <li>
                    <Link href='/headphones'>
                        <a>HEADPHONES</a>
                    </Link>
                </li>
                <li>
                    <Link href='/speakers'>
                        <a>SPEAKERS</a>
                    </Link>
                </li>
                <li>
                    <Link href='/earphones'>
                        <a>EARPHONES</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav