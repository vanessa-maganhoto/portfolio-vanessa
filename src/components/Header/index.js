import "./styles.css"
export default function Header(){
    
    function scroll(id){
        document.getElementById(id).scrollIntoView()
    }
    
    return(
        <header>
            <ul className="header-menu">
                <li onClick={()=>scroll("projects")} className="header-item-menu">Projetos</li>
                <li onClick={()=>scroll("ferramentas")} className="header-item-menu">Ferramentas</li>
                <li onClick={()=>scroll("sobre")} className="header-item-menu">Sobre</li>
                <li onClick={()=>scroll("contato")} className="header-item-menu">Contato</li>
            </ul>
        </header>
    )
}