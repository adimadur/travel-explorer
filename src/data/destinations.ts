export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  shortDescription: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  features: string[];
  popular: boolean;
}

export const destinations: Destination[] = [
  {
    id: "bali-indonesia",
    name: "Bali",
    location: "Indonesia",
    description: "Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII war ship. On shore, the lush jungle shelters stone temples and mischievous monkeys. The island's many religious festivals feature colorful processions and traditional dance performances.",
    shortDescription: "Tropical paradise with stunning beaches and vibrant culture.",
    price: 899,
    rating: 4.8,
    reviewCount: 1245,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1080&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1080&auto=format&fit=crop"
    ],
    features: ["Beach Access", "Cultural Tours", "Spa Services", "Water Sports", "Temple Visits"],
    popular: true
  },
  {
    id: "santorini-greece",
    name: "Santorini",
    location: "Greece",
    description: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    shortDescription: "Iconic island with white-washed buildings and breathtaking sunsets.",
    price: 1299,
    rating: 4.9,
    reviewCount: 2134,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1080&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601581875039-e899893d520c?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1080&auto=format&fit=crop"
    ],
    features: ["Sunset Views", "Wine Tasting", "Boat Tours", "Volcanic Beaches", "Luxury Accommodations"],
    popular: true
  },
  {
    id: "kyoto-japan",
    name: "Kyoto",
    location: "Japan",
    description: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It's also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
    shortDescription: "Ancient city with beautiful temples, gardens, and traditional culture.",
    price: 1499,
    rating: 4.7,
    reviewCount: 1876,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1080&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624253321171-1be53e12f5f2?q=80&w=1080&auto=format&fit=crop"
    ],
    features: ["Temple Tours", "Tea Ceremonies", "Bamboo Forest", "Geisha District", "Traditional Ryokan Stay"],
    popular: false
  },
  {
    id: "paris-france",
    name: "Paris",
    location: "France",
    description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    shortDescription: "City of lights with iconic landmarks, art, and culinary excellence.",
    price: 1199,
    rating: 4.6,
    reviewCount: 3245,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1080&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9357976b82?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?q=80&w=1080&auto=format&fit=crop"
    ],
    features: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Culinary Tours", "Shopping"],
    popular: true
  },
  {
    id: "machu-picchu-peru",
    name: "Machu Picchu",
    location: "Peru",
    description: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery.",
    shortDescription: "Ancient Incan citadel nestled in the Andes Mountains.",
    price: 1699,
    rating: 4.9,
    reviewCount: 1543,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1080&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548791843-a6a1f4d9fb7b?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553550765-42a0f32e8f36?q=80&w=1080&auto=format&fit=crop"
    ],
    features: ["Guided Tours", "Inca Trail", "Mountain Views", "Archaeological Sites", "Cultural Experiences"],
    popular: false
  },
  {
    id: "maldives",
    name: "Maldives",
    location: "Maldives",
    description: "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. It's known for its beaches, blue lagoons and extensive reefs. The capital, Malé, has a busy fish market, restaurants and shops on the main road, Majeedhee Magu, and 17th-century Hukuru Miskiy (also known as Friday Mosque) made of carved white coral.",
    shortDescription: "Pristine islands with overwater bungalows and crystal-clear waters.",
    price: 2499,
    rating: 4.9,
    reviewCount: 2876,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1080&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=1080&auto=format&fit=crop"
    ],
    features: ["Overwater Bungalows", "Snorkeling", "Scuba Diving", "Spa Treatments", "Private Beaches"],
    popular: true
  }
];