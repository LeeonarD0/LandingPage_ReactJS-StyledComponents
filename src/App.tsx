import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { Logo } from "./assets/styles/stylesTag";
import { Button } from "./components/Button";
import { Header } from './assets/styles/stylesTag'

function App() {

  return (
    <div>

    <GlobalStyle />

    <Header>
        <Logo/>
    </Header>

    <Button text="Inscreva-se agora!" />

    </div>
  )
}

export default App
