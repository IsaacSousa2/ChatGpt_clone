type Props = {

    openSideBarClick : () => void;
    title: string;
    newChatClick: () => void;

}

import { IoMenuSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";



export const Header = ({openSideBarClick, title,newChatClick } : Props) => {

    return(

        <header className="flex justify-between items-center w-full border-b border-b-gray-600 p-2 md:hidden">

            <div onClick={openSideBarClick} className="">
                <IoMenuSharp width={24} height={24} />
            </div>

            <div className="mx-2 truncate">
                {title}
            </div>

            <div onClick={newChatClick} className="">
                <FaPlus height={24} width={24} />
            </div>

        </header>

    )

}