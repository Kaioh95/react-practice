//import logo from './logo.svg';
import './App.css';

import Aleatorio from './components/basicos/Aletatorio'
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import MembroFamilia from './components/basicos/MembroFamilia';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

function App() {
  return (
    <div id="App" className="App">
      <h1> Fundamento React </h1>

      <div className="Cards">

        <Card titulo="#13 - MegaSena" color="#B9006E">
          <Mega qtde={7}></Mega>
        </Card>

        <Card titulo="#12 - Contador" color="#424242">
          <Contador valorInicial={10} passoInicial={2} ></Contador>
        </Card>

        <Card titulo="#11 - Componente Controlado" color="#E45F56">
          <Input></Input>
        </Card>

        <Card titulo="#10 - Comunicacao Indireta"  color="#8BAD39">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 - Comunicacao Direta" color="#59323C">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 - Condicional">
          <ParOuImpar numero={10}></ParOuImpar>
          <UsuarioInfo usuario={{nome: "Maria"}}></UsuarioInfo>
          <UsuarioInfo usuario={{email: "maria@email.com"}}></UsuarioInfo>
        </Card>

        <Card titulo="#07 - Repetição Tabela">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 - repetição" color="#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira">
            <MembroFamilia nome="Maria"/>
            <MembroFamilia nome="Ana"/>
            <MembroFamilia nome="João"/>
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={10} max={100}></Aleatorio>
        </Card>

        <Card titulo="#03 - Desafio Aleatório" color="#E94C6F">
          <Aleatorio min={10} max={100}></Aleatorio>
        </Card>

        <Card titulo="#02 - Desafio Aleatório" color="#E8B71A">
          <Aleatorio min={10} max={100}></Aleatorio>
        </Card>

        <Card titulo="#01 - Exemplo Card" color="#588C73">
          Conteúdo Card
        </Card>

      </div>
    </div>
  );
}

export default App;

/*<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>*/