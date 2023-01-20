import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav () {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <href>Home</href>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <href>About</href>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <href>Blog</href>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
