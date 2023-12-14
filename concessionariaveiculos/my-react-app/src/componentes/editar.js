import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Editar(){
    const[modelo, setModelo] = useState('')
    const[marca, setMarca] = useState('')
    const[placa, setPlaca] = useState('')

    const { idVeiculos } = useParams()
    
    function salvar(){      
      let obj = {id: idVeiculos,modelo, marca, placa}
      fetch(`http://localhost:8080/veiculos/${idVeiculos}`,
      {
        method:'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(obj)
      })
      .then(x => alert('Veiculo criado com sucesso'))
    }

    useEffect(()=>{
      fetch(`http://localhost:8080/veiculos/${idVeiculos}`)
      .then(data => data.json())
      .then(response => {
        setModelo(response.modelo)
        setMarca(response.marca)
        setPlaca(response.placa)
      })
    },[])


    return(
        <div className="container">
            <h2 className="text-center">Editar Veiculo: {idVeiculos} </h2>
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
              type="marca" 
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