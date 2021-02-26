import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  const { level } = useContext(ChallengesContext)

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
          Level {level}
        </p>
      </div>
    </div>
  )
}