import "./styles.css"


export default function Projects() {
    
    const data = [
        {
            id: "1",
            name: "Loc Imoveis",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/projeto-loc-imoveis",
            image: "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
        },

        {
            id: "2",
            name: "Projeto Cordel",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/projeto-cordel",
            image: "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
        },

        {
            id: "3",
            name: "Lista To-Do",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/Lista-to-do-Checkpoint2",
            image: "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
        },

        {
            id: "4",
            name: "Página Correção de Provas",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/exercicio-correcao-de-provas",
            image: "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
        },

        {
            id: "5",
            name: "F6",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/rafaelnq/ctd-fe1-checkpoint3",
            image: "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
        },

        {
            id: "6",
            name: "Padaria Pão Quente",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's", 
            link: "https://github.com/vanessa-maganhoto/projeto-site-padaria",
            image: "https://howedu.com.br/wp-content/uploads/2021/05/Captura-de-Tela-2021-05-06-a%CC%80s-10.21.22-1024x603.png",
        },
    ]
    
    return (
        <section className="container-projects">
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