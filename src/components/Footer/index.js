import "./styles.css"
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Footer(){
    return(
        <footer>
       
            <ul className="social-list">
                <a href="https://github.com/vanessa-maganhoto" target="_blank" rel="noreferrer">
                    <li> <SiGithub /> </li>
                </a>

                <a href="https://www.linkedin.com/in/vanessa-matos-5a801416a/" target="_blank" rel="noreferrer">
                    <li className="icon"> <SiLinkedin /> </li>
                </a>
            </ul>
           
        </footer>
    )
}
