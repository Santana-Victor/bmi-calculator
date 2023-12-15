import styles from "./styles.module.css";

export default function ContainerPrimary({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container_primary}>{children}</div>;
}
