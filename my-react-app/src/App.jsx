import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // 1. Import Helmet
import SeoModalDemo from "./components/seo_modal";


import asiaImg from "./assets/asia.png";
import techImg from "./assets/tech.png"
import lifeImg from "./assets/lifestyle.png"
import healthImg from "./assets/healthy.png"
import ecomImg from "./assets/ecom.png"

// Custom icon for blog posts
const BlogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-indigo-600"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.75 14.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 .75.75h4.5a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 0-1.5 0v1.5h-3v-1.5Zm-2.75-5.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM7.5 7.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

// 2. Updated blogs array with optimized SEO fields
const blogs = [
  {
    "id": "lifestyle",
    "slug": "simplify-your-life-find-joy",
    "title": "5 Ways to Simplify Your Life and Find More Joy",
    "metaDescription": "Feeling overwhelmed? Discover 5 simple ways to declutter your life, say no more often, and find more joy and peace of mind. Read our guide to simplifying your lifestyle.",
    "category": "Lifestyle",
    "content": `
      <p>In our fast-paced world, it's easy to get caught up in the constant hustle. We're always on the go, juggling multiple tasks and feeling the pressure to do more. But what if the key to happiness isn't about adding more to our lives, but rather, simplifying it?</p>
      
      <h3>The Power of Saying "No"</h3>
      <p>One of the most powerful tools for simplifying your life is learning to say "no." It's not about being unhelpful or selfish. It's about protecting your time and energy so you can focus on what truly matters to you. When you say "yes" to something you don't want to do, you're saying "no" to something you do. Practice setting boundaries and politely declining requests that don't align with your goals or values. You'll be surprised at how much more time and peace of mind you gain.</p>
      
      <h3>Declutter Your Space, Declutter Your Mind</h3>
      <p>The state of your physical environment can have a huge impact on your mental state. A cluttered space often leads to a cluttered mind. Start small. Pick one area, like a drawer or a closet, and get rid of anything you don't need or use. Don't just move things around—actually get rid of them. Donate, recycle, or throw away items that no longer serve a purpose. You'll not only have a cleaner space, but you'll also feel a sense of clarity and lightness.</p>
      
      <h3>Embrace Digital Minimalism</h3>
      <p>In today's digital age, we're constantly bombarded with notifications, emails, and social media updates. This can lead to a feeling of being overwhelmed and distracted. Try a digital detox. Unsubscribe from email lists you don't read, turn off notifications on your phone, and set specific times to check social media. By reducing the noise, you can reclaim your focus and be more present in the moment.</p>
    `,
    "image": {
      "url": lifeImg,
      "altText": "A person meditating in a minimalist, decluttered room."
    }
  },
  {
    "id": "technology",
    "slug": "future-of-ai-innovators",
    "title": "The Future of AI: From Assistants to Innovators",
    "metaDescription": "Explore the future of AI, moving beyond simple automation to becoming a creative partner. Learn about personalized AI, ethical challenges, and where the technology is heading.",
    "category": "Technology",
    "content": `
      <p>Artificial Intelligence is no longer just a buzzword; it's an integral part of our daily lives. From the voice assistant on your phone to the algorithms that recommend what you watch next, AI is quietly shaping our world. But where is it heading next?</p>
      
      <h3>Beyond Automation: AI as a Creative Partner</h3>
      <p>For a long time, AI has been primarily used for automation and data analysis. We've seen it perform tasks like sorting emails and analyzing market trends with incredible efficiency. However, the next frontier for AI is in creative and innovative fields. We're already seeing AI models that can generate art, compose music, and even write code. This isn't about replacing human creativity, but rather about augmenting it. Imagine a world where an AI can help a musician explore new melodies or a designer generate countless new concepts in seconds.</p>
      
      <h3>The Rise of Personalized AI</h3>
      <p>Currently, many AI tools are built for a broad audience. The future will see the rise of highly personalized AI models. These AIs will not only understand your preferences and habits but will also learn and adapt to your unique needs over time. This could lead to a personal AI assistant that manages your entire life, from scheduling your day to helping you make complex financial decisions. The key will be ensuring these personalized AIs are secure and maintain user privacy.</p>
      
      <h3>The Ethical Challenges</h3>
      <p>As AI becomes more sophisticated, so do the ethical challenges. We must consider issues of bias in algorithms, the impact on employment, and the responsibility of developers to create safe and fair AI systems. These conversations are already happening, and they will be crucial in ensuring that the future of AI benefits everyone. The goal is to build an AI-powered world that is not only intelligent but also equitable and just.</p>
    `,
    "image": {
      "url": techImg,
      "altText": "A futuristic image with an AI brain icon, representing the future of artificial intelligence."
    }
  },
  {
    "id": "travel-guide-sustainable-tourism-southeast-asia",
    "slug": "sustainable-tourism-southeast-asia-guide",
    "title": "A Guide to Sustainable Tourism in Southeast Asia",
    "metaDescription": "Learn how to practice sustainable travel in Southeast Asia. Our guide covers eco-friendly accommodations, supporting local communities, and reducing plastic waste for a responsible trip.",
    "category": "Travel & Tourism",
    "content": `
      <p>
        Southeast Asia is one of the world’s top travel destinations, offering everything from the ancient temples of Cambodia to the pristine beaches of the Philippines. As eco-tourism and <strong>sustainable travel in Southeast Asia</strong> become more important, travelers are seeking ways to minimize their environmental impact while exploring responsibly. <strong>Sustainable tourism</strong> is about reducing your carbon footprint, choosing <strong>eco-friendly accommodations</strong>, and respecting the local culture and communities you visit.
      </p>
            
      <h3>Eco-Friendly Hotels and Sustainable Accommodations in Southeast Asia</h3>
      <p>When booking your stay, look for hotels and guesthouses that are committed to sustainability. Many places are now certified as eco-friendly, using renewable energy, conserving water, and supporting local communities. You can often find this information on their websites or through sustainable travel booking platforms. By choosing these options, you're not only reducing your carbon footprint but also supporting businesses that are making a positive impact.</p>
            
      <h3>Support Local Communities and Responsible Tourism</h3>
      <p>One of the best parts of traveling is experiencing local culture. To support the local economy, choose to eat at family-owned restaurants and buy souvenirs directly from local artisans. Instead of large tour companies, consider hiring a local guide. Not only will this ensure your money stays in the community, but you'll also get a more authentic and personal experience.</p>
            
      <h3>Reduce Plastic Waste While Traveling in Asia</h3>
      <p>Plastic waste is a major issue in many parts of the world, and Southeast Asia is no exception. A simple way to help is by carrying a reusable water bottle and a reusable shopping bag. Say "no" to plastic straws and single-use containers. Many places now have water refill stations, and by carrying your own bag, you can avoid using plastic bags at markets. Small actions like these can make a big difference.</p>
    `,
    "image": {
      "url": asiaImg,
      "altText": "A scenic view of a beach and a temple, representing a guide to sustainable travel in Southeast Asia."
    },
    "author": "Your Name",
    "publicationDate": "2025-08-29"
  },
  {
    "id": "health",
    "slug": "mindful-eating-better-digestion",
    "title": "Mindful Eating: A Simple Guide to Better Digestion",
    "metaDescription": "Learn how to improve your digestion and relationship with food through mindful eating. This guide covers slowing down, listening to your body's cues, and eliminating distractions.",
    "category": "Health & Wellness",
    "content": `
      <p>In our busy lives, we often eat on the go or while distracted by our phones or work. This habit can lead to poor digestion and a disconnect from our bodies' hunger and fullness cues. Mindful eating is a practice that can help you reconnect with your food and improve your overall health.</p>
      
      <h3>Slow Down and Savor Each Bite</h3>
      <p>Mindful eating is all about paying attention to the experience of eating. This means slowing down and taking the time to truly savor each bite. Before you eat, take a moment to look at your food. Notice the colors, textures, and aromas. As you eat, chew your food slowly and deliberately. Pay attention to the flavors and how your body is responding. This simple act can help you feel more satisfied with less food and improve your digestion.</p>
      
      <h3>Listen to Your Body's Cues</h3>
      <p>Our bodies have an incredible ability to tell us when we're hungry and when we're full. Unfortunately, we often ignore these signals. Mindful eating encourages you to tune in to these cues. Before you eat, ask yourself: Am I truly hungry? Am I eating out of boredom or stress? During your meal, check in with yourself periodically to see how full you're feeling. When you feel comfortably full, stop eating. This practice can help you avoid overeating and develop a healthier relationship with food.</p>
      
      <h3>Eliminate Distractions</h3>
      <p>One of the biggest obstacles to mindful eating is distractions. When we're watching TV, scrolling on our phones, or working at our desk, we're not paying attention to our food. Try to create a distraction-free environment for your meals. Put away your phone, turn off the TV, and sit at a table. This allows you to focus solely on your food and the experience of eating, leading to better digestion and a greater sense of satisfaction.</p>
    `,
    "image": {
      "url": healthImg,
      "altText": "A bowl of healthy food, representing mindful eating and a balanced lifestyle."
    }
  },
  {
    "id": "ecommerce",
    "slug": "content-strategy-boost-ecommerce-sales",
    "title": "Boost Your E-commerce Sales with a Compelling Content Strategy",
    "metaDescription": "Learn how to boost your e-commerce sales with an effective content strategy. This guide covers creating a problem-solving blog, leveraging user-generated content, and optimizing product descriptions.",
    "category": "E-commerce",
    "content": `
      <p>In the crowded world of e-commerce, it's not enough to just have great products. To stand out, you need to create a compelling content strategy that attracts customers, builds trust, and drives sales. Content is your opportunity to connect with your audience and establish your brand as a trusted authority.</p>
      
      <h3>Create a Blog that Solves Problems</h3>
      <p>A blog is one of the most powerful tools in your e-commerce content arsenal. But don't just write about your products. Instead, focus on solving your customers' problems. If you sell hiking gear, write blog posts about "How to Choose the Right Backpack" or "Tips for Hiking in the Rain." This positions you as a helpful resource, not just a seller. When customers trust you as an expert, they're more likely to buy from you.</p>
      
      <h3>Leverage User-Generated Content</h3>
      <p>Your customers are your best marketers. Encourage them to share photos and videos of your products in use on social media. You can run contests, offer incentives, or simply ask them to use a specific hashtag. Then, with their permission, you can feature this user-generated content on your product pages, social media, and in your emails. This provides social proof and builds a community around your brand.</p>
      
      <h3>Optimize Product Descriptions for Conversions</h3>
      <p>Product descriptions are a crucial part of your content strategy. Don't just list features; tell a story. Describe how the product will make your customers' lives better. Use compelling language that evokes emotion. And don't forget to include keywords that your customers are searching for. A well-written, optimized product description can make the difference between a visitor and a customer.</p>
    `,
    "image": {
      "url": ecomImg,
      "altText": "A digital illustration showing a shopping cart and content icons, representing e-commerce content strategy."
    }
  }
];

// 3. Update all image usage to use the new object structure
const App = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const currentBlog = blogs.find((blog) => blog.id === activeCategory);

  // 4. Use useEffect to update the document title when the active blog changes
  useEffect(() => {
    if (currentBlog) {
      document.title = currentBlog.title;
    } else {
      document.title = "AI-Enhanced SEO Blog Posts that Rank";
    }
  }, [currentBlog]);

  const renderBlog = (blog) => (
    <div key={blog.id} className="p-6 md:p-10 lg:p-12">
      {/* 5. Add Helmet for dynamic meta tags */}
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.metaDescription} />
        {/* Open Graph Tags for social media sharing */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.image.url} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <img
          src={blog.image.url} // Use image object
          alt={blog.image.altText} // Use image object
          className="w-full h-64 object-cover"
        />
        <div className="p-6 md:p-8">
          <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            {blog.title}
          </h1>
          <SeoModalDemo />
          <div
            className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );

  const renderGrid = () => (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>AI-Enhanced SEO Blog Posts that Rank</title>
        <meta
          name="description"
          content="Showcasing my content creation, AI research, and web development skills through a series of optimized blog posts."
        />
      </Helmet>
      <header className="text-center mb-10 w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
        AI-Powered Blog Posts That Rank on Google & Drive Traffic
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        See how expertly crafted blog posts can drive traffic and grow your audience.
        </p>
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-4 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Toggle Dark Mode
        </button> */}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => setActiveCategory(blog.id)}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
          >
            <img
              src={blog.image.url} // Use image object
              alt={blog.image.altText} // Use image object
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col items-start">
              <BlogIcon />
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                {blog.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-2 leading-tight">
                {blog.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={darkMode ? "dark" : ""}>
      {activeCategory ? (
        <>
          <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm py-4 px-6 md:px-12 flex justify-start">
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center space-x-3 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <span>Back to Portfolio</span>
            </button>
          </nav>
          {renderBlog(currentBlog)}
        </>
      ) : (
        renderGrid()
      )}
    </div>
  );
};

export default App;