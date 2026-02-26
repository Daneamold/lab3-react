import Card from '@components/Card'
import menuItems from '@data/menuItems.json'
import styles from './Menu.module.css'

export default function Menu({ onAdd }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Meniu <span>Complet</span>
      </h1>

      <div className={styles.grid}>
        {menuItems.map((item) => (
          <Card key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  )
}
