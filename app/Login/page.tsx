"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const [keepSignedIn, setKeepSignedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const validateForm = () => {
    const newErrors = { email: "", password: "" }
    let isValid = true

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

    if (!validateForm()) {
      return
    }

    setLoading(true)
    setMessage("")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setMessage("Login successful! Redirecting...")
      setTimeout(() => {
        window.location.href = "/(client_routes)"
      }, 2000)
    } catch (error) {
      setMessage("Error logging in. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#000424] flex">
      {/* Left Side - Product Showcase */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <div className="relative w-full max-w-md h-96 flex flex-col items-center justify-center gap-8">
          <div className="absolute top-0 left-8 w-64 h-80 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">50k</h3>
              <p className="text-slate-400 text-sm">Customers</p>
            </div>
          </div>

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

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-white font-bold text-xl">dpmarket</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">Welcome Back!</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
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

            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`w-full bg-slate-800/50 border ${
                    errors.password ? "border-red-500" : "border-slate-700"
                  } text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all`}
                />
                <span className="absolute right-3 top-3 text-slate-400">🔐</span>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="keepSignedIn"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  className="w-5 h-5 bg-slate-800 border border-slate-600 rounded accent-purple-500 cursor-pointer"
                />
                <label htmlFor="keepSignedIn" className="text-sm text-slate-300 cursor-pointer">
                  Keep me signed in
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 font-semibold">
                Forgot password?
              </Link>
            </div>

            {message && (
              <div
                className={`text-sm p-3 rounded-lg ${
                  message.includes("successful") ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

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
              Sign In With Google
            </button>

            <p className="text-center text-slate-400 text-sm">
              New to the market?{" "}
              <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-semibold">
                sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
