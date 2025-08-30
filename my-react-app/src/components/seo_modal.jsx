import { useState } from "react";

const SeoModalDemo = () => {
  const [open, setOpen] = useState(null);

  const sections = [
    {
      title: "Create Blogs That Solve Problems",
      content:
        "We craft blog posts that directly answer your audience’s questions, helping you rank for high-value keywords. By providing genuinely helpful content, you build trust with readers and turn them into paying customers faster."
    },
    {
      title: "Leverage User-Generated Content",
      content:
        "User-generated content adds authenticity and keeps your site fresh without extra effort. Search engines love updated, unique content, and your audience will love seeing real-life examples, reviews, or testimonials—boosting engagement and conversions."
    },
    {
      title: "Optimize Product Descriptions for Sales",
      content:
        "We write product descriptions that don’t just describe—they sell. Optimized for keywords and crafted to capture attention, these descriptions improve search rankings and drive higher click-through and conversion rates."
    },
    {
      title: "Why Using AI Makes Everything Faster & Smarter",
      content:
        "AI tools supercharge content creation by generating high-quality, SEO-friendly copy in minutes instead of hours. Identify trending keywords, structure posts for maximum impact, and maintain a consistent brand voice effortlessly. Get more optimized content, faster—saving you time and giving you an edge over competitors."
    }
  ];

  return (
    <div className="max-w-xl mx-auto space-y-6 p-6">
      {/* SEO explanation */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6 shadow-sm text-center">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">
          How This Boosts Your Website & Sales
        </h1>
        <p className="text-gray-600 text-lg">
          Click each strategy below to discover how it drives more traffic, builds credibility, and converts visitors into customers—fast.
        </p>
      </div>

      {/* Buttons */}
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => setOpen(index)}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-2xl shadow-md hover:bg-blue-700 transition-all text-lg font-semibold text-left flex justify-between items-center"
        >
          {section.title}
          <span className="text-2xl">{open === index ? "−" : "+"}</span>
        </button>
      ))}

      {/* Modal */}
      {open !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl animate-fade-in">
            <button
              onClick={() => setOpen(null)}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 text-3xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-5">{sections[open].title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{sections[open].content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeoModalDemo;
