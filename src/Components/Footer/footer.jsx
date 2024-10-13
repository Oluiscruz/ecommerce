import "./footer.scss";
import icon from './eu8.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="footer">
            <div className="infos-footer">
                <p>Todos os direitos reservados utilizados no site pertencem ao Mercado Livre.</p>
            </div>
            <div className="topcs-footer">
                <img
                    src={icon}
                    className="perfil"
                    alt="Foto de Perfil" />

                <div className="links">
                    <a href="https://github.com/Oluiscruz"><FaGithub /> Github</a>
                    <a href="https://www.instagram.com/oluiscruz_/"><FaInstagram /> Instagram</a>
                </div>


            </div>
            <h3>Luis Alberto <FaRegCopyright /></h3>
        </div>
    )
}