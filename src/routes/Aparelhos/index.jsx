import { Link } from "react-router-dom"
import { listaProdutos } from "../../components/ListaProdutos"
export default function Aparelhos(){
    
    return(
        <main>
            <h1>Aparelhos Disponíveis</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o produto: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    
    )



}