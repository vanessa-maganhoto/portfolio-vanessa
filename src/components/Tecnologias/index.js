import "./styles.css"
import { FaBootstrap } from 'react-icons/fa'
import { SiSpringboot, SiJavascript, SiReact } from "react-icons/si"
import { DiHtml5, DiCss3, DiDatabase, DiMysql } from "react-icons/di"
import imagemJunit from "../../assets/junit.png"
import imagemJava from "../../assets/java.png"
import imagemHibernate from "../../assets/hibernate.png"

export default function Tecnologias() {
    return (
        <section>
            <h2 className="tilte-tools">Ferramentas</h2>


            <div className="container-tools">
                <div className="div-tools">
                    <DiHtml5 className="icons"/>
                </div>
                <div className="div-tools">
                    <DiCss3 className="icons"/>
                </div>
                <div className="div-tools">
                    <SiJavascript className="icons"/>
                </div>
                <div className="div-tools">
                    <FaBootstrap className="icons"/>
                </div>
                <div className="div-tools">
                    <SiReact className="icons"/>
                </div>
                <div className="div-tools">
                    <SiSpringboot className="icons"/>                    
                </div>
                <div className="div-tools">
                    <img src={imagemJava} className="icons icon-java"
                    alt="ícone da linguagem Java" />
                </div>
                <div className="div-tools">
                    <img src={imagemJunit} className="icons" alt="ícone JUnit" />
                </div>
                <div className="div-tools">
                    <img src={imagemHibernate} className="icons" alt="ícone hibernate" />
                </div>
                <div className="div-tools">
                    <DiDatabase className="icons"/> 
                </div>
                <div className="div-tools">
                    <DiMysql className="icons"/>
                </div>
            </div>

        </section>
    )
}