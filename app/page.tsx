"use client"

import { MessageForm } from "@/components/MessageForm"
import { Header } from "@/components/header/Index"
import { SideMenu } from "@/components/side-menu/Index"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <main className="relative h-full bg-[#201F23]">
      <Toaster position="top-center" richColors />
      <Header />
      <MessageForm />
      <SideMenu />
    </main>
  )
}
