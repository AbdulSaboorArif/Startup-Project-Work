"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Dedicated Professional Team",
      description:
        "Highly skilled and dedicated agile team for your PHP Laravel Script, Laravel Ecommerce, and Fundraising Script development.",
    },
    {
      id: 2,
      title: "Advanced Laravel Expertise",
      description:
        "Deep knowledge of Laravel framework with proven track record in building scalable, secure, and maintainable applications.",
    },
    {
      id: 3,
      title: "Comprehensive Support",
      description:
        "From initial consultation to post-launch maintenance, we provide complete support throughout your project lifecycle.",
    },
    {
      id: 4,
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest technologies and frameworks to deliver modern, efficient, and future-proof solutions.",
    },
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "200+", label: "Projects Done" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b  ">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/20">
              <div className="aspect-square bg-gradient-to-br from-purple-900/40 via-slate-800 to-slate-900 flex items-center justify-center relative">
                {/* Placeholder for team image */}
                <Image
                  src="/image2.png"
                  alt="Professional Team"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-md border border-purple-500/50 rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">🎯</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Professional Team
                    </p>
                    <p className="text-gray-300 text-xs">
                      Advanced technology at your service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features List */}

          <div className="space-y-6">
            <div className="mb-16 mx-auto ">
              <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Choose Us
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Why Choose Our{" "}
                <div className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Expert Team
                </div>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-center">
                We deliver exceptional results through cutting-edge technology,
                dedicated expertise, and unwavering commitment to your success.
              </p>
            </div>
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-4">
                {/* Checkmark Icon */}
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <div className="w-6 h-6 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 p-6 md:p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div> */}

        <div className="text-center">
          <button className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full transition duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70">
            Let's Work Together →
          </button>
        </div>
      </div>
    </section>
  );
}
