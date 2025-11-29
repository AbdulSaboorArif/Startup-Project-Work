"use client"

import Link from "next/link"
import { useState } from "react"

interface Agent {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  agentUrl: string
}

const agents: Agent[] = [
  {
    id: "1",
    title: "OpenAI - AI-powered platform for building and deploying intelligent applications",
    description: "Build and deploy AI applications with OpenAI's powerful platform",
    category: "OpenAI Agents",
    tags: ["Autonomous Agents", "Decision Making"],
    image: "/ai-agents-platform-dashboard.jpg",
    agentUrl: "https://platform.openai.com",
  },
  {
    id: "2",
    title: "N8N - Workflow automation platform with AI agent integration",
    description: "Automate your workflows with AI-powered agents and integrations",
    category: "NBN Agents",
    tags: ["Workflow Automation", "AI Integration"],
    image: "/workflow-automation-interface.png",
    agentUrl: "https://n8n-grocery-agent.onrender.com/webhook/c5668935-618f-4dd1-9736-7ff49afb7a8d/chat",
  },
  {
    id: "3",
    title: "LangChain - Framework for developing AI agents with natural language understanding",
    description: "Develop intelligent agents using natural language processing",
    category: "OpenAI Agents SDK Kit",
    tags: ["Natural Language Processing", "Conversational AI"],
    image: "/natural-language-processing-ai.jpg",
    agentUrl: "https://langchain.com",
  },
  {
    id: "4",
    title: "Anthropic Claude - Advanced AI model for complex reasoning tasks",
    description: "Harness the power of Claude for sophisticated AI applications",
    category: "Other Agents",
    tags: ["Advanced Reasoning", "Multi-Modal"],
    image: "/advanced-ai-reasoning-model (1).jpg",
    agentUrl: "https://anthropic.com",
  },
  {
    id: "5",
    title: "Google Vertex AI - End-to-end AI platform for enterprise",
    description: "Build and manage AI models at scale with Google's enterprise platform",
    category: "Other Agents",
    tags: ["Enterprise AI", "MLOps"],
    image: "/enterprise-ai-platform-management.jpg",
    agentUrl: "https://cloud.google.com/vertex-ai",
  },
  {
    id: "6",
    title: "AWS SageMaker - Fully managed machine learning service",
    description: "Build, train, and deploy machine learning models quickly",
    category: "Other Agents",
    tags: ["Machine Learning", "Cloud Computing"],
    image: "/machine-learning-cloud-platform.jpg",
    agentUrl: "https://aws.amazon.com/sagemaker",
  },
]

const categories = ["All Agents", "OpenAI Agents", "NBN Agents", "OpenAI Agents SDK Kit", "Other Agents"]

export default function ExploreAIAgents() {
  const [selectedCategory, setSelectedCategory] = useState("All Agents")
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null)

  const filteredAgents =
    selectedCategory === "All Agents" ? agents : agents.filter((agent) => agent.category === selectedCategory)

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore AI Agents</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every month we pick some best products for you. This month's best web themes & templates have arrived,
            chosen by our content specialists
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-linear-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              {/* Agent Image */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {hoveredAgent === agent.id && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                    <a
                      href={agent.agentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      Use the Agent
                    </a>
                  </div>
                )}
              </div>

              {/* Agent Tags */}
              <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Agent Title & Description */}
              <div className="px-6 pb-4">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{agent.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{agent.description}</p>

                {/* Get Started Button */}
                <button className="w-full py-2 px-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full transition duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center">
          <Link href="/AI-Agents">
            <button className="flex items-center gap-2 px-8 py-3 border border-slate-500 text-white rounded-full bg-blue-900 hover:bg-blue-800 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40">
              <span>Explore More Agents</span>
              <span>→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
