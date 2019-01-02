import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <button>Home</button>
        </Link>
        <Link href="/about">
          <button>About</button>
        </Link>
        <Link href="/data-example">
          <button>Data</button>
        </Link>
    </div>
)

export default Header