const data = [
  {
    name: "Cox's Bazar",
    short_description: "Cox’s Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach.",
    long_description: "Cox’s Bazar is known for having the longest sandy sea beach in the world. It is a great tourist destination for those looking to relax by the ocean, enjoy fresh seafood, and explore scenic hills and forests nearby.",
    img: "Cox's.png",
    accommodations: [
      {
        title: "Light bright airy stylish apt & safe peaceful stay",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        features: ["Wifi", "Air conditioning", "Kitchen", "Cancellation flexibility available"],
        rating: 4.9,
        reviews: 20,
        price: 34,
        img: ""
      },
      {
        title: "Apartment in Lost Panorama",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        features: ["Wifi", "Air conditioning", "Kitchen"],
        rating: 4.8,
        reviews: 10,
        price: 52,
        img: ""
      },
      {
        title: "AR Lounge & Pool (r&r + b&b)",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        features: ["Wifi", "Air conditioning", "Pool", "Breakfast included"],
        rating: 4.9,
        reviews: 25,
        price: 44,
        img: ""
      },
      {
        title: "Seaside Haven Studio",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        features: ["Beachfront", "Free parking", "Private balcony"],
        rating: 4.7,
        reviews: 16,
        price: 29,
        img: ""
      },
      {
        title: "Family Resort Suite",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        baths: 2,
        features: ["Garden", "Kids play zone", "Free breakfast"],
        rating: 4.6,
        reviews: 14,
        price: 60,
        img: ""
      },
      {
        title: "Hill View Deluxe Room",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        features: ["Room service", "Mini bar", "Mountain view"],
        rating: 4.4,
        reviews: 8,
        price: 40,
        img: ""
      }
    ]
  },
  {
    name: "Sreemangal",
    short_description: "Known for its tea gardens and natural beauty.",
    long_description: "Sreemangal is the tea capital of Bangladesh, famous for its rolling hills, green landscapes, and peaceful environment. It’s perfect for nature lovers and those who want to experience a calm, serene getaway in the countryside.",
    img: "Sreemongol.png",
    accommodations: [
      {
        title: "Tea Garden Retreat",
        guests: 3,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        features: ["Breakfast included", "Scenic view", "Mosquito nets"],
        rating: 4.7,
        reviews: 15,
        price: 28,
        img: ""
      },
      {
        title: "Rainforest Bungalow",
        guests: 5,
        bedrooms: 2,
        beds: 3,
        baths: 2,
        features: ["Nature trails", "Local guide", "Private balcony"],
        rating: 4.8,
        reviews: 12,
        price: 38,
        img: ""
      },
      {
        title: "Monsoon Eco Lodge",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        features: ["Solar powered", "Eco-friendly", "Breakfast included"],
        rating: 4.5,
        reviews: 10,
        price: 24,
        img: ""
      },
      {
        title: "Lemon Grove Guesthouse",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        baths: 2,
        features: ["Garden access", "Tea plantation view", "Wifi"],
        rating: 4.6,
        reviews: 9,
        price: 36,
        img: ""
      },
      {
        title: "Rustic Treehouse",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        features: ["Treehouse", "Nature view", "Peaceful stay"],
        rating: 4.9,
        reviews: 6,
        price: 30,
        img: ""
      },
      {
        title: "Tea Estate Family Villa",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        baths: 2,
        features: ["Full kitchen", "Mountain view", "BBQ grill"],
        rating: 4.7,
        reviews: 11,
        price: 58,
        img: ""
      }
    ]
  },
  {
    name: "Sundarbans",
    short_description: "Largest mangrove forest and habitat for the Royal Bengal Tiger.",
    long_description: "The Sundarbans is the world’s largest mangrove forest and a UNESCO World Heritage site. It is home to the Royal Bengal Tiger, crocodiles, and rare birds. Tourists can enjoy boat trips through narrow creeks and experience unique wildlife.",
    img: "sundorbon.png",
    accommodations: [
      {
        title: "Mangrove Eco Lodge",
        guests: 4,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        features: ["Eco-friendly", "Boat tours", "Wildlife view"],
        rating: 4.6,
        reviews: 18,
        price: 30,
        img: ""
      },
      {
        title: "Tiger Point Cottage",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        features: ["Quiet zone", "Forest view", "Local meals"],
        rating: 4.5,
        reviews: 9,
        price: 25,
        img: ""
      },
      {
        title: "Jungle Camp Hut",
        guests: 3,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        features: ["Campfire", "Nature walks", "Bug nets"],
        rating: 4.4,
        reviews: 11,
        price: 20,
        img: ""
      },
      {
        title: "Sundarbans Watchtower Lodge",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        baths: 2,
        features: ["Observation deck", "Guided tours", "All meals included"],
        rating: 4.8,
        reviews: 14,
        price: 45,
        img: ""
      },
      {
        title: "Eco River Cabin",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        features: ["Boat stay", "Freshwater fishing", "Solar energy"],
        rating: 4.6,
        reviews: 13,
        price: 35,
        img: ""
      },
      {
        title: "Tiger Bay Tent House",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        features: ["Tent stay", "Adventure vibe", "Community meals"],
        rating: 4.3,
        reviews: 7,
        price: 18,
        img: ""
      }
    ]
  },
  {
    name: "Sajek",
    short_description: "Sajek is a mountain valley in the Chittagong Hill Tracts known for its stunning views and peaceful environment.",
    long_description: "Sajek Valley is often called the ‘Roof of Rangamati’. It's famous for its cloud-touching hills, tribal culture, and natural beauty. A popular place for trekkers and tourists who love scenic landscapes, fresh air, and quiet retreats.",
    img: "Sajek.png",
    accommodations: [
      {
        title: "Cloud View Cottage",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        features: ["Hilltop view", "Private balcony", "Breakfast included"],
        rating: 4.9,
        reviews: 12,
        price: 40,
        img: ""
      },
      {
        title: "Sajek Sky Retreat",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        features: ["Tribal food", "Nature walk", "Bonfire"],
        rating: 4.7,
        reviews: 9,
        price: 55,
        img: ""
      },
      {
        title: "Hillside Wooden Cabin",
        guests: 3,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        features: ["Wooden design", "Mountain view", "Peaceful stay"],
        rating: 4.8,
        reviews: 14,
        price: 38,
        img: ""
      },
      {
        title: "Valley Edge Tent Stay",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        features: ["Tent experience", "Outdoor BBQ", "Nature vibe"],
        rating: 4.6,
        reviews: 7,
        price: 25,
        img: ""
      },
      {
        title: "Sajek Sunset Lodge",
        guests: 5,
        bedrooms: 2,
        beds: 3,
        baths: 2,
        features: ["Sunset view", "Family friendly", "Terrace"],
        rating: 4.5,
        reviews: 10,
        price: 48,
        img: ""
      },
      {
        title: "Tribal Touch Homestay",
        guests: 3,
        bedrooms: 1,
        beds: 2,
        baths: 1,
        features: ["Local culture", "Organic meals", "Village tour"],
        rating: 4.7,
        reviews: 11,
        price: 35,
        img: ""
      }
    ]
  }
];

export default data;