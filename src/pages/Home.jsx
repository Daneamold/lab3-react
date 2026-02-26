import Card from '@components/Card'
import Button from '@components/Button'
import menuItems from '@data/menuItems.json'
import styles from './Home.module.css'

export default function Home({ onAdd, navigate }) {
  // Show only the first 4 items as "featured"
  const featured = menuItems.slice(0, 4)

  return (
    <div className={styles.page}>
      {/* Hero / Promo Banner */}
      <div className={styles.hero}>
        <span className={styles.promo}>🔥 PROMO -20%</span>
        <h1 className={styles.heroTitle}>
          Family <span>Set</span>
        </h1>
        <p className={styles.heroSub}>Comanda acum și primești -20% la Family Set!</p>
        <Button onClick={() => navigate('/menu')}>
          Vezi Meniul Complet
        </Button>
      </div>

      {/* Featured items */}
      <h2 className={styles.sectionTitle}>⭐ Produse Populare</h2>
      <div className={styles.grid}>
        {featured.map((item) => (
          <Card key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  )
}
