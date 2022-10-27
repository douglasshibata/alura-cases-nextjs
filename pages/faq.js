
import Link from '../src/components/Link';
import styles from '../styles/Home.module.css';

export default function FaqPage() {
  return (
    <div className={styles.container}>
      <h1>Alura Cases - Faq Page</h1>
      <Link href='/'>
        Home
      </Link>
    </div>
  );
}
