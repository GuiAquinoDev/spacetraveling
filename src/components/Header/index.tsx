import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <Link href={`/`}>
      <div className={styles.headerContainer}>
        <img src="/Logo.svg" alt="logo" />
      </div>
    </Link>
  );
}
