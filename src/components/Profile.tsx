import styles from '../styles/components/Profile.module.css';

export function Profile (){

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/blssti.png" alt="Bruno Luis" />
      <div>
        <strong> Bruno Luis</strong>
        <p>
          <img src="icons/level.svg"/>
          Level 1</p> 
      </div>
    </div>
  )
}