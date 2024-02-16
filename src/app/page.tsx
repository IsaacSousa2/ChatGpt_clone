'use client'//Convertendo (server components) => client components

import { ChatArea } from "@/components/ChatArea";//Importando o componente de área do chat
import { Footer } from "@/components/Footer";//Importando o componente de rodapé
import { Header } from "@/components/Header";//Importando o component de cabeçalho
import { Sidebar } from "@/components/Sidebar"
import { Chat } from "@/types/Chat";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export default function Page() {

  const [sidebarOpened, setSidebarOpened] = useState(true)
  const [chatList, setChatList] = useState<Chat[]>([])
  const [chatActiveId, setChatActiveId] = useState<string>('')
  const [chatActive, setChatActive] = useState<Chat>()
  const [AILoading, setAILoading] = useState(false) 

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList])


  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)

  const handleClearConversations = () => {

    if(AILoading) return

    setChatActiveId('');
    setChatList([]);

  }

  const handleNewChat = () => {

    if (AILoading) return;

    setChatActiveId('');
    closeSidebar();

  }

  const handleSendMessage = (message: string) => {

    if(!chatActiveId) {
      //Função para abrir novo chat
      let newChatId = uuidv4();
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          { id: uuidv4(), author: 'me', body: message }
        ]
      }, ...chatList]);

      setChatActiveId(newChatId);

    } else {
      //Atualizando chat existente
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(), 
        author: 'me',
       body: message
      });
      setChatList(chatListClone)
    }
    setAILoading(true)

  }

  return(

    <main className="flex min-h-screen bg-gpt-gray">

        <Sidebar 
        open = {sidebarOpened}
        onClose = {closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
        >
            <div  className="">...</div>
            
        </Sidebar>

        <section className="flex flex-col w-full">
           
          <Header 
            openSideBarClick={openSidebar}
            title={``}
            newChatClick={handleNewChat}
          />

          <ChatArea chat= {chatActive} loading={AILoading} />

          <Footer 
            onSendMessage = { handleSendMessage }
            disabled = { AILoading }
          />

        </section>

    </main>

  )

}
