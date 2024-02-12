'use client'

import { ChatArea } from "@/components/ChatArea";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { useState } from "react";

export default function Page() {

  const [sidebarOpened, setSidebarOpened] = useState(true)
  const [chatActive, setchatActive] = useState<Chat>({
    id: '123',
    title: 'Titulo Aleatório',
    messages: [
      {
        id: '99', author : 'me', body: 'Opa, Tudo bem?'  
      },
      {
        id: '100', author : 'ai', body: 'Tudo show! Como posso te ajudar meu caro companheiro?'  
      },
    ]
  })



  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)

  const handleClearConversations = () => {

    

  }

  const handleNewChat = () => {

    

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

          <ChatArea chat= {chatActive} />

        </section>

    </main>

  )

}
