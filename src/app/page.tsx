import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.name}>Brady Welsh!</h1>
      <h2 className={styles.title}>Brady is a tech lead!</h2>
    </div>
  );
}
