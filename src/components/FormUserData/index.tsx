import styles from "./styles.module.css";

import ContainerInput from "../ContainerInput";
import Label from "../Label";
import InputWeight from "../InputWeight";
import InputErrorMessage from "../InputErrorMessage";
import InputHeight from "../InputHeight";
import CalculateButton from "../CalculateButton";

import useHandleSubmitUserData from "../../hooks/useHandleSubmitUserData";

import { useErrorMessageStore } from "../../store/ErrorMessageStore";

export default function FormUserData() {
  const { handleSubmitUserData } = useHandleSubmitUserData();
  const isError = useErrorMessageStore((state) => state.isError);

  return (
    <form className={styles.form} onSubmit={handleSubmitUserData}>
      <ContainerInput>
        <Label htmlFor={"weight"}>Peso em KG</Label>
        <InputWeight isError={isError} type={"number"} id={"weight"} />
        {isError && (
          <InputErrorMessage>
            Por favor preencha todos os campos
          </InputErrorMessage>
        )}
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor={"height"}>Altura em metros</Label>
        <InputHeight isError={isError} type={"number"} id={"height"} />
        {isError && (
          <InputErrorMessage>
            Por favor preencha todos os campos
          </InputErrorMessage>
        )}
      </ContainerInput>
      <CalculateButton>Calcular</CalculateButton>
    </form>
  );
}
