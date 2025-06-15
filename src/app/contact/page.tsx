"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const contactInfo = [
  {
    name: 'Phone',
    description: 'Call us for immediate assistance',
    value: '6303660396',
    icon: PhoneIcon,
  },
  {
    name: 'Phone',
    description: 'Alternate number',
    value: '6303660396',
    icon: PhoneIcon,
  },
  {
    name: 'Address',
    description: 'Hyderabad, Telangana',
    value: 'Home Dialysis Service, Hyderabad',
    icon: MapPinIcon,
  },
]

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center justify-center">
        <img src="/photo3.jpg" alt="Contact Hero" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-pink-300 mb-4 drop-shadow-lg">Send Us a Message</h2>
              <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">Contact Nephro D Tech</h1>
            </motion.div>
          </div>
          <div className="flex-1 w-full max-w-md mx-auto">
            <form className="space-y-6 bg-white/90 rounded-2xl p-8 shadow-2xl backdrop-blur-md border border-blue-100">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-pink-500 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-pink-500 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea required rows={4} className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-pink-500 bg-white" />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="rounded-md bg-pink-500 px-6 py-2 text-white font-semibold hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-2xl px-4">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Contact Information</h3>
          <ul className="grid gap-4">
            {contactInfo.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border-l-4 border-pink-400 shadow-sm">
                <item.icon className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <div className="text-gray-800 text-lg font-semibold">{item.name}</div>
                  <div className="text-gray-600">{item.description}</div>
                  <div className="text-blue-700 font-bold">
                    {item.name === 'Phone' ? (
                      <a href={`tel:${item.value}`} className="underline hover:text-pink-600">{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="text-lg font-semibold text-pink-600 mb-2">
            For Appointment or Query: <a href="tel:6303660396" className="underline hover:text-blue-600">6303660396</a>
          </div>

          <p className="text-gray-700">Business category: <span className="font-semibold">Hospital department</span></p>
        </div>
      </section>
    </div>
  )
} 