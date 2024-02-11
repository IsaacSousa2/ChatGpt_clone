'use client'

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function Page() {

  const [sidebarOpened, setSidebarOpened] = useState(true)

  const closeSidebar = () => {
    setSidebarOpened(false)
  }

  const handleClearConversations = () => {

    

  }

  const handeleNewChat = () => {

    

  }

  return(

    <main className="flex min-h-screen bg-gpt-gray">

        <Sidebar 
        open = {sidebarOpened}
        onClose = {closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handeleNewChat}
        >
            <div  className="">...</div>
            
        </Sidebar>

        <section className="flex flex-col w-full">
          <button onClick={() => setSidebarOpened(true)}>Abrir Sidebar</button>
        </section>

    </main>

  )

}
