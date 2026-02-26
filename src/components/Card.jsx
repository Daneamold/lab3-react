import styles from './Card.module.css'

export default function Card({ item, onAdd }) {
  return (
    <div className={styles.card}>
      <span className={styles.emoji}>{item.emoji}</span>

      <div className={styles.info}>
        <p className={styles.name}>{item.name}</p>
        {item.spicy && <p className={styles.spicy}>🌶️🌶️🌶️ Picant</p>}
        <p className={styles.price}>{item.price} MDL</p>
        <p className={styles.weight}>{item.weight}</p>
      </div>

      <button className={styles.addBtn} onClick={() => onAdd(item)}>
        +
      </button>
    </div>
  )
}
