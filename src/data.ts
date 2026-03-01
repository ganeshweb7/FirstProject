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

export interface SocialLink {
  platform: string;
  url: string;
}

export const shopData = {
  name: "Bhumika Garments",
  proprietor: "Bapu Mahajan",
  tagline: "Your Family's Favorite Fashion Hub",
  phone: "9975345692",
  address: "Minatai Complex, Parola, Dist. Jalgaon",
  email: "contact@bhumikagarments.com",
  collection: [
    {
      id: 1,
      title: "Kids Party Wear Set",
      category: "Kids",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1519457431-7571f018274b?auto=format&fit=crop&q=80&w=800",
      badge: "Pure Cotton"
    },
    {
      id: 2,
      title: "Mens Premium Cotton Shirt",
      category: "Mens",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
      badge: "New Arrival"
    },
    {
      id: 3,
      title: "Ladies Trending Saree",
      category: "Ladies",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
      badge: "Trending"
    },
    {
      id: 4,
      title: "Kids Denim Dungaree",
      category: "Kids",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Mens Slim Fit Jeans",
      category: "Mens",
      price: "₹1,899",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Ladies Designer Gown",
      category: "Ladies",
      price: "₹3,200",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800"
    }
  ],
  offers: {
    title: "Seasonal Celebration",
    discount: "Flat 25% OFF",
    subtitle: "Exclusive deals on Kids, Mens, and Ladies Wear.",
    endsIn: "2 Days"
  },
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

// Keeping portfolioData for compatibility with old components
export const portfolioData = {
  name: "Bhumika Garments",
  brand: "frontendlalit",
  title: "Premium Fashion Hub",
  tagline: "Quality Wear for Kids, Mens & Ladies",
  about: "Located in Minatai Complex, Parola, we provide the best collection of trending apparel.",
  email: "contact@bhumikagarments.com",
  stats: [
    { label: "Happy Customers", value: "5000+" },
    { label: "New Arrivals", value: "100+" },
    { label: "Experience", value: "10+ Yrs" },
    { label: "Quality", value: "100%" }
  ],
  process: [
    { step: "01", title: "Select", desc: "Choose your favorite style." }
  ],
  techStack: [
    { name: "Quality", icon: "✨" }
  ],
  services: [],
  socials: shopData.socials,
  projects: [
    { id: 1, title: "Sample", description: "Sample", tags: [], link: "#", image: "", category: "Kids" as const, price: "" }
  ]
};

export interface Project extends Product {}
