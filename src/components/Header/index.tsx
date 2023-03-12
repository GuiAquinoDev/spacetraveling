import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href={`/`}>
        <img src="/logo.svg" alt="logo" />
      </Link>
    </header>
  );
}
