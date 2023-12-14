import './App.css';
import {Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Concessionária</h1>
      <nav>
        <Link to='/veiculos/cadastrar'>Cadastro</Link> &nbsp;
        <Link to='/veiculos/consultar'>Consulta</Link> &nbsp;
        <Link to='/veiculos/editar/10'>Editar</Link>
      </nav>
      <main>
         <Outlet />
      </main>
    </div>
  );
}

export default App;

