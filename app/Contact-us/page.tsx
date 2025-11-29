"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Paintbrush as Pinterest, Youtube } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="bg-linear-to-b from-slate-900 to-slate-950 border-b border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-slate-200 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-200">Contact</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Get in touch with us today</h2>
              <p className="text-slate-400 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem facere labore culpitate sint?
                Animi quis illo suscipit autem cum.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-slate-300 text-sm font-semibold mb-2">Give Us A Call</h3>
                <a href="tel:01812345678" className="text-white text-lg font-semibold hover:text-blue-400 transition">
                  01812345678
                </a>
              </div>

              <div>
                <h3 className="text-slate-300 text-sm font-semibold mb-2">Give Us An Email</h3>
                <a
                  href="mailto:dpmarket@gmail.com"
                  className="text-white text-lg font-semibold hover:text-blue-400 transition"
                >
                  dpmarket@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition"
                aria-label="Pinterest"
              >
                <Pinterest size={20} className="text-slate-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition"
                aria-label="YouTube"
              >
                <Youtube size={20} className="text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name here"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Your Mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email here"
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  required
                  rows={6}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-slate-800 transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-b from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-3 rounded-full transition duration-300"
              >
                {isSubmitting ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
