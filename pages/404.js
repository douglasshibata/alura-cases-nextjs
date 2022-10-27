
import Link from '../src/components/Link';
import styles from '../styles/Home.module.css';

export default function Page404() {
  return (
    <div className={styles.container}>
      <h1>Página não encontrada</h1>
      <Link href='/'>
        Voltar para a Home
      </Link>
    </div>
  );
}
