import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.siteId}>
          <a href="/">Blog</a>
        </div>
        <div className={styles.contact}>
          <a href="/contact/">お問い合わせ</a>
        </div>
      </div>
    </header>
  );
}