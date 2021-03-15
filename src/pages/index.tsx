import Head from "next/head";
import {GetServerSideProps} from "next";
import { Profile } from "../components/Profile";
import { ExperienceBar } from "../components/ExperienceBar";
import styles from "../styles/pages/Home.module.css";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/CountDown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title> Inicio | Move.it</title>
      </Head>

      <ExperienceBar />
    <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  return {
    props: {
      level,
      currentExperience,
      challengesCompleted,
    }
  }
}