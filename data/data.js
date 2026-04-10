// Mock data for digital products
export const digitalProducts = [
  {
    id: 1,
    title: "Leadership Mastery Course",
    description:
      "Transform your leadership skills with this comprehensive online course designed for emerging African leaders. Learn essential leadership principles, team management, and strategic thinking.",
    price: 299,
    image: "/image1.jpg",
    category: "Leadership",
    duration: "8 weeks",
    level: "Intermediate",
    features: [
      "8 comprehensive modules",
      "Live Q&A sessions",
      "Downloadable resources",
      "Certificate of completion",
      "Lifetime access",
    ],
    tags: ["leadership", "management", "career", "professional development"],
  },
  {
    id: 2,
    title: "Career Development Toolkit",
    description:
      "Essential resources and templates to accelerate your professional growth in the tech industry. Includes resume templates, interview guides, and networking strategies.",
    price: 149,
    image: "/image2.svg",
    category: "Career",
    duration: "Self-paced",
    level: "All Levels",
    features: [
      "50+ professional templates",
      "Interview preparation guide",
      "Networking strategy playbook",
      "Salary negotiation toolkit",
      "Personal branding guide",
    ],
    tags: ["career", "resume", "interview", "networking", "templates"],
  },
  {
    id: 3,
    title: "Public Speaking Masterclass",
    description:
      "Build confidence and master the art of public speaking with proven techniques and practice sessions. Perfect for professionals who want to improve their presentation skills.",
    price: 199,
    image: "/image6.avif",
    category: "Communication",
    duration: "6 weeks",
    level: "Beginner to Advanced",
    features: [
      "Video tutorials",
      "Practice exercises",
      "Feedback sessions",
      "Speech templates",
      "Confidence building techniques",
    ],
    tags: ["public speaking", "presentation", "communication", "confidence"],
  },
  {
    id: 4,
    title: "Networking Success Guide",
    description:
      "Learn how to build meaningful professional relationships that advance your career. Discover networking strategies that work in the African business context.",
    price: 99,
    image: "/image7.jpg",
    category: "Networking",
    duration: "4 weeks",
    level: "Beginner",
    features: [
      "Networking frameworks",
      "Conversation starters",
      "Follow-up strategies",
      "Event planning guide",
      "Digital networking tools",
    ],
    tags: ["networking", "relationships", "business", "career growth"],
  },
  {
    id: 5,
    title: "Executive Presence Workshop",
    description:
      "Develop the executive presence needed to lead with authority and inspire others. Learn to command respect and influence in professional settings.",
    price: 249,
    image: "/image8.jpg",
    category: "Leadership",
    duration: "5 weeks",
    level: "Advanced",
    features: [
      "Executive coaching sessions",
      "Body language mastery",
      "Voice and communication",
      "Personal style guide",
      "Leadership assessment",
    ],
    tags: [
      "executive presence",
      "leadership",
      "influence",
      "professional image",
    ],
  },
  {
    id: 6,
    title: "Digital Marketing for Leaders",
    description:
      "Master digital marketing strategies to build your personal brand and thought leadership. Learn social media, content creation, and online presence management.",
    price: 179,
    image: "/image9.jpg",
    category: "Marketing",
    duration: "7 weeks",
    level: "Intermediate",
    features: [
      "Social media strategies",
      "Content creation templates",
      "Brand building guide",
      "Analytics and measurement",
      "Thought leadership framework",
    ],
    tags: [
      "digital marketing",
      "personal brand",
      "social media",
      "content creation",
    ],
  },
  {
    id: 7,
    title: "Entrepreneurship Bootcamp",
    description:
      "Launch your startup with confidence. This comprehensive course covers business planning, funding strategies, and scaling techniques for African entrepreneurs.",
    price: 349,
    image: "/image10.jpg",
    category: "Entrepreneurship",
    duration: "10 weeks",
    level: "All Levels",
    features: [
      "Business plan templates",
      "Funding strategy guide",
      "Legal framework overview",
      "Market research tools",
      "Mentorship sessions",
    ],
    tags: ["entrepreneurship", "startup", "business", "funding", "scaling"],
  },
  {
    id: 8,
    title: "Tech Skills for Executives",
    description:
      "Stay relevant in the digital age with essential tech skills for business leaders. Learn about AI, data analytics, and digital transformation strategies.",
    price: 229,
    image: "/image12.jpg",
    category: "Technology",
    duration: "6 weeks",
    level: "Beginner",
    features: [
      "AI fundamentals",
      "Data analytics basics",
      "Digital transformation guide",
      "Tech trend analysis",
      "Implementation strategies",
    ],
    tags: ["technology", "AI", "data analytics", "digital transformation"],
  },
];

// Helper functions for data manipulation
export const getProductById = (id) => {
  return digitalProducts.find((product) => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return digitalProducts.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

export const searchProducts = (searchTerm) => {
  return digitalProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
};

export const getProductCategories = () => {
  return [...new Set(digitalProducts.map((product) => product.category))];
};

export const getFeaturedProducts = (limit = 3) => {
  return digitalProducts.slice(0, limit);
};
