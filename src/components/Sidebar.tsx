import { ReactNode } from "react"
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { SidebarButton } from "./SidebarButton";
import { FaRegTrashCan } from "react-icons/fa6";

type Props = {

    open : boolean;
    onClose : () => void;
    onClear : () => void;
    onNewChat : () => void;
    children: ReactNode;

}

export const Sidebar = ({ open, onClose, onNewChat, onClear, children }: Props) => {

    return(

        <section className={`fixed left-0 top-0 bottom-0 text-white ${open ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static `} >

            <div className={`transition-all duration-200 flex h-screen ${open ? 'mr-0' : 'ml-[-800px]'} md:ml-0`}>

                <div className="flex flex-col w-64 p-2 bg-gray-900">

                    <div onClick={onNewChat} className="flex items-center p-3 rounded-md text-sm cursor-pointer border border-white/20 hover:bg-gray-500/20 hover:duration-200">

                        <FaPlus width={16}height={16}/>
                        <h2>Nova conversa</h2>

                    </div>

                    <nav className="flex-1 pl-2 overflow-y-auto">
                        {children}
                    </nav>

                    <div className="border-t border-gray-700 pt-2">

                        <SidebarButton 
                            icon={<FaRegTrashCan />}
                            label="Limpar todas as conversas"
                            onClick={onClear}
                        />

                    </div>

                </div>

                <div onClick={onClose} className="flex justify-center items-center w-10 h-10 cursor-pointer md:hidden">
                    <IoMdClose width={24} height={24} />
                </div>

            </div>

        </section>

    )

}