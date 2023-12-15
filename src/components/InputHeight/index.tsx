import styles from "./styles.module.css";

import IconRuler from "../components_icons/IconRuler";

import { useUserHeightStore } from "../../store/UserHeightStore";

type InputHeightProps = {
  isError: boolean;
  type: string;
  id: string;
};

export default function InputHeight({ isError, type, id }: InputHeightProps) {
  const [userHeight, setUserHeight] = useUserHeightStore((state) => [
    state.userHeight,
    state.setUserHeight,
  ]);

  return (
    <div
      className={
        isError ? `${styles.wrapper} ${styles.error}` : `${styles.wrapper}`
      }
    >
      <IconRuler />
      <input
        className={styles.input}
        type={type}
        id={id}
        onChange={(event) => setUserHeight(event.target.value)}
        value={userHeight}
      />
      <span className={styles.meters}>m</span>
    </div>
  );
}
