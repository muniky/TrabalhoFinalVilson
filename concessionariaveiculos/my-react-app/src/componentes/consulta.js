import { useEffect, useState } from "react"
import Card from "./card"

export default function Consulta() {
    const [veiculos, setVeiculos] = useState([])

    function consultar() {
        fetch('http://localhost:8080/veiculos')
            .then(data => data.json())
            .then(response => setVeiculos(response))
    }

    useEffect(consultar, [])
    return (
        <div>
            <h2>Consulta de Veiculos</h2>
            <div className="d-flex flex-wrap">
                {
                    veiculos.map(vc => <Card veiculos={vc} />)
                }
            </div>

        </div>
    )
}