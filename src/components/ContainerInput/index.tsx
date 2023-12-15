import styles from "./styles.module.css";

export default function ContainerInput({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
