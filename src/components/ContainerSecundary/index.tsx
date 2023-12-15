import styles from "./styles.module.css";

export default function ContainerSecundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container_secundary}>{children}</div>;
}
