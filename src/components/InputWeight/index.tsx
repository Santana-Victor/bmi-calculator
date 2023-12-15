import styles from "./styles.module.css";

import IconWeight from "../components_icons/IconWeight";

import { useUserWeightStore } from "../../store/UserWeightStore";

type InputWeightProps = {
  isError: boolean;
  type: string;
  id: string;
};

export default function InputWeight({ isError, type, id }: InputWeightProps) {
  const [userWeight, setUserWeight] = useUserWeightStore((state) => [
    state.userWeight,
    state.setUserWeight,
  ]);

  return (
    <div
      className={
        isError ? `${styles.wrapper} ${styles.error}` : `${styles.wrapper}`
      }
    >
      <IconWeight />
      <input
        className={styles.input}
        type={type}
        id={id}
        onChange={(event) => setUserWeight(event.target.value)}
        value={userWeight}
      />
      <span className={styles.kilogram}>KG</span>
    </div>
  );
}
