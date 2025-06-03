"use client"

import { useState, createContext } from "react"
import WhatsappFloat from "@/components/WhatsappFloat"
import BookAppointmentDialog from "@/components/BookAppointmentDialog"

export const BookAppointmentContext = createContext<{ openDialog: () => void }>({ openDialog: () => {} })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const openDialog = () => setDialogOpen(true)
  const closeDialog = () => setDialogOpen(false)

  return (
    <BookAppointmentContext.Provider value={{ openDialog }}>
      {children}
      <BookAppointmentDialog open={dialogOpen} onClose={closeDialog} />
      <WhatsappFloat />
    </BookAppointmentContext.Provider>
  )
} 