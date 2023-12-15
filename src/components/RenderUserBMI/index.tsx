import styles from "./styles.module.css";

export default function RenderUserBMI({ children }: { children: string[] }) {
  return <p className={styles.user_bmi}>{children}</p>;
}
