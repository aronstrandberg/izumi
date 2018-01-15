import React from 'react'
import { Link } from 'react-router-dom'
import css from './styles.css'

function Header() {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
    </header>
  )
}

const Navigation = () => (
  <nav className={css.navigation}>
    <Link to="/about">About</Link>
  </nav>
)

const Logo = () => (
  <div className={css.logo}>
    <Link to="/">
      izumi
    </Link>
  </div>
)


export default Header
