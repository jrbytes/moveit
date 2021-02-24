import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/jrbytes.png"
        alt="Imagem de perfil de Jr Bytes"
      />

      <div>
        <strong>Jr Bytes</strong>
        <p>
          <img src="icons/level.svg" alt="Imagem de Level Up"/>
          Level 1
        </p>
      </div>
    </div>
  )
}