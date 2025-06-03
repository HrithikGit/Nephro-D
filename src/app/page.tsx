"use client"

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BookAppointmentDialog from '@/components/BookAppointmentDialog'
import { useState } from 'react'

const services = [
  'Hemo Dialysis (Home service)',
  'SLED',
  'Plasma Pheresis',
  'Hemoperfusion',
  'CRRT',
  'Hemofeel',
  'Cytosorb',
]

const sellingPoints = [
  'Home Dialysis service on call available 24/7 in Hyderabad (Door step)',
  'Care on dialysis by experienced senior technicians and nephrology team',
  'Affordable prices for Home/Hospital dialysis',
  'Service in all hospitals, nursing homes, healthcare & rehab centers',
  'Availability of Dialysis Pack at Affordable Introductory Prices',
]

const contactNumbers = [
  { label: 'For Appointment', number: '8464803865' },
  { label: 'For Query', number: '6303660396' },
]

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center justify-center">
        <img src="/photo1.jpg" alt="Home Hero" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 mx-auto max-w-3xl text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">NEPHRO D TECH</h1>
            <p className="text-xl font-semibold text-pink-300 mb-2 drop-shadow">Care on Dialysis</p>
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow">HOME DIALYSIS ON CALL</h2>
            <p className="text-lg text-gray-100 mb-6 drop-shadow">We provide Dialysis Service in all Hospitals, Nursing Homes, Dialysis at Home, Healthcare & Rehab Centers in Hyderabad.</p>
            <button
              onClick={() => setDialogOpen(true)}
              className="inline-block rounded-md bg-pink-500 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-pink-400 transition-colors"
            >
              Book Appointment
            </button>
            <BookAppointmentDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
          </motion.div>
        </div>
      </section>

      {/* Selling Points Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Why Choose Us?</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {sellingPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border-l-4 border-pink-400 shadow-sm">
                <span className="text-pink-500 text-2xl">&#10003;</span>
                <span className="text-gray-800 text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="mx-auto max-w-4xl px-4">
          <h3 className="text-2xl font-bold text-pink-600 mb-6 text-center">Our Services</h3>
          <ul className="grid gap-6 md:grid-cols-2">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-xl font-bold shadow-sm">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#3B82F6" opacity="0.15"/><path d="M8 12l2 2 4-4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-gray-800 text-lg font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Our Center Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['/photo1.jpg', '/photo2.jpg', '/photo3.jpg'].map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg border border-blue-100 bg-white">
                <img
                  src={src}
                  alt={`Dialysis Center Photo ${idx + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Appointment Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Contact & Appointment</h3>
          <div className="flex flex-col items-center gap-2 mb-4">
            {contactNumbers.map((c, idx) => (
              <div key={idx} className="text-lg font-semibold text-pink-600">
                {c.label}: <a href={`tel:${c.number}`} className="underline hover:text-blue-600">{c.number}</a>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-2">Opening date: <span className="font-semibold">13 December 2022</span></p>
          <p className="text-gray-700">Business category: <span className="font-semibold">Hospital department</span></p>
        </div>
      </section>
    </div>
  )
}
