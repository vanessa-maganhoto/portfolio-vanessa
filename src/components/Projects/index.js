import "./styles.css"
import imgLocImoveis from "../../assets/locimoveis.png"
import imgToDoList from "../../assets/to-do-list.png"
import imgCorrecaoProvas from "../../assets/correcaoprovas.png"
import imgPaoQuente from "../../assets/paoquente.png"
import imgF6 from "../../assets/f6.png"
import imgBhaskara from "../../assets/resolvendobhaskara.png"

export default function Projects() {
    
    const data = [
        {
            id: "1",
            name: "Loc Imoveis",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/projeto-loc-imoveis",
            image: imgLocImoveis,
        },

        {
            id: "2",
            name: "Resolvendo Bhaskara",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/desafios-JS/tree/main/desafio010",
            image: imgBhaskara,
        },

        {
            id: "3",
            name: "Lista To-Do",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/Lista-to-do-Checkpoint2",
            image: imgToDoList,
        },

        {
            id: "4",
            name: "Página Correção de Provas",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/exercicio-correcao-de-provas",
            image: imgCorrecaoProvas,
        },

        {
            id: "5",
            name: "F6",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/rafaelnq/ctd-fe1-checkpoint3",
            image: imgF6,
        },

        {
            id: "6",
            name: "Padaria Pão Quente",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/projeto-site-padaria",
            image: imgPaoQuente,
        },
    ]
    
    return (
        <section className="container-projects" id="projects">
            <h2 className="project-title">Projetos</h2>
            <ul className="list-projects">
                {data.map(({ id, name, image, descricao, link}) => (
                    <a key={id} href={link} target="_blank">
                        <li className="card-projects">
                            <h3>{name}</h3>
                            <img  src={image} width={300}/>
                            <p>{descricao}</p>

                        </li>
                    </a>

                ))}
            </ul>


        </section>
    )
}    