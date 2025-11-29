
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, ShoppingCart } from "lucide-react"



export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  return (
    <header className="sticky top-0 z-50 bg-[#000424] border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-white">
              DP
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">AI Agents</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 space-x-6">
            <Link href="/" className="text-purple-400 hover:text-purple-300 transition">
              Home
            </Link>
        
            <div className="relative group">
            <Link href="/AI-Agents">
              <button className="text-gray-300 hover:text-white transition flex items-center gap-1">
                AI Agents <span className="text-xs">▼</span>
              </button>
            </Link>
            </div>
            <div className="relative group">
              <Link href="/About-us">
                <button className="text-gray-300 hover:text-white transition flex items-center gap-1">
                  About Us <span className="text-xs">▼</span>
                </button>
              </Link>
            </div>

            <Link href="/Contact-us" className="text-gray-300 hover:text-white transition">
              Contact US
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-slate-800 rounded-lg transition text-gray-300 hover:text-white"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="p-2 hover:bg-slate-800 rounded-lg transition text-gray-300 hover:text-white relative">
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
            </button>
            <Link href="/Login"> 
            <button className="hidden sm:block px-6 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition">
              Login
            </button>
             </Link>
             <Link href="/Sign-up">
            <button className="hidden sm:block px-6 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition">
              Signup
            </button>
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition"
            >
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-800 pt-4">
            <Link href="#" className="block text-purple-400 hover:text-purple-300 transition py-2">
              Home
            </Link>
            <Link href="/AI-Agents" className="block text-gray-300 hover:text-white transition py-2">
              AI Agents
            </Link>
            <Link href="/About-us" className="block text-gray-300 hover:text-white transition py-2">
              About Us
            </Link>
            <Link href="/Contact-us" className="block text-gray-300 hover:text-white transition py-2">
              Contact Us
            </Link>
            <Link href="/Login" className="block text-gray-300 hover:text-white transition py-2">
              Login
            </Link>
             <Link href="/Sign-up" className="block text-gray-300 hover:text-white transition py-2">
          
              Signup
        
            </Link>
            <button className="w-full px-6 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition mt-4">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
