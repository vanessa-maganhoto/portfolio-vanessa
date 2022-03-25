import "./styles.css"
import imagem from"../../assets/img-redonda-portfolio-vanessa-redimensionada.png"

export default function Banner(){
    return(
        <section id="sobre" className="container">

            <div className="centralizar-coluna">
                <h1 >Vanessa Matos</h1>
                <p className="descricao-vanessa" >Aprecio os desafios e as novas oportunidades que a vida me oferece. Atualmente, mergulhei no universo da programação após um período dedicado a educação. Um ciclo se encerrou e outro iniciou. Sou estudante do Certified Tech Developer da Digital House e pretendo me especializar em Back End. Moro na cidade de São Paulo, a cidade que me mostrou que podemos ter vários objetivos, rever os caminhos e recalcular as rotas da nossa vida. </p>
                <p className="descricao-vanessa" > Uma parte do novo caminho da minha vida está logo abaixo. Alguns projetos que fui desenvolvendo em cursos que realizei desde que inicei a transição de carreira. Em todos os dias podemos enxergar a possibilidade de recomeçar. O meu recomeço profissional está aqui. Até breve!</p>
            </div>

            <img src={imagem} className="img-vanessa" alt="Foto Vanessa"/>
        </section>
    )
}