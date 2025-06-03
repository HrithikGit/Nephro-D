"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

const centers = [
  {
    name: 'ONUS Hospitals',
    address: '17-1-382/N/2 Opp SBI Bank, Champapet, Hyderabad, Telangana 500079',
    mapLink: 'https://maps.apple.com/place?address=17-1-382/N/2%20Opp%20SBI%20Bank%0AChampapet%0AHyderabad%0ATelangana%20500079%0AIndia&coordinate=17.347104,78.520048&name=ONUS%20Hospitals&place-id=I97B37CA265644083&map=explore',
    phone: '8464803865'
  },
  {
    name: 'Apex Hospitals',
    address: 'Hyderabad, Telangana',
    mapLink: 'https://g.co/kgs/sgvXLhq',
    phone: '8464803865'
  },
  {
    name: 'Raghavendra Hospitals - Multi-specialty',
    address: 'Hyderabad, Telangana',
    mapLink: 'https://g.co/kgs/jjCV49c',
    phone: '8464803865'
  },
  {
    name: 'Raghavendra Hospitals - Uppal',
    address: 'Uppal, Hyderabad, Telangana',
    mapLink: 'https://g.co/kgs/jjCV49c',
    phone: '8464803865'
  },
  {
    name: 'Raghavendra Hospitals - Chepapet',
    address: 'Chepapet, Hyderabad, Telangana',
    mapLink: 'https://g.co/kgs/jjCV49c',
    phone: '8464803865'
  },
  {
    name: 'Raghavendra Hospitals - Thuguda',
    address: 'Thuguda, Hyderabad, Telangana',
    mapLink: 'https://g.co/kgs/jjCV49c',
    phone: '8464803865'
  },
  {
    name: 'Brinnova - Rehabilitation Center & Physiotherapy',
    address: 'Banjara Hills, Hyderabad, Telangana',
    mapLink: 'https://g.co/kgs/V9rZC9y',
    phone: '8464803865'
  },
  {
    name: 'Nikhil Hospitals',
    address: 'Hyderabad, Telangana',
    mapLink: 'https://g.co/kgs/pwqsmm5',
    phone: '8464803865'
  }
]

export default function OurCenters() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative isolate min-h-[50vh] flex items-center justify-center">
        <img src="/photo2.jpg" alt="Our Centers Hero" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 mx-auto max-w-3xl text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">Our Centers</h1>
            <p className="text-lg text-gray-100 mb-6 drop-shadow">Find our dialysis centers across Hyderabad. We provide professional dialysis services at multiple locations for your convenience.</p>
          </motion.div>
        </div>
      </section>

      {/* Centers List Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {centers.map((center, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-3">{center.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="h-6 w-6 text-pink-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">{center.address}</p>
                      <a
                        href={center.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 inline-block"
                      >
                        View on Map →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-6 w-6 text-pink-500" />
                    <a href={`tel:${center.phone}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      {center.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Need Help Finding a Center?</h3>
          <div className="text-lg font-semibold text-pink-600 mb-2">
            For Appointment: <a href="tel:8464803865" className="underline hover:text-blue-600">8464803865</a>
          </div>
          <div className="text-lg font-semibold text-pink-600 mb-4">
            For Query: <a href="tel:6303660396" className="underline hover:text-blue-600">6303660396</a>
          </div>
          <p className="text-gray-700">Our team will help you find the nearest center and schedule your appointment.</p>
        </div>
      </section>
    </div>
  )
} 