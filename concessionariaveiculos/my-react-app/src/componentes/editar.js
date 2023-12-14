import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Editar(){
    const[modelo, setModelo] = useState('')
    const[marca, setMarca] = useState('')
    const[placa, setPlaca] = useState('')

    const { idVeiculo } = useParams()
    
    function salvar(){      
      let obj = {id: idVeiculo,modelo, marca, placa}
      fetch(`http://localhost:8080/veiculos/${idVeiculo}`,
      {
        method:'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(obj)
      })
      .then(x => alert('Veiculo alterado com sucesso'))
    }

    useEffect(()=>{
      fetch(`http://localhost:8080/veiculos/${idVeiculo}`)
      .then(data => data.json())
      .then(response => {
        setModelo(response.modelo)
        setMarca(response.marca)
        setPlaca(response.placa)
      })
    },[])


    return(
        <div className="container">
            <h1 className="text-center">Editar Veiculo: {idVeiculo} </h1>
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