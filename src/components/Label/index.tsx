import styles from "./styles.module.css";

type LabelProps = {
  htmlFor: string;
  children: string;
};

export default function Label({ htmlFor, children }: LabelProps) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
