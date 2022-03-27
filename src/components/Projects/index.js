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
            descricao: "Site desenvolvido com React e Spring Boot. Página de cadastro de novos imóveis, paginação, formulário com validação de email e avaliação dos imóveis.", 
            link: "https://github.com/vanessa-maganhoto/projeto-loc-imoveis",
            image: imgLocImoveis,
        },

        {
            id: "2",
            name: "Resolvendo Bhaskara",
            descricao: "Formulário simples para preenchimento dos valores e o retorno do resultado da equação de Bháskara.", 
            link: "https://github.com/vanessa-maganhoto/desafios-JS/tree/main/desafio010",
            image: imgBhaskara,
        },

        {
            id: "3",
            name: "Lista To-Do",
            descricao: "Página desenvolvida como trabalho final da disciplina de Front end II do curso CTD da Digital House. A construção deste projeto foi realizada em parceria com outros colegas.", 
            link: "https://github.com/vanessa-maganhoto/Lista-to-do-Checkpoint2",
            image: imgToDoList,
        },

        {
            id: "4",
            name: "Página Correção de Provas",
            descricao: "Projeto de cadastro de gabarito e conferência das respostas.   ", 
            link: "https://github.com/vanessa-maganhoto/exercicio-correcao-de-provas",
            image: imgCorrecaoProvas,
        },

        {
            id: "5",
            name: "F6",
            descricao: "Página desenvolvida como trabalho final da disciplina de Front End I do curso CTD da Digital House. Para a construção do projeto foi usada a biblioteca Boostrap.", 
            link: "https://github.com/rafaelnq/ctd-fe1-checkpoint3",
            image: imgF6,
        },

        {
            id: "6",
            name: "Padaria Pão Quente",
            descricao: "Página expositiva de uma padaria fictícia desenvolvida durante o curso HTML5 e CSS3: técnicas avançadas.", 
            link: "https://github.com/vanessa-maganhoto/projeto-site-padaria",
            image: imgPaoQuente,
        },
    ]
    
    return (
        <section className="container-projects" id="projects">
            <h2 className="project-title-h2">Projetos</h2>
            <ul className="list-projects">
                {data.map(({ id, name, image, descricao, link}) => (
                    <a key={id} href={link} target="_blank" rel="noreferrer">
                        <li className="card-projects">
                            <h3 className="title-project-h3">{name}</h3>
                            <img  src={image} width={300} alt="Imagem do projeto"/>
                            <p>{descricao}</p>

                        </li>
                    </a>

                ))}
            </ul>


        </section>
    )
}    