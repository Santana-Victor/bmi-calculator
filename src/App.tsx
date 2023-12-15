import Main from "./components/Main";
import ContainerPrimary from "./components/ContainerPrimary";
import ContainerSecundary from "./components/ContainerSecundary";
import Title from "./components/Title";
import FormUserData from "./components/FormUserData";
import RenderUserBMI from "./components/RenderUserBMI";
import RenderAboutBMI from "./components/RenderAboutBMI";

import { useUserBMIStore } from "./store/UserBMIStore";
import ContainerResult from "./components/ContainerResult";

export default function App() {
  const [userBMI, aboutBMI] = useUserBMIStore((state) => [
    state.userBMI,
    state.aboutBMI,
  ]);

  return (
    <>
      <Main>
        <ContainerPrimary>
          <ContainerSecundary>
            <Title>Calculadora de IMC</Title>
            <FormUserData />
            <ContainerResult>
              {userBMI !== "" && (
                <RenderUserBMI>Seu IMC é de: {userBMI}</RenderUserBMI>
              )}
              {aboutBMI !== "" && <RenderAboutBMI>{aboutBMI}</RenderAboutBMI>}
            </ContainerResult>
          </ContainerSecundary>
        </ContainerPrimary>
      </Main>
    </>
  );
}
