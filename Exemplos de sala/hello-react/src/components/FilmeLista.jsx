import filmes from '../service/dados'

function FilmeLista() {
    return(
        <div>
            {filmes.map(filme =>{
                return(
                    <ul>
                        <li>{filme.nome}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default FilmeLista