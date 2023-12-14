import './App.css';
import {Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Concessionária</h1>
      <nav>
        <button className="botao"><Link className='navlink' to='/veiculos/cadastrar'>Cadastro</Link></button> &nbsp;
        <button className="botao"><Link className='navlink' to='/veiculos/consultar'>Consulta</Link></button> &nbsp;
      </nav>
      <main>
         <Outlet />
      </main>
    </div>
  );
}

export default App;

