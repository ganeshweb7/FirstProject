export interface Product {
  id: number;
  title: string;
  category: "Kids" | "Mens" | "Ladies";
  price: string;
  image: string;
  tags: string[];
  description: string;
  badge?: string;
  link: string;
}

export const shopData = {
  name: "Bhumika Garments",
  proprietor: "Bapu Mahajan",
  tagline: "Where Tradition Meets Modern Elegance",
  phone: "9975345692",
  address: "Minatai Complex, Near Bus Stand, Parola, Dist. Jalgaon",
  email: "contact@bhumikagarments.com",
  openingHours: "10:00 AM - 9:00 PM (All Days)",
  
  about: {
    title: "Over 15 Years of Excellence",
    description: "Bhumika Garments has been a cornerstone of fashion in Parola for over a decade. We specialize in providing high-quality, trendy, and affordable clothing for the entire family. From traditional festive wear to modern casuals, we curate our collection with love and care.",
    features: [
      { title: "Premium Quality", icon: "💎", desc: "Handpicked fabrics that ensure comfort and durability." },
      { title: "Latest Trends", icon: "✨", desc: "Stay ahead with our weekly updated fashion collections." },
      { title: "Best Prices", icon: "🏷️", desc: "Unmatched value with competitive pricing in the market." },
      { title: "Family Shop", icon: "👨‍👩‍👧‍👦", desc: "One-stop destination for Kids, Mens, and Ladies wear." }
    ]
  },

  stats: [
    { label: "Happy Families", value: "15,000+" },
    { label: "Years of Trust", value: "15+" },
    { label: "Daily Designs", value: "50+" },
    { label: "Quality Checks", value: "100%" }
  ],

  collection: [
    {
      id: 1,
      title: "Kids Festive Sherwani",
      category: "Kids",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1519457431-7571f018274b?auto=format&fit=crop&q=80&w=800",
      badge: "Festive Special"
    },
    {
      id: 2,
      title: "Mens Premium Tuxedo",
      category: "Mens",
      price: "₹4,499",
      image: "https://images.unsplash.com/photo-1594932224491-99630e05aa6a?auto=format&fit=crop&q=80&w=800",
      badge: "Royal Collection"
    },
    {
      id: 3,
      title: "Ladies Silk Banarasi",
      category: "Ladies",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
      badge: "Handcrafted"
    },
    {
      id: 4,
      title: "Kids Designer Frock",
      category: "Kids",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800",
      badge: "Soft Fabric"
    },
    {
      id: 5,
      title: "Mens Slim Fit Blazer",
      category: "Mens",
      price: "₹2,899",
      image: "https://images.unsplash.com/photo-1507679799987-c7377ec486b6?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Ladies Evening Gown",
      category: "Ladies",
      price: "₹3,200",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800",
      badge: "Designer Wear"
    }
  ],

  offers: {
    title: "Wedding Season Sale",
    discount: "Flat 30% OFF",
    subtitle: "On all Wedding Collections and Premium Festive Wear. Limited time offer!",
    endsIn: "2 Days"
  },

  reviews: [
    { name: "Rahul Patil", rating: 5, text: "Best shop in Parola! The quality of clothes is amazing and very affordable." },
    { name: "Sneha Mahajan", rating: 5, text: "Love the kids' collection. Very soft fabric and beautiful designs." },
    { name: "Vikram Singh", rating: 4, text: "Great variety for men. Found a perfect tuxedo for my brother's wedding." }
  ],

  faq: [
    { q: "Do you offer alterations?", a: "Yes, we provide free minor alterations for all clothes purchased from our shop." },
    { q: "What are your payment options?", a: "We accept Cash, UPI (GPay/PhonePe), and all major Credit/Debit cards." },
    { q: "Is parking available?", a: "Yes, we have dedicated parking space for our customers in the complex." }
  ],

  gallery: [
    "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621335829175-95f437384d7c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1617114919297-3c8dd6caae21?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1604467731651-3d09640309be?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1529139574466-a301f3d415f2?auto=format&fit=crop&q=80&w=800"
  ],
  socials: [
    { platform: "Instagram", url: "#" },
    { platform: "Facebook", url: "#" },
    { platform: "WhatsApp", url: "https://wa.me/919975345692" }
  ]
};
