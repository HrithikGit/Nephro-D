"use client"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { sendMail } from '@/utils/sendMail'

export default function BookAppointmentDialog({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Center-Based Dialysis')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const indianPhoneRegex = /^[6-9]\d{9}$/;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!indianPhoneRegex.test(phone)) {
      setLoading(false);
      setError('Please enter a valid 10-digit Indian phone number.');
      return;
    }
    try {
      const res = await sendMail({ name, phone, message: service, subject: 'Appointment Booking' });
      setLoading(false);
      if (!res.ok) throw new Error('Failed to submit form.');
      setSubmitted(true);
    } catch {
      setLoading(false);
      setError('There was an error submitting the form. Please try again.');
    }
  }

  function handleClose() {
    setSubmitted(false)
    setName('')
    setPhone('')
    setService('Center-Based Dialysis')
    onClose()
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
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
                {loading ? (
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="loader mb-4" />
                    <p className="text-blue-700 font-semibold">Submitting your appointment...</p>
                  </div>
                ) : error ? (
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-red-700 mb-2">
                      {error}
                    </Dialog.Title>
                    <button
                      onClick={() => setError(null)}
                      className="rounded-md bg-pink-500 px-4 py-2 text-white font-semibold hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      Try Again
                    </button>
                  </div>
                ) : !submitted ? (
                  <>
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                          <span className="text-xs text-gray-500 ml-2">(Enter your 10 digit phone number)</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))}
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
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-green-700 mb-2">
                      Form has been successfully submitted!
                    </Dialog.Title>
                    <p className="text-gray-700 text-center">
                      We will contact you as soon as possible.
                    </p>
                    <button
                      onClick={handleClose}
                      className="rounded-md bg-pink-500 px-4 py-2 text-white font-semibold hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      Close
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

/* Add this CSS for loader spinner (can be in global CSS or inline style):
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ec4899;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
*/