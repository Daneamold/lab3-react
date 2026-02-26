import navLinks from '@data/navLinks.json'
import styles from './Navbar.module.css'

export default function Navbar({ currentRoute, navigate }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        🔥 <span>FF</span>Kebab
      </div>

      <div className={styles.links}>
        {navLinks.map((link) => (
          <button
            key={link.path}
            className={`${styles.link} ${currentRoute === link.path ? styles.active : ''}`}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
