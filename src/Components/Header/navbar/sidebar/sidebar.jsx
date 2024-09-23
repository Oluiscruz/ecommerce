import './sidebar.scss';
import { IoClose } from "react-icons/io5";
import ItensSidebar from './sidebarItens/itens';

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }
    return (
        <div className="sidebar">
            <div Sidebar={active} />
            <button className='btn-close'>
            <IoClose onClick={closeSidebar} />
            </button>
            <div className="content">
                <ItensSidebar />
            </div>
        </div>
    )
}

export default Sidebar;