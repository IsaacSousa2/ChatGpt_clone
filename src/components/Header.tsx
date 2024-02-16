import { IoMenuSharp } from "react-icons/io5";//Importando Icone
import { FaPlus } from "react-icons/fa6";

//Declaração de Props
type Props = {

    openSideBarClick : () => void;
    title: string;
    newChatClick: () => void;

}


//Função principal
export const Header = ({openSideBarClick, title,newChatClick } : Props) => {

    return(

        //Seção principal
        <header className="flex justify-between items-center w-full border-b border-b-gray-600 p-2 md:hidden">

            {/*Icone SideBar*/}
            <div onClick={openSideBarClick} className="cursor-pointer">
                <IoMenuSharp width={24} height={24} />
            </div>

            {/*Titulo*/}
            <div className="mx-2 truncate">
                {title}
            </div>

            {/*Icone Criar Novo Chat*/}
            <div onClick={newChatClick} className="">
                <FaPlus height={24} width={24} />
            </div>

        </header>

    )

}