import { FaUser } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { GoPaperAirplane } from "react-icons/go";
import SearchResponse from "../../../../SearchResponse/SearchRes";
import "./itens.scss";

export default function ItensSidebar() {

    return (
        <div className="itens">
            <SearchResponse />
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