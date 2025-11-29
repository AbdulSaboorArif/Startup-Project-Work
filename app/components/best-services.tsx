"use client"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function BestServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 space-y-4">
              {/* Top Image */}
              <div className="h-60 bg-linear-to-br from-slate-700 to-slate-800 rounded-3xl border border-slate-600 overflow-hidden flex items-center justify-center text-gray-500">
              <Image src="/ai-agents-collaborative-intelligence1.jpg" alt="Project 1" objectFit="cover" width={650} height={300} className="overflow-hidden" />
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-2 gap-4 h-48">
                {/* <Image src="/ai-agents-collaborative-intelligence1.jpg" alt="Project 2" className="rounded-2xl border border-slate-600 w-2" layout="fill"/> */}
                <div className="h-40 bg-linear-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600 overflow-hidden flex items-center justify-center text-gray-500">
                <Image src="/agent.jpg" alt="Project 2" objectFit="cover" width={650} height={800} className="overflow-hidden" />
                </div>
                {/* <div className="h-70 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full border border-slate-600 overflow-hidden flex items-center justify-center text-gray-500">
                <Image src="/images.jpg" alt="Project 3" objectFit="cover" width={650} height={800} className="overflow-hidden h-70" />
                </div> */}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4">About Us</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Best Services We Provide</h2>
              <p className="text-gray-400 leading-relaxed">
                We offer user friendly AI solutions that streamline your workflow and boost productivity. Our team of experts is dedicated to delivering top-notch services tailored to your business needs.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-2">High Quality Services</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet consectetur. Lobortis aliquet tincidunt donec turpis nibh nunc dolor
                    feugiat tellus.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-2">Top Tier Business Acquisition</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet consectetur. Lobortis aliquet tincidunt donec turpis nibh nunc dolor
                    feugiat tellus.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition w-fit">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
