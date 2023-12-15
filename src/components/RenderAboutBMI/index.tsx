import styles from "./styles.module.css";

export default function RenderAboutBMI({ children }: { children: string }) {
  return <p className={styles.about_bmi}>{children}</p>;
}
