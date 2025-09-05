export interface Deal {
  id: string;
  title: string;
  destination: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  image: string;
  validUntil: string;
  features: string[];
  popular: boolean;
}

export const deals: Deal[] = [
  {
    id: "bali-summer-special",
    title: "Bali Summer Special",
    destination: "Bali, Indonesia",
    description: "Enjoy 7 nights at a luxury resort in Bali with daily breakfast, airport transfers, and a complimentary spa treatment.",
    originalPrice: 1499,
    discountedPrice: 899,
    discountPercentage: 40,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1080&auto=format&fit=crop",
    validUntil: "2023-12-15",
    features: [
      "7 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Complimentary spa treatment",
      "Welcome drink"
    ],
    popular: true
  },
  {
    id: "paris-weekend-getaway",
    title: "Paris Weekend Getaway",
    destination: "Paris, France",
    description: "Experience the city of lights with a 3-night stay in central Paris, including Seine river cruise and skip-the-line Eiffel Tower tickets.",
    originalPrice: 899,
    discountedPrice: 699,
    discountPercentage: 22,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1080&auto=format&fit=crop",
    validUntil: "2023-11-30",
    features: [
      "3 nights accommodation",
      "Seine river cruise",
      "Skip-the-line Eiffel Tower tickets",
      "Breakfast included",
      "Walking tour of Montmartre"
    ],
    popular: true
  },
  {
    id: "maldives-all-inclusive",
    title: "Maldives All-Inclusive",
    destination: "Maldives",
    description: "Escape to paradise with 5 nights at an all-inclusive overwater villa in the Maldives, including seaplane transfers and water activities.",
    originalPrice: 3299,
    discountedPrice: 2499,
    discountPercentage: 24,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1080&auto=format&fit=crop",
    validUntil: "2024-03-31",
    features: [
      "5 nights in overwater villa",
      "All meals and drinks",
      "Seaplane transfers",
      "Snorkeling equipment",
      "One sunset fishing trip"
    ],
    popular: true
  },
  {
    id: "japan-cherry-blossom",
    title: "Japan Cherry Blossom Tour",
    destination: "Tokyo & Kyoto, Japan",
    description: "Experience Japan's famous cherry blossom season with a 10-day guided tour including traditional accommodations and cultural experiences.",
    originalPrice: 2899,
    discountedPrice: 2399,
    discountPercentage: 17,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1080&auto=format&fit=crop",
    validUntil: "2023-12-31",
    features: [
      "10 days guided tour",
      "Traditional ryokan stay",
      "Bullet train experience",
      "Tea ceremony",
      "Cherry blossom viewing spots"
    ],
    popular: false
  },
  {
    id: "greek-island-hopping",
    title: "Greek Island Hopping",
    destination: "Santorini, Mykonos & Athens, Greece",
    description: "Explore the best of Greece with this 8-day island hopping adventure including ferry transfers, guided tours, and boutique accommodations.",
    originalPrice: 1899,
    discountedPrice: 1499,
    discountPercentage: 21,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1080&auto=format&fit=crop",
    validUntil: "2024-02-28",
    features: [
      "8 days/7 nights",
      "Ferry transfers between islands",
      "Acropolis guided tour",
      "Santorini sunset cruise",
      "Wine tasting experience"
    ],
    popular: false
  },
  {
    id: "peru-inca-trail",
    title: "Peru & Machu Picchu Adventure",
    destination: "Cusco & Machu Picchu, Peru",
    description: "Trek the famous Inca Trail to Machu Picchu with this 6-day adventure package including permits, equipment, and expert guides.",
    originalPrice: 1999,
    discountedPrice: 1699,
    discountPercentage: 15,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1080&auto=format&fit=crop",
    validUntil: "2024-01-15",
    features: [
      "Inca Trail permit",
      "Professional guides",
      "Camping equipment",
      "All meals during trek",
      "Machu Picchu entrance fee"
    ],
    popular: false
  }
];