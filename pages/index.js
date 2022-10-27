import Link from '../src/components/Link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Alura Cases - Home Page</h1>
      <Link href='/faq'>
        Faq
      </Link>
    </div>
  );
}
