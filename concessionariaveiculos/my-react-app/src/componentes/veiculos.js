import { useState } from 'react'

export default function Cadastro(){
    const[modelo, setModelo] = useState('')
    const[marca, setMarca] = useState('')
    const[placa, setPlaca] = useState('')
    
    function salvar(){      
      let obj = {modelo, marca, placa}
      fetch('http://localhost:8080/veiculos',
      {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(obj)
      })
      .then(x => alert('Veiculo cadastrado com sucesso'))
    }

    return(
        <div className="container">
            <h2 className="text-center">Novo veiculo</h2>
            <label className="form-label">Informe modelo</label>
            <input 
              className="form-control" 
              type="text" 
              placeholder="Informe modelo"
              value={modelo}
              onChange={txt => setModelo(txt.target.value)}
            />

            <label className="form-label">Informe marca</label>
            <input 
              className="form-control" 
              type="text" 
              placeholder="Informe marca" 
              value={marca}
              onChange={txt => setMarca(txt.target.value)}
            />

            <label className="form-label">Informe placa</label>
            <input 
               className="form-control" 
               type="text" 
               placeholder="Informe placa" 
               value={placa}
               onChange={txt => setPlaca(txt.target.value)}
            />

            <div className="mt-3 d-flex justify-content-between">
                <button 
                     onClick={salvar}
                     className="btn btn-primary">
                      Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div>                                        
        </div>
    )
}