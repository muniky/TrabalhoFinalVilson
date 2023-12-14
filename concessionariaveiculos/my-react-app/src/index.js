import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Consulta from './componentes/consulta';
import Veiculos from './componentes/veiculos';
import Editar from './componentes/editar';


const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/veiculos/cadastrar",
        element: <Veiculos />
      },
      {
        path: "/veiculos/consultar",
        element: <Consulta />
      },
      {
        path: "/veiculos/editar/:idVeiculo", 
        element: <Editar />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

