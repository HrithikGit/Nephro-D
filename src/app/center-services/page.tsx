"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const features = [
  'State-of-the-art dialysis machines',
  'Comfortable treatment spaces',
  'Experienced medical staff',
  'Individual TV screens',
  'Free Wi-Fi access',
  'Wheelchair accessible',
  'Parking available',
  'Regular monitoring',
  'Emergency support',
  'Dietary consultation',
]

const treatments = [
  'Hemodialysis',
  'SLED',
  'Plasma Pheresis',
  'Hemoperfusion',
  'CRRT',
  'Hemofeel',
  'Cytosorb',
]

export default function CenterServices() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center justify-center">
        <img src="/photo4.jpg" alt="Center Hero" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 mx-auto max-w-3xl text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">Center-Based Dialysis Services</h1>
            <p className="text-lg text-gray-100 mb-6 drop-shadow">Experience exceptional dialysis care in our modern, comfortable centers. Our state-of-the-art facilities and expert staff ensure you receive the highest quality treatment in a welcoming environment.</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Our Facilities</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border-l-4 border-pink-400 shadow-sm">
                <CheckCircleIcon className="h-6 w-6 text-pink-500 mt-1" />
                <span className="text-gray-800 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="mx-auto max-w-4xl px-4">
          <h3 className="text-2xl font-bold text-pink-600 mb-6 text-center">Dialysis Treatments Offered</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {treatments.map((treatment, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-white rounded-lg p-4 border-l-4 border-blue-400 shadow-sm">
                <span className="text-blue-600 text-2xl">&#9679;</span>
                <span className="text-gray-800 text-lg">{treatment}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact/Appointment Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Contact & Appointment</h3>
          <div className="text-lg font-semibold text-pink-600 mb-2">
            For Appointment or Query: <a href="tel:6303660396" className="underline hover:text-blue-600">6303660396</a>
          </div>

          <p className="text-gray-700">Business category: <span className="font-semibold">Hospital department</span></p>
        </div>
      </section>
    </div>
  )
} 