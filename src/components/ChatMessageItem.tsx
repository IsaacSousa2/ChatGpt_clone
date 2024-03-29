import { ChatMessage } from "@/types/ChatMessage";
import { LuUser2 } from "react-icons/lu";
import { LiaRobotSolid } from "react-icons/lia";

type Props = {

    item: ChatMessage;

}

export const ChatMessageItem = ({item} : Props) => {

    return(

        <div className={`py-5 ${item.author === 'ai' && 'bg-gray-600/50 '}`}>

            <div className="max-w-4xl m-auto flex">

                <div className={`w-10 h-10 flex 
                justify-center items-center mx-4 md:ml-0 rounded ${item.author === 'ai' ? 'bg-purple-600' : 'bg-blue-700'}`}>

                    {item.author === 'me' && <LuUser2 
                     width={24} height={24} />}
                    {item.author === 'ai' && <LiaRobotSolid width={24} height={24} />}

                </div>

                <div className="flex-1 text-base whitespace-pre-wrap">
                    {item.body}
                </div>
            </div>
        </div>

    )

}