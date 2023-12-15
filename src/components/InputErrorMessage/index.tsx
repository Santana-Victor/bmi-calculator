import styles from "./styles.module.css";

export default function InputErrorMessage({ children }: { children: string }) {
  return <p className={styles.error_msg}>{children}</p>;
}
