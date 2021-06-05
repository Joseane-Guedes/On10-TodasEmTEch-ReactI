import filmes from '../service/dados'
// Metodo map 
function ListaFilmes() {
    return(
        <div>
            {filmes.forEach(filme => {
                return(
                    <div>
                        <h3>{filme.nome}</h3>
                        <img src={filme.capa} alt={filme.nome}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ListaFilmes