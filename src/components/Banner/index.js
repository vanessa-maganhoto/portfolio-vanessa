import "./styles.css"
import imagem from"../../assets/img-redonda-portfolio-vanessa-redimensionada.png"

export default function Banner(){
    return(
        <section id="sobre" className="container">

            <div className="centralizar-coluna">
                <h1 >Vanessa Matos</h1>
                <p className="descricao-vanessa" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <img src={imagem} className="img-vanessa" alt="Foto Vanessa"/>
        </section>
    )
}