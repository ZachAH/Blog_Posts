import { useState } from "react";

const SeoModalDemo = () => {
  const [open, setOpen] = useState(null);

  const sections = [
    {
      title: "Create a Blog that Solves Problems",
      content:
        "Writing blog posts that solve customer problems helps you rank for long-tail keywords. Search engines reward helpful, in-depth content, and it also builds trust with your audience."
    },
    {
      title: "Leverage User-Generated Content",
      content:
        "UGC provides fresh, unique content for your site without you writing it all. Search engines like updated pages, and UGC adds authenticity and social proof that boosts engagement signals."
    },
    {
      title: "Optimize Product Descriptions for Conversions",
      content:
        "Optimized product descriptions with keywords improve your chances of appearing in search results. Compelling descriptions also increase click-through rate (CTR), which is another positive SEO signal."
    }
  ];

  return (
    <div className="max-w-xl mx-auto space-y-6 p-6">
      {/* SEO explanation */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6 shadow-sm text-center">
  <h1 className="text-2xl font-bold mb-2 text-gray-800">
    Why This Is SEO-Optimized
  </h1>
  <p className="text-gray-600 text-lg">
    Click each strategy below to see how it improves your site's SEO, builds authority, and drives sales.
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
