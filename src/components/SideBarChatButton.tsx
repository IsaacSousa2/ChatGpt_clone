import { Chat } from "@/types/Chat"
import { useState } from "react";
import { CiChat1 } from "react-icons/ci";
import { FaTrash } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type Props = {

    chatItem: Chat;
    active: boolean;
    onClick: (id : string) => void;
    onDelete: (id : string) => void;
    onEdit: (id : string, newTitle: string) => void;

}

export const SideBarChatButton = ({chatItem, active, onClick, onDelete, onEdit} : Props) => {

    const [deleting, setDeleting] =  useState(false)
    const [editing, setEditing] =  useState(false)
    const [titleInput, setTitleInput] =  useState(chatItem.title)

    const handleClickButton = () => {
        if(!deleting || !editing) {
            onClick(chatItem.id)
        }
    }

    const handleConfirmButton = () => {
        if(deleting) onDelete(chatItem.id);

        if(editing && titleInput.trim() !== '') {
            onEdit(chatItem.id, titleInput.trim())
        } 

        setDeleting(false)
        setEditing(false)
    }

    const handleCancelButton = () => {
        setDeleting(false)
        setEditing(false)
    }

    return(

        <div>
            <div className={`flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/10 ${active? 'bg-gray-500/20' : 'bg-transparent'}`}>
                {/*onClick={handleClickButton} causa bugs*/}

                <div className="mr-3 text-white">
                    
                    {!deleting && <CiChat1 width={16} height={16} /> }
                    {deleting && <FaTrash width={16} height={16} /> }

                </div>

                <div className="flex-1 text-sm overflow-x-hidden">

                {editing &&  
                    <input 
                        className="text-white bg-transparent w-full text-sm outline-none border border-blue-500"
                        value={titleInput}
                        onChange={e => setTitleInput(e.target.value)}
                    />
                }
                {!editing  &&  
                    <div onClick={handleClickButton} className="border border-transparent truncate">

                        {!deleting && chatItem.title}
                        {deleting && `Delete "${chatItem.title}"`}

                    </div>
                }

                </div>

                {active && !deleting && !editing && 
                <div className="flex">

                        <div 
                        onClick={() => setEditing(true)}
                        className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                            <FiEdit3 height={16} width={16} />
                        </div>
                        <div 
                        onClick={() => setDeleting(true)}
                        className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                            <FaTrash width={16} height={16} />
                        </div>

                </div>
                }

                {(deleting || editing) && 
                <div className="flex"> 
                        <div 
                        onClick={handleConfirmButton}
                        className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                            <FaCheck height={16} width={16} />
                        </div>
                        <div 
                        onClick={handleCancelButton}
                        className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
                            <IoMdClose width={16} height={16} />
                        </div>
                </div>}

            </div>
        </div>

    )

}