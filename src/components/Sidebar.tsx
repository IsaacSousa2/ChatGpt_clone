import { ReactNode } from "react"
import { IoMdClose } from "react-icons/io";

type Props = {

    open : boolean;
    onClose : () => void;
    children: ReactNode;

}

export const Sidebar = ({ open, onClose, children }: Props) => {

    return(

        <section className={`fixed left-0 top-0 bottom-0 text-white ${open ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static `} >

            <div className="">

                <div className="">

                </div>

                <div className="flex justify-center items-center w-10 h-10 cursor-pointer md:hidden">
                    <IoMdClose width={24} height={24} />
                </div>

            </div>

        </section>

    )

}