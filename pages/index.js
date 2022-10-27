import Link from '../src/components/Link';
import Title from '../src/components/Title';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Title as="h1">Alura Cases - Home Page</Title>
      <Link href='/faq'>
        Faq
      </Link>
    </div>
  );
}
