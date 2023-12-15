import styles from "./styles.module.css";

export default function ContainerResult({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container_result}>{children}</div>;
}
