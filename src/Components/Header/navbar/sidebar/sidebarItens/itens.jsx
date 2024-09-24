import { FaUser } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { GoPaperAirplane } from "react-icons/go";
import "./itens.scss";
import Search from "../../../../search/search";

export default function ItensSidebar() {

    return (
        <div className="itens">
            <Search />
            <a href="#">
                <IoIosHome /> Início
            </a>
            <a href="#">
                <FaUser /> Conta
            </a>
            <a href="#">
                <GoPaperAirplane /> Contato
            </a>
        </div>
    )
}