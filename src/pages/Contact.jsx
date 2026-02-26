import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Contact <span>& Adresă</span>
      </h1>

      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.icon}>📍</span>
          <div>
            <p className={styles.label}>Adresă</p>
            <p className={styles.value}>str. Ștefan cel Mare 42, Chișinău</p>
          </div>
        </div>

        <div className={styles.row}>
          <span className={styles.icon}>📞</span>
          <div>
            <p className={styles.label}>Telefon</p>
            <p className={styles.value}>+373 60 123 456</p>
          </div>
        </div>

        <div className={styles.row}>
          <span className={styles.icon}>🕐</span>
          <div>
            <p className={styles.label}>Program</p>
            <p className={styles.value}>Luni – Duminică: 10:00 – 22:00</p>
          </div>
        </div>

        <div className={styles.row}>
          <span className={styles.icon}>📧</span>
          <div>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>contact@ffkebab.md</p>
          </div>
        </div>
      </div>
    </div>
  )
}
