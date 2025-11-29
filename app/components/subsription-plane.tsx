"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import Link from "next/link"

interface Plan {
  name: string
  price: number
  description: string
  features: string[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: "Startup",
    price: 1589,
    description: "Perfect for individuals and small teams",
    features: ["Up to 30 members", "Basic collaboration", "Project management", "Case management", "Email support"],
  },
  {
    name: "Professional",
    price: 1689,
    description: "Best for growing businesses",
    features: [
      "Up to 100 members",
      "Advanced collaboration",
      "Project management",
      "Workflow automation",
      "Priority support",
      "Advanced analytics",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: 2489,
    description: "For established enterprises",
    features: [
      "Unlimited members",
      "Full collaboration suite",
      "Custom workflows",
      "API access",
      "24/7 support",
      "Custom integrations",
    ],
  },
]

export default function Subscription() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getPrice = (price: number) => {
    if (period === "yearly") {
      return Math.floor(price * 12 * 0.85)
    }
    return price
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Flexible Plans For Your Business Growth</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your team. Scale up as your business grows with our flexible pricing.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                period === "monthly" ? "bg-blue-600 text-white" : "bg-slate-800 text-gray-400 hover:text-gray-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod("yearly")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all relative ${
                period === "yearly" ? "bg-blue-600 text-white" : "bg-slate-800 text-gray-400 hover:text-gray-200"
              }`}
            >
              Yearly
              {period === "yearly" && <span className="ml-2 text-xs">Save 15%</span>}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500"
                  : hoveredIndex === index
                    ? "bg-slate-800/80 border-2 border-blue-400"
                    : "bg-slate-800/40 border border-slate-700"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block mb-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">${getPrice(plan.price)}</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
               <Link href="/Contact-us">
                 <button className="w-full py-3 rounded-lg font-semibold transition-all border-2">
                   Get Started
                 </button>
               </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
