"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Patient-Centered Care',
    description: 'We prioritize your comfort, safety, and well-being in everything we do.',
    icon: HeartIcon,
  },
  {
    name: 'Expert Team',
    description: 'Our staff consists of highly trained professionals dedicated to providing the best care.',
    icon: UserGroupIcon,
  },
  {
    name: 'Quality & Safety',
    description: 'We maintain the highest standards of care and safety in all our services.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Innovation',
    description: 'We continuously improve our services and adopt the latest medical technologies.',
    icon: SparklesIcon,
  },
]

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center justify-center">
        <img src="/photo6.jpg" alt="About Hero" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 mx-auto max-w-3xl text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">About Nephro D Tech</h1>
            <p className="text-lg text-gray-100 mb-6 drop-shadow">Home Dialysis service on call available 24/7 in Hyderabad. Affordable prices, experienced team, and care at your doorstep.</p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Our Values</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {values.map((value, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border-l-4 border-pink-400 shadow-sm">
                <value.icon className="h-6 w-6 text-pink-500 mt-1" />
                <span className="text-gray-800 text-lg">
                  <span className="font-semibold">{value.name}:</span> {value.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Business Information</h3>
          <p className="text-lg text-gray-700 mb-2">Business name: <span className="font-semibold">Nephro D-tech</span></p>
          <p className="text-lg text-gray-700 mb-2">Business category: <span className="font-semibold">Hospital department</span></p>
          <p className="text-lg text-gray-700 mb-2">Opening date: <span className="font-semibold">13 December 2022</span></p>
          <div className="text-lg font-semibold text-pink-600 mb-2">
            For Appointment: <a href="tel:8464803865" className="underline hover:text-blue-600">8464803865</a>
          </div>
          <div className="text-lg font-semibold text-pink-600 mb-4">
            For Query: <a href="tel:6303660396" className="underline hover:text-blue-600">6303660396</a>
          </div>
        </div>
      </section>
    </div>
  )
} 