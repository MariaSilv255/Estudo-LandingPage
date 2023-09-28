import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Sessao1 from "./Componentes/Sessoes/sessao1/Sessao1";
import Sessao2 from "./Componentes/Sessoes/sessao2/Sessao2";
import Sessao3 from "./Componentes/Sessoes/sessao3/Sessao3";
import Sessao4 from "./Componentes/Sessoes/sessao4/Sessao4";
import './css/app.css';


function App() {
  return (
    <main>
      <Cabecalho />
      <Sessao1/>
      <Sessao2/>
      <Sessao3/>
      <Sessao4/>
    </main>
  );
}

export default App;
