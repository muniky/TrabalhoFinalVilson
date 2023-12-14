import { Link } from "react-router-dom"

export default function Card(props) {
    function excluir(){
    fetch(`http://localhost:8080/veiculos/${props.veiculos.id}`,
      {
        method:'DELETE'        
      })
      .then(x => alert('Veiculo excluido com sucesso.'))
    }
    return (
        <div className="card mt-3 col-sm-3">
            <img src="https://cdn.appdealersites.com.br/bamaq/Captura%20de%20Tela%202023-01-20%20a%CC%80s%2017.48.30.png" 
            className="card-img-top" alt={props.veiculos.modelo} />
            <div className="card-body">
                <div>
                    <span className="fw-bold me-1">Modelo:</span>
                    <span className="text-danger">{props.veiculos.modelo}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Marca:</span>
                    <span className="text-danger">{props.veiculos.marca}</span>
                </div>
                <div>
                    <span className="fw-bold me-1">Placa:</span>
                    <span className="text-danger">{props.veiculos.placa}</span>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                    <Link to={`/contato/editar/${props.veiculos.id}`}><button className="btn btn-outline-primary">Editar</button></Link>
                    <button 
                      onClick={excluir}
                    className="btn btn-outline-danger" >Excluir</button>
                </div>
            </div>
        </div>
    )
}