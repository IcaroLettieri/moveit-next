import Head from 'next/head';
import { GitHubLogin } from '../components/GitHubLogin';

// import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Login.module.css';

export default function Login() {

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <section>
        <div className={styles.background}>
          <img src="/background-login.svg" alt=""/>
        </div>
        <div>
          <GitHubLogin />
        </div>
      </section>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

//   return {
//     props: { 
//       level: Number(level),
//       currentExperience: Number(currentExperience),
//       challengesCompleted: Number(challengesCompleted),
//     }
//   }
// }

