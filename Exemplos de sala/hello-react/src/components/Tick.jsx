function Tick(){
    let horaLocal = new Date().toLocaleTimeString()
    return (
        <div>
            <h1>Exemplo 6:</h1>
            <p>{horaLocal}</p>
        </div>
        
    )
}

export default Tick