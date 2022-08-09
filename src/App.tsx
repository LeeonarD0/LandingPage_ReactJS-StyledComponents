import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { Main, Logo, Subtitle, LittleTitle, MainTitle } from "./assets/styles/stylesTag";
import { Button } from "./components/Button";
import { Header } from './assets/styles/stylesTag'

function App() {

  return (
    <div>

    <GlobalStyle />

    <Header>
        <Logo>
          <img src="/images/logo-space-y.svg" alt="Logo Spacey" />
        </Logo>
    </Header>

      
    <Main>
      <LittleTitle>Finalmente é Possivel!</LittleTitle>
      <MainTitle>Sua jornada para marte comeca aqui.</MainTitle>
      <Subtitle>A primeira viagem para Marte estara disponivel apartir do dia 12. Inscreva-se em nossa lista de espera.</Subtitle>
      <Button text="Inscreva-se agora!" />
    </Main>
    </div>
  )
}

export default App
