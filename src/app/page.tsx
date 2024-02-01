'use client'

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function Page() {

  const [sidebarOpened, setSidebarOpened] = useState(true)

  const closeSidebar = () => {

  }

  return(

    <main className="flex min-h-screen bg-gpt-gray">

        <Sidebar 
        open = {sidebarOpened}
        onClose = {closeSidebar}
        >
            <h1>teste</h1>
        </Sidebar>

        <section className="flex flex-col w-full">
          ...
        </section>

    </main>

  )

}
