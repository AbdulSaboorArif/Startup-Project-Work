"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#191d38] justify-center overflow-hidden mx-8 my-6 pt-20 pb-20 border-2 border-slate-800 rounded-3xl">
      {/* Background Elements */}
     <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,113,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,113,233,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Welcome to Our Agency</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Agentic AI Solutions for Modern Businesses
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet consectetur. Arcu vestibulum dictumst fermentum rhoncus. Velit dual in
                sagittis.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2 group">
                Our Best Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
            </Link>
            <Link href="/About-us">
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
                About Us
              </button>
            </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-bold text-white">2900+</p>
                <p className="text-gray-400 text-sm mt-2">Project Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">1680+</p>
                <p className="text-gray-400 text-sm mt-2">Customer Reviewed</p>
              </div>
            </div>

            {/* Happy Clients */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-pink-400 border-2 border-slate-900 flex items-center justify-center text-white text-sm font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold">2k Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative h-full flex items-center justify-center">
              {/* Placeholder for hero image */}
              <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                    <Image src="/agentic-ai-testing.png" alt="Hero Image" width={1000} height={500}/>
                  
                  <p className="text-gray-400">Hero Image</p>
                </div>
              </div>

              {/* Floating Badge */}
       
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
