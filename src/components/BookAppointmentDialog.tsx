"use client"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function BookAppointmentDialog({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Center-Based Dialysis')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Here you would send the data to your backend or API
    onClose()
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-blue-700 mb-4">
                  Book an Appointment
                </Dialog.Title>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                    <select
                      value={service}
                      onChange={e => setService(e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-pink-500"
                    >
                      <option>Center Dialysis</option>
                      <option>Home Dialysis</option>
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-pink-500 px-4 py-2 text-white font-semibold hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
} 