"use client"

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { sendMail } from '@/utils/sendMail'

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

// const FORM_SUBMIT_EMAIL = "abhigba1426@gmail.com"; // <-- Set your email here

export default function Contact() {
	const [submitted, setSubmitted] = useState(false)
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setError(null);
		sendMail({ name, phone, message, subject: "Contact Us" })
			.then(res => {
				setLoading(false);
				if (!res.ok) throw new Error('Failed to submit form.');
				setSubmitted(true);
			})
			.catch(() => {
				setLoading(false);
				setError('There was an error submitting the form. Please try again.');
			});
	}

	function handleClose() {
		setSubmitted(false)
		setName('')
		setPhone('')
		setMessage('')
	}

	return (
		<div className="bg-white min-h-screen">
			<Navigation />
			{/* Hero Section */}
			<section className="relative isolate min-h-screen flex items-center justify-center">
				<img
					src="/photo3.jpg"
					alt="Contact Hero"
					className="absolute inset-0 w-full h-full object-cover object-center z-0"
				/>
				<div className="absolute inset-0 bg-black/40 z-10" />
				<div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-4">
					<div className="flex-1 text-center md:text-left">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-2xl font-bold text-pink-300 mb-4 drop-shadow-lg">
								Send Us a Message
							</h2>
							<h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 drop-shadow-lg">
								Contact Nephro D Tech
							</h1>
						</motion.div>
					</div>
					<div className="flex-1 w-full max-w-md mx-auto">
						{loading ? (
							<div className="flex flex-col items-center justify-center space-y-6 bg-white/90 rounded-2xl p-8 shadow-2xl backdrop-blur-md border border-blue-100">
								<div className="loader mb-4" />
								<p className="text-blue-700 font-semibold">Submitting your message...</p>
							</div>
						) : error ? (
							<div className="flex flex-col items-center justify-center space-y-6 bg-white/90 rounded-2xl p-8 shadow-2xl backdrop-blur-md border border-blue-100">
								<h3 className="text-lg font-bold leading-6 text-red-700 mb-2">{error}</h3>
								<button
									onClick={() => setError(null)}
									className="rounded-md bg-pink-500 px-6 py-2 text-white font-semibold hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
								>
									Try Again
								</button>
							</div>
						) : !submitted ? (
							<form
								onSubmit={handleSubmit}
								className="space-y-6 bg-white/90 rounded-2xl p-8 shadow-2xl backdrop-blur-md border border-blue-100"
							>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Name
									</label>
									<input
										type="text"
										required
										value={name}
										onChange={e => setName(e.target.value)}
										className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-pink-500 bg-white"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Phone
									</label>
									<input
										type="tel"
										required
										value={phone}
										onChange={e => setPhone(e.target.value)}
										className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-pink-500 bg-white"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Message
									</label>
									<textarea
										required
										rows={4}
										value={message}
										onChange={e => setMessage(e.target.value)}
										className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-pink-500 focus:ring-pink-500 bg-white"
									/>
								</div>
								<div className="flex justify-end">
									<button
										type="submit"
										className="rounded-md bg-pink-500 px-6 py-2 text-white font-semibold hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
									>
										Send Message
									</button>
								</div>
							</form>
						) : (
							<div className="flex flex-col items-center justify-center space-y-6 bg-white/90 rounded-2xl p-8 shadow-2xl backdrop-blur-md border border-blue-100">
								<h3 className="text-lg font-bold leading-6 text-green-700 mb-2">
									We have received your message!
								</h3>
								<p className="text-gray-700 text-center">
									We will contact you as soon as possible.
								</p>
								<button
									onClick={handleClose}
									className="rounded-md bg-pink-500 px-6 py-2 text-white font-semibold hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
								>
									Close
								</button>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Contact Info Section */}
			<section className="py-12 bg-white">
				<div className="mx-auto max-w-2xl px-4">
					<h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
						Contact Information
					</h3>
					<ul className="grid gap-4">
						{contactInfo.map((item, idx) => (
							<li
								key={idx}
								className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border-l-4 border-pink-400 shadow-sm"
							>
								<item.icon className="h-6 w-6 text-pink-500 mt-1" />
								<div>
									<div className="text-gray-800 text-lg font-semibold">
										{item.name}
									</div>
									<div className="text-gray-600">{item.description}</div>
									<div className="text-blue-700 font-bold">
										{item.name === 'Phone' ? (
											<a
												href={`tel:${item.value}`}
												className="underline hover:text-pink-600"
											>
												{item.value}
											</a>
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
						For Appointment or Query:{' '}
						<a
							href="tel:6303660396"
							className="underline hover:text-blue-600"
						>
							6303660396
						</a>
					</div>

					<p className="text-gray-700">
						Business category:{' '}
						<span className="font-semibold">Hospital department</span>
					</p>
				</div>
			</section>
		</div>
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