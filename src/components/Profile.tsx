import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';


export function Profile (){
  const { level} = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/blssti.png" alt="Bruno Luis" />
      <div>
        <strong> Bruno Luis</strong>
        <p>
          <img src="icons/level.svg"/>
          Level {level}
          </p> 
      </div>
    </div>
  )
}