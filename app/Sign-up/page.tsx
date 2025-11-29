"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const [agreeTerms, setAgreeTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const validateForm = () => {
    const newErrors = { fullName: "", email: "", password: "" }
    let isValid = true

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      isValid = false
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      isValid = false
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least 1 capital letter"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm() || !agreeTerms) {
      if (!agreeTerms) {
        setMessage("Please agree to the terms & conditions")
      }
      return
    }

    setLoading(true)
    setMessage("")

    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setMessage("Account created successfully! Redirecting...")
      setTimeout(() => {
        // Redirect to dashboard or home
        window.location.href = "/"
      }, 2000)
    } catch (error) {
      setMessage("Error creating account. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#000424] flex">
      {/* Left Side - Product Showcase */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <div className="relative w-full max-w-md h-96 flex flex-col items-center justify-center gap-8">
          {/* Showcase Cards - Mockups */}
          <div className="relative w-full h-full perspective">
            {/* Main Card 1 */}
            <div className="absolute top-0 left-8 w-64 h-80 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">50k</h3>
                <p className="text-slate-400 text-sm">Customers</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute bottom-8 left-0 w-56 h-72 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex flex-col h-full justify-between">
                <div className="text-xs text-purple-400 font-semibold">ANALYTICS</div>
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 bg-slate-700 rounded w-full"></div>
                    <div className="h-2 bg-slate-700 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="absolute bottom-0 right-4 w-56 h-72 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-4 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex flex-col h-full justify-between">
                <div className="text-xs text-purple-400 font-semibold">MARKETPLACE</div>
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-purple-500 to-transparent rounded"></div>
                  <div className="h-3 bg-gradient-to-r from-pink-500 to-transparent rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-white font-bold text-xl">dpmarket</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">Create A Free Account</h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className={`w-full bg-slate-800/50 border ${
                    errors.fullName ? "border-red-500" : "border-slate-700"
                  } text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all`}
                />
                <span className="absolute right-3 top-3 text-slate-400">👤</span>
              </div>
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="infosame@gmail.com"
                  className={`w-full bg-slate-800/50 border ${
                    errors.email ? "border-red-500" : "border-slate-700"
                  } text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all`}
                />
                <span className="absolute right-3 top-3 text-slate-400">✉️</span>
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="8+ characters, 1 Capital letter"
                  className={`w-full bg-slate-800/50 border ${
                    errors.password ? "border-red-500" : "border-slate-700"
                  } text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all`}
                />
                <span className="absolute right-3 top-3 text-slate-400">🔐</span>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-5 h-5 bg-slate-800 border border-slate-600 rounded accent-purple-500 cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-slate-300 cursor-pointer">
                I agree to the <span className="text-purple-400 hover:text-purple-300">terms & conditions</span>
              </label>
            </div>

            {/* Message */}
            {message && (
              <div
                className={`text-sm p-3 rounded-lg ${
                  message.includes("successfully")
                    ? "bg-green-500/20 text-green-300"
                    : message.includes("Error")
                      ? "bg-red-500/20 text-red-300"
                      : "bg-yellow-500/20 text-yellow-300"
                }`}
              >
                {message}
              </div>
            )}

            {/* Create Account Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create An Account"}
            </button>

            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full border border-slate-600 text-white font-semibold py-3 rounded-full hover:border-slate-500 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign Up With Google
            </button>

            {/* Login Link */}
            <p className="text-center text-slate-400 text-sm">
              Already a member?{" "}
              <Link href="/login" className="text-purple-400 hover:text-purple-300 font-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
