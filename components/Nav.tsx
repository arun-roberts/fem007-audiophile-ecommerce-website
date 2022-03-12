import Link from "next/link"

const Nav = () => {
    return (
        <nav>
            <menu>
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
            </menu>
        </nav>
    )
}

export default Nav