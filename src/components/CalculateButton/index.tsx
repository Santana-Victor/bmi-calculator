import styles from "./styles.module.css";

export default function CalculateButton({ children }: { children: string }) {
  return <button className={styles.calculate_btn}>{children}</button>;
}
