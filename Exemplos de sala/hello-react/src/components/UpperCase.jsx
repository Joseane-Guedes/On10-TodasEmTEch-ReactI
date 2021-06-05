function UpperCase(props) {
    const texto = props.texto
    const textoTransformado = texto.toUpperCase()
    return (
        <h2>{textoTransformado}</h2>
    )
}

export default UpperCase