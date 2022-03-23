import "./styles.css"
export default function Header(){
    return(
        <header>
            <ul className="header-menu">
                <li className="header-item-menu">Projetos</li>
                <li className="header-item-menu">Ferramentas</li>
                <li className="header-item-menu">Sobre</li>
                <li className="header-item-menu">Contato</li>
            </ul>
        </header>
    )
}