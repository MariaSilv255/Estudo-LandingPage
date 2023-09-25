import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Sessao1 from "./Componentes/Sessoes/sessao1/Sessao1";
import Sessao2 from "./Componentes/Sessoes/sessao2/Sessao2";
import './css/app.css';


function App() {
  return (
    <main className={'container'}>
      <Cabecalho />
      <Sessao1/>
      <Sessao2/>
    </main>
  );
}

export default App;
