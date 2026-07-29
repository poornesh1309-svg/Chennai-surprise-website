import { Service, GalleryItem, FAQItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'birthday-decor',
    name: 'Birthday surprise and Decor',
    shortDesc: 'Our signature balloon decoration Chennai services for dreamy, candy-themed room setups.',
    longDesc: 'We are the leading birthday surprise planners Chennai trusts, serving as expert birthday decorators in Chennai for magical milestones. This package provides top-tier birthday decoration services Chennai clients adore, including home birthday decoration Chennai options and beautiful birthday room decoration in Chennai hotels. We use premium matte balloon decoration Chennai installations, custom arches, organic clouds, fairy lights, and adorable signage.',
    iconName: 'Cake',
    colorTheme: 'yellow',
    tag: 'Sweet Celebrations',
    image: '/IMG_1820.jpg_2K_202607182059.jpeg',
    priceStart: '₹4,499',
    whatsIncluded: [
      '200+ High-quality matte aesthetic balloons',
      'Organic balloon arch, ceiling bunches & floor clusters',
      'Cute "Happy Birthday" neon light banner (rented)',
      'Fairy lights mesh backdrop & elegant hanging ribbons',
      'Adorable birthday crown & custom party poppers'
    ],
    popupGallery: [
      '/birthday-surprise/bday_new_1.png',
      '/birthday-surprise/bday_new_2.png',
      '/birthday-surprise/bday_new_3.png',
      '/birthday-surprise/bday_new_4.png',
      '/birthday-surprise/IMG-20260709-WA0006.jpg',
      '/birthday-surprise/IMG-20260709-WA0010.jpg',
      '/IMG-20260709-WA0003.jpg',
      '/1-1.png',
      '/carousel/IMG_1635.jpg',
      '/carousel/IMG_8097 (1).jpg',
      '/IMG_2038.JPG',
      '/IMG_7657.JPG',
      '/mall.jpg',
      '/IMG_7658.JPG',
      '/carousel/IMG_8405.jpg'
    ]
  },
  {
    id: 'proposal-surprise',
    name: 'Proposal planning and Decor',
    shortDesc: 'A dreamy, breathtaking marriage proposal surprise Chennai setup designed by professional proposal planners Chennai.',
    longDesc: 'Pop the most important question of your life in absolute style! As dedicated proposal planners Chennai couples trust, we coordinate the ultimate marriage proposal surprise Chennai experience. We build a breathtaking, romantic setup using glowing neon "MARRY ME" letters, red-carpet walkways lined with candle jars, heavy dry-ice fog, and premium rose arches at resort lawns or private beach gardens across Chennai.',
    iconName: 'HeartHandshake',
    colorTheme: 'pink',
    tag: 'He Said Yes!',
    image: '/proposal.jpg',
    priceStart: '₹12,499',
    whatsIncluded: [
      'Grand "MARRY ME" or custom light marquee letters',
      'Red carpet entry with warm lanterns & heavy floral accents',
      'Heavy fog dry-ice machine for the magical moment',
      '2 Cold-fire pyrotechnic sparkler guns',
      'Champagne glass set with non-alcoholic sparkly cider'
    ],
    popupGallery: [
      '/proposal-planning/IMG_0482.JPG.jpeg',
      '/proposal-planning/IMG_3755.jpg',
      '/proposal-planning/IMG_5681.JPG',
      '/proposal-planning/IMG_7009.jpg',
      '/proposal-planning/prop_new_1.png',
      '/proposal-planning/prop_new_2.png',
      '/proposal-planning/prop_new_3.png',
      '/proposal-planning/Untitled-design-86.png',
      '/IMG_1840.JPG'
    ]
  },
  {
    id: 'birthday-party-decor',
    name: 'Birthday Party Decor',
    shortDesc: 'A grand theme party decoration service for halls, backyards, and large birthday celebration venues in Chennai.',
    longDesc: 'Transform any venue into a magical birthday party wonderland! Perfect for larger celebrations, first birthdays, milestone events, and themed parties. We handle complete customized stage backdrops, professional light styling, customized welcome archways, table settings, and dynamic balloon and floral structures designed specifically for your party theme.',
    iconName: 'Sparkles',
    colorTheme: 'peach',
    tag: 'Grand Theme Party',
    image: '/birthday.jpg',
    priceStart: '₹9,999',
    whatsIncluded: [
      'Grand customized thematic backdrop & stage decoration',
      'Custom balloon archways, pillars & ceiling clusters',
      'Theme-based entrance gate decor with beautiful signage',
      'Cake cutting table setup with themed props & cake stands',
      'Dynamic LED focus lights & spotlights for the stage'
    ],
    popupGallery: [
      '/birthday-surprise/IMG_2049.JPG',
      '/birthday-surprise/IMG_8956.JPG',
      '/carousel/IMG_7660.JPG.jpeg',
      '/birthday-surprise/IMG-20260709-WA0013.jpg',
      '/birthday-surprise/IMG-20260709-WA0020.jpg',
      '/carousel/IMG_8951.JPG.jpeg',
      '/IMG-0506-Copy-scaled.jpg',
      '/ff.jpg',
      '/IMG_9296.JPG',
      '/2.png',
      '/carousel/IMG_8097 (1).jpg'
    ]
  },
  {
    id: 'romantic-room-decor',
    name: 'Romantic Room Decor',
    shortDesc: 'A cozy, heartwarming romantic room decoration Chennai setup with safe candle light highlights.',
    longDesc: 'Give your partner the ultimate romantic room decoration Chennai experience! This is a highly requested hotel room decoration Chennai service, perfect for anniversaries or a cozy romantic birthday surprise in Chennai. We set up an elegant white fabric frame, print custom photo memories, scatter fresh roses, and arrange a safe candle light room decoration Chennai walkway. It is the perfect romantic decoration for girlfriend Chennai or boyfriend, built with 100% safe, warm-flicker LED tea-lights.',
    iconName: 'Heart',
    colorTheme: 'purple',
    tag: 'Cozy Love',
    image: '/IMG-20260709-WA0021.jpg',
    priceStart: '₹5,999',
    whatsIncluded: [
      'Dreamy white fabric frame setup with warm fairy lights',
      'Premium fresh rose petals (heart design on bed)',
      '50+ electronic warm flicker candles (completely safe)',
      '15-20 customized polaroid prints hung with cute wooden clips',
      'Helium-finish ceiling balloons (10-15 pcs)',
      'Scented wax melts with warm, lovely rose-vanilla fragrance'
    ],
    popupGallery: [
      '/romantic-room/IMG_2481.JPG.jpeg',
      '/romantic-room/IMG_5411.JPG.jpeg',
      '/romantic-room/IMG_5414.JPG.jpeg',
      '/romantic-room/IMG_9042.JPG.jpeg',
      '/romantic-room/IMG_9048.JPG.jpeg'
    ]
  },
  {
    id: 'beach-surprise',
    name: 'Beach Surprise and decor',
    shortDesc: 'A magical, fairy-lit beach surprise Chennai picnic setup on the serene sands of ECR.',
    longDesc: 'Celebrate your special moments by the ocean with our beach surprise Chennai planning! We design an ultra-cozy, high-class wooden teepee tent or coordinate a beautiful beach proposal setup Chennai couples fall in love with. Complete with plush cushions, warm fairy lights, a path of fresh rose petals, delicious custom cupcakes, and a personal unplugged musician to serenade you under the stars on ECR beach.',
    iconName: 'Palmtree',
    colorTheme: 'pink',
    tag: 'Romantic Seaside',
    image: '/Young_friends_surprising_friend_…_202607182105.jpeg',
    priceStart: '₹8,499',
    whatsIncluded: [
      'Handcrafted aesthetic beach tent setup',
      'Elegant floor seating with plush rugs & soft cushions',
      'Fairy lights, warm lanterns & heart candles',
      'Personal unplugged guitarist for 20 mins',
      'Cute customized cake & refreshing mocktails'
    ],
    popupGallery: [
      '/carousel/IMG_1819.jpg',
      '/carousel/IMG_1820.jpg',
      '/carousel/IMG_1836.JPG.jpeg',
      '/carousel/IMG_7228.JPEG',
      '/IMG-20260709-WA0004.jpg'
    ]
  },
  {
    id: 'mall-surprise',
    name: 'Mall Surprise',
    shortDesc: 'A dramatic public proposal or celebration arranged by the top mall surprise planner Chennai team.',
    longDesc: 'Work with the best mall surprise planner Chennai crew to coordinate the perfect public reveal! Imagine walking through Express Avenue or Phoenix Marketcity, when suddenly a gorgeous bouquet is handed to you by a cute mascot, followed by a shower of confetti, custom banners, and your favorite songs. Perfect for social bees who love public attention and high-energy excitement.',
    iconName: 'ShoppingBag',
    colorTheme: 'yellow',
    tag: 'Public Spotlight',
    image: '/Young_friends_surprising_friend_…_202607182108.jpeg',
    priceStart: '₹6,499',
    whatsIncluded: [
      'Mall authorization & venue coordination',
      'Surprise mascot appearance with balloon drop',
      'Public announcement and favorite track playing',
      'Giant gift box containing helium balloons',
      'Surprise dance or singer performance'
    ],
    popupGallery: [
      '/Young_friends_surprising_friend_…_202607182108.jpeg',
      '/carousel/IMG_1635.jpg',
      '/carousel/IMG_8405.jpg',
      '/carousel/IMG_6997.jpg',
      '/carousel/IMG_7660.JPG.jpeg'
    ]
  },
  {
    id: 'flash-mob',
    name: 'Random Flash Mob Surprise',
    shortDesc: 'A thrilling, energetic dance surprise by the premier flash mob organizers Chennai has to offer!',
    longDesc: 'As the most experienced flash mob organizers Chennai has to offer, we make magical moments happen! Our talented troupe will disguise themselves as ordinary bypassers. Suddenly, your song starts playing, and they break into a synchronized, cute dance routine. This makes for an amazing flash mob for proposal Chennai surprise that stops the crowd and creates lasting memories.',
    iconName: 'Users',
    colorTheme: 'mint',
    tag: 'High Energy',
    image: '/flashmob.jpg',
    priceStart: '₹11,999',
    whatsIncluded: [
      '10-15 professional backup dancers & choreographer',
      'Customized dance medley of 3 of your choice songs',
      'Flash mob location permissions & sound system setup',
      'Stinger/confetti blast at the climax',
      'Full cinematic multi-angle video recording'
    ],
    popupGallery: [
      '/flashmob.jpg',
      '/carousel/IMG_1635.jpg',
      '/carousel/IMG_8405.jpg',
      '/carousel/IMG_6997.jpg',
      '/carousel/IMG_7660.JPG.jpeg'
    ]
  },
  {
    id: 'music-surprise',
    name: 'Melodious Music Surprise',
    shortDesc: 'A sweet live music surprise Chennai serenade delivered straight to their doorstep.',
    longDesc: 'Express your feelings with our lovely music surprise Chennai packages! Our incredibly talented unplugged guitarist and vocalist delivers a beautiful live music surprise Chennai serenade right to their home, office, or favorite restaurant. They will perform a customized set of 4-5 romantic or cheerful Tamil, Hindi, or English songs, complete with a customized greeting booklet and delicious treats.',
    iconName: 'Music',
    colorTheme: 'peach',
    tag: 'Sweet Harmony',
    image: '/ff.jpg_202607182053.jpeg',
    priceStart: '₹3,499',
    whatsIncluded: [
      'Professional acoustic vocalist & guitarist',
      'Personalized cute booklet with song lyrics & wishes',
      'Custom box of premium handmade chocolates',
      'Rose gold metallic star-shaped balloons',
      'Digital video keepsake of the performance'
    ],
    popupGallery: [
      '/ff.jpg_202607182053.jpeg',
      '/carousel/IMG_1635.jpg',
      '/carousel/IMG_8405.jpg',
      '/carousel/IMG_6997.jpg',
      '/carousel/IMG_7660.JPG.jpeg'
    ]
  },

  {
    id: 'boat-yacht-surprise',
    name: 'Yacht & Boat Surprise',
    shortDesc: 'Sail into happiness with our exclusive yacht surprise Chennai and boat surprise Chennai celebrations!',
    longDesc: 'Take your celebrations out onto the Bay of Bengal with our premier yacht surprise Chennai options! Board our boutique, highly-decorated private boat or reserve a boat surprise Chennai setup for anniversary milestones. It is perfect for a luxury yacht birthday celebration Chennai cruise or high-end proposals. We dress the deck in soft elegant balloons, serve gourmet treats, and set up a beautiful "Will You Marry Me?" marquee sign with cold fire sparkles.',
    iconName: 'Ship',
    colorTheme: 'purple',
    tag: 'Premium Sailing',
    image: '/yacht.jpg',
    priceStart: '₹14,999',
    whatsIncluded: [
      '1.5 hours private yacht cruise off Chennai coast',
      'Beautiful balloon arch & banner decoration on deck',
      'Gourmet 3-course dinner/lunch for two',
      'Cold fire pyro tech entrance effect',
      'Drone video and professional photography'
    ]
  }
,
  {
    "id": "airport-welcome-surprise",
    "name": "Airport Welcome Surprise",
    "shortDesc": "Experience our beautifully crafted Airport Welcome Surprise package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Airport Welcome Surprise setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/airport-welcome-surprise.mp4",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ],
    popupGallery: [
      '/yacht.jpg',
      '/carousel/IMG_1635.jpg',
      '/carousel/IMG_8405.jpg',
      '/carousel/IMG_6997.jpg',
      '/carousel/IMG_7660.JPG.jpeg'
    ]
  },
  {
    "id": "anniversary-surprise",
    "name": "Anniversary Surprise Proposal",
    "shortDesc": "Experience our beautifully crafted Anniversary Surprise Proposal package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Anniversary Surprise Proposal setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/anniversary-surprise.jpg",
    "imagePosition": "object-[center_15%]",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "balloon-rush-birthday-decor",
    "name": "Balloon Rush Birthday Decor",
    "shortDesc": "Experience our beautifully crafted Balloon Rush Birthday Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Balloon Rush Birthday Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/balloon-rush-birthday-decor.png",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "balloon-tunnel-surprise",
    "name": "Balloon Tunnel Decor",
    "shortDesc": "Experience our beautifully crafted Balloon Tunnel Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Balloon Tunnel Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/balloon-tunnel-surprise.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "beach-proposal-surprise",
    "name": "Beach Surprise Proposal",
    "shortDesc": "Experience our beautifully crafted Beach Surprise Proposal package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Beach Surprise Proposal setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/romantic-beach-surprise.JPEG",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "birthday-home-decor",
    "name": "Birthday Home Decor",
    "shortDesc": "Experience our beautifully crafted Birthday Home Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Birthday Home Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/birthday-home-decor.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "birthday-room-surprise-decor",
    "name": "Birthday Room Surprise Decor",
    "shortDesc": "Experience our beautifully crafted Birthday Room Surprise Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Birthday Room Surprise Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/birthday-room-surprise-decor.JPG",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "birthday-surprise-decor",
    "name": "50th Birthday Surprise Decor",
    "shortDesc": "Experience our beautifully crafted 50th Birthday Surprise Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our 50th Birthday Surprise Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/birthday-surprise-decor.jpeg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "birthday-surprise",
    "name": "Surprise Birthday Visit",
    "shortDesc": "Experience our beautifully crafted Surprise Birthday Visit package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Surprise Birthday Visit setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/birthday-surprise.png",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "car-surprise",
    "name": "Car Surprise",
    "shortDesc": "Experience our beautifully crafted Car Surprise package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Car Surprise setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/car-surprise.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "fairy-style-birthday-decor",
    "name": "Fairy Style Birthday Decor",
    "shortDesc": "Experience our beautifully crafted Fairy Style Birthday Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Fairy Style Birthday Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/fairy-style-birthday-decor.jpeg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "flash-mob-birthday-surprise",
    "name": "Flash Mob Birthday Surprise",
    "shortDesc": "Experience our beautifully crafted Flash Mob Birthday Surprise package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Flash Mob Birthday Surprise setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/flash-mob-birthday-surprise.jpeg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "golden-balloon-rush-birthday-decor",
    "name": "Golden Balloon Rush Birthday Decor",
    "shortDesc": "Experience our beautifully crafted Golden Balloon Rush Birthday Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Golden Balloon Rush Birthday Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/golden-balloon-rush-birthday-decor.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "grand-birthday-decor",
    "name": "Grand Birthday Decor",
    "shortDesc": "Experience our beautifully crafted Grand Birthday Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Grand Birthday Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/grand-birthday-decor.JPG",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "grand-first-birthday-decor",
    "name": "Grand First Birthday Decor",
    "shortDesc": "Experience our beautifully crafted Grand First Birthday Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Grand First Birthday Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/grand-first-birthday-decor.jpeg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "heartin-first-night-room-decor",
    "name": "Heartin First Night Room Decor",
    "shortDesc": "Experience our beautifully crafted Heartin First Night Room Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Heartin First Night Room Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/heartin-first-night-room-decor.jpeg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "jungle-theme-birthday-decor",
    "name": "Jungle Theme Birthday Decor",
    "shortDesc": "Experience our beautifully crafted Jungle Theme Birthday Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Jungle Theme Birthday Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/Jungle-Theme-Birthday-decor.jpeg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "mickymouse-birtday-decor",
    "name": "Mickey Mouse Birthday Decor",
    "shortDesc": "Experience our beautifully crafted Mickey Mouse Birthday Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Mickey Mouse Birthday Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/mickymouse-birtday-decor.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "proposal-surprise-2",
    "name": "Surprise Marriage Proposal",
    "shortDesc": "Experience our beautifully crafted Surprise Marriage Proposal package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Surprise Marriage Proposal setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/proposal-surprise (2).png",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "romantic-first-night-room-decor",
    "name": "Romantic First Night Room Decor",
    "shortDesc": "Experience our beautifully crafted Romantic First Night Room Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Romantic First Night Room Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/romantic-first-night-room-decor.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "simple-rose-decor-surprise",
    "name": "Simple Rose Decor Surprise",
    "shortDesc": "Experience our beautifully crafted Simple Rose Decor Surprise package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Simple Rose Decor Surprise setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/simple-rose-decor-surprise.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "surprise-love-proposal-decor",
    "name": "Surprise Love Proposal Decor",
    "shortDesc": "Experience our beautifully crafted Surprise Love Proposal Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Surprise Love Proposal Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/surprise-love-proposal-decor.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "terrace-air-balloon-surprise",
    "name": "Terrace Air Balloon Surprise",
    "shortDesc": "Experience our beautifully crafted Terrace Air Balloon Surprise package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Terrace Air Balloon Surprise setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/terrace-air-balloon-surprise.png",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "terrace-camp-decor",
    "name": "Terrace Camp Decor",
    "shortDesc": "Experience our beautifully crafted Terrace Camp Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Terrace Camp Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/terrace-camp-decor.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "terrace-prposal-surprise",
    "name": "Terrace Prposal Surprise",
    "shortDesc": "Experience our beautifully crafted Terrace Prposal Surprise package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Terrace Prposal Surprise setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/terrace-prposal-surprise.png",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "terrace-surprise-decor",
    "name": "Terrace Surprise Decor",
    "shortDesc": "Experience our beautifully crafted Terrace Surprise Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Terrace Surprise Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/terrace-surprise-decor.jpeg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "terrace-surprise",
    "name": "Terrace Surprise",
    "shortDesc": "Experience our beautifully crafted Terrace Surprise package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Terrace Surprise setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/terrace-surprise.jpg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "terrace-wedding-anniversary-surprise",
    "name": "Terrace Wedding Anniversary Surprise",
    "shortDesc": "Experience our beautifully crafted Terrace Wedding Anniversary Surprise package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Terrace Wedding Anniversary Surprise setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/terrace-wedding-anniversary-surprise.jpeg",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "theater-surprise-proposal",
    "name": "Theater Surprise Proposal",
    "shortDesc": "Experience our beautifully crafted Theater Surprise Proposal package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Theater Surprise Proposal setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/theater-surprise-proposal.png",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  },
  {
    "id": "wedding-decor",
    "name": "Wedding Decor",
    "shortDesc": "Experience our beautifully crafted Wedding Decor package designed to create magical memories.",
    "longDesc": "Immerse yourself in the magic of our Wedding Decor setup. Carefully curated with premium elements, this package provides everything you need to leave them absolutely speechless and create an unforgettable moment.",
    "iconName": "Sparkles",
    "colorTheme": "pink",
    "tag": "Special Setup",
    "image": "/new-services/wedding-decor.png",
    "priceStart": "₹4,999",
    "whatsIncluded": [
      "Premium high-quality decorations tailored to the theme",
      "Professional setup and seamless execution by our team",
      "Custom ambient lighting and atmospheric details",
      "Dedicated event coordinator for a stress-free experience"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Surprise Setup 1',
    image: '/1-1.png',
    tag: 'photo'
  },
  {
    id: 'gal-2',
    title: 'Surprise Setup 2',
    image: '/81Y1OwaQp4L._AC_SL1500_-600x600.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-3',
    title: 'Surprise Setup 3',
    image: '/ae4b625d0c3c62f9d6d4aa81434a9728.png',
    tag: 'photo'
  },
  {
    id: 'gal-4',
    title: 'Surprise Setup 4',
    image: '/airport.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-5',
    title: 'Surprise Setup 5',
    image: '/anniversary-surprise.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-6',
    title: 'Surprise Setup 6',
    image: '/beach.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-7',
    title: 'Surprise Setup 7',
    image: '/birthday-room-surprise-decor.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-8',
    title: 'Surprise Setup 8',
    image: '/birthday-surprise/bday_new_1.png',
    tag: 'photo'
  },
  {
    id: 'gal-9',
    title: 'Surprise Setup 9',
    image: '/birthday-surprise/bday_new_2.png',
    tag: 'photo'
  },
  {
    id: 'gal-10',
    title: 'Surprise Setup 10',
    image: '/birthday-surprise/bday_new_3.png',
    tag: 'photo'
  },
  {
    id: 'gal-11',
    title: 'Surprise Setup 11',
    image: '/birthday-surprise/bday_new_4.png',
    tag: 'photo'
  },
  {
    id: 'gal-12',
    title: 'Surprise Setup 12',
    image: '/birthday-surprise/IMG-20260709-WA0006.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-13',
    title: 'Surprise Setup 13',
    image: '/birthday-surprise/IMG-20260709-WA0010.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-14',
    title: 'Surprise Setup 14',
    image: '/birthday-surprise/IMG-20260709-WA0013.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-15',
    title: 'Surprise Setup 15',
    image: '/birthday-surprise/IMG-20260709-WA0020.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-16',
    title: 'Surprise Setup 16',
    image: '/birthday-surprise/IMG_2049.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-17',
    title: 'Surprise Setup 17',
    image: '/birthday-surprise/IMG_8956.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-18',
    title: 'Surprise Setup 18',
    image: '/birthday.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-19',
    title: 'Surprise Setup 19',
    image: '/canopy.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-20',
    title: 'Surprise Setup 20',
    image: '/carousel/IMG_1635.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-21',
    title: 'Surprise Setup 21',
    image: '/carousel/IMG_1636.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-22',
    title: 'Surprise Setup 22',
    image: '/carousel/IMG_1819.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-23',
    title: 'Surprise Setup 23',
    image: '/carousel/IMG_1820.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-24',
    title: 'Surprise Setup 24',
    image: '/carousel/IMG_1836.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-25',
    title: 'Surprise Setup 25',
    image: '/carousel/IMG_2478.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-26',
    title: 'Surprise Setup 26',
    image: '/carousel/IMG_5285.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-27',
    title: 'Surprise Setup 27',
    image: '/carousel/IMG_6997.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-28',
    title: 'Surprise Setup 28',
    image: '/carousel/IMG_7228.JPEG',
    tag: 'photo'
  },
  {
    id: 'gal-29',
    title: 'Surprise Setup 29',
    image: '/carousel/IMG_7657.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-30',
    title: 'Surprise Setup 30',
    image: '/carousel/IMG_7658.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-31',
    title: 'Surprise Setup 31',
    image: '/carousel/IMG_7660.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-32',
    title: 'Surprise Setup 32',
    image: '/carousel/IMG_7661.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-33',
    title: 'Surprise Setup 33',
    image: '/carousel/IMG_8097 (1).jpg',
    tag: 'photo'
  },
  {
    id: 'gal-34',
    title: 'Surprise Setup 34',
    image: '/carousel/IMG_8405.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-35',
    title: 'Surprise Setup 35',
    image: '/carousel/IMG_8521.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-36',
    title: 'Surprise Setup 36',
    image: '/carousel/IMG_8951.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-37',
    title: 'Surprise Setup 37',
    image: '/carousel/IMG_9040.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-38',
    title: 'Surprise Setup 38',
    image: '/carousel/IMG_9045.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-39',
    title: 'Surprise Setup 39',
    image: '/carousel/IMG_9082.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-40',
    title: 'Surprise Setup 40',
    image: '/carousel/new_img_1.png',
    tag: 'photo'
  },
  {
    id: 'gal-41',
    title: 'Surprise Setup 41',
    image: '/carousel/new_img_10.png',
    tag: 'photo'
  },
  {
    id: 'gal-42',
    title: 'Surprise Setup 42',
    image: '/carousel/new_img_2.png',
    tag: 'photo'
  },
  {
    id: 'gal-43',
    title: 'Surprise Setup 43',
    image: '/carousel/new_img_3.png',
    tag: 'photo'
  },
  {
    id: 'gal-44',
    title: 'Surprise Setup 44',
    image: '/carousel/new_img_4.png',
    tag: 'photo'
  },
  {
    id: 'gal-45',
    title: 'Surprise Setup 45',
    image: '/carousel/new_img_5.png',
    tag: 'photo'
  },
  {
    id: 'gal-46',
    title: 'Surprise Setup 46',
    image: '/carousel/new_img_6.png',
    tag: 'photo'
  },
  {
    id: 'gal-47',
    title: 'Surprise Setup 47',
    image: '/carousel/new_img_7.png',
    tag: 'photo'
  },
  {
    id: 'gal-48',
    title: 'Surprise Setup 48',
    image: '/carousel/new_img_8.png',
    tag: 'photo'
  },
  {
    id: 'gal-49',
    title: 'Surprise Setup 49',
    image: '/carousel/new_img_9.png',
    tag: 'photo'
  },
  {
    id: 'gal-50',
    title: 'Surprise Setup 50',
    image: '/chennai-surprise-logo.png',
    tag: 'photo'
  },
  {
    id: 'gal-51',
    title: 'Surprise Setup 51',
    image: '/ff.jpg_202607182053.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-52',
    title: 'Surprise Setup 52',
    image: '/flashmob.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-53',
    title: 'Surprise Setup 53',
    image: '/grand-birthday-decor.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-54',
    title: 'Surprise Setup 54',
    image: '/IMG-0506-Copy-scaled.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-55',
    title: 'Surprise Setup 55',
    image: '/IMG-20260709-WA0004.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-56',
    title: 'Surprise Setup 56',
    image: '/IMG-20260709-WA0005.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-57',
    title: 'Surprise Setup 57',
    image: '/IMG-20260709-WA0006.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-58',
    title: 'Surprise Setup 58',
    image: '/IMG-20260709-WA0007.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-59',
    title: 'Surprise Setup 59',
    image: '/IMG-20260709-WA0008.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-60',
    title: 'Surprise Setup 60',
    image: '/IMG-20260709-WA0009.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-61',
    title: 'Surprise Setup 61',
    image: '/IMG-20260709-WA0011.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-62',
    title: 'Surprise Setup 62',
    image: '/IMG-20260709-WA0013.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-63',
    title: 'Surprise Setup 63',
    image: '/IMG-20260709-WA0016.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-64',
    title: 'Surprise Setup 64',
    image: '/IMG-20260709-WA0017.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-65',
    title: 'Surprise Setup 65',
    image: '/IMG-20260709-WA0018.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-66',
    title: 'Surprise Setup 66',
    image: '/IMG-20260709-WA0019.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-67',
    title: 'Surprise Setup 67',
    image: '/IMG-20260709-WA0020.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-68',
    title: 'Surprise Setup 68',
    image: '/IMG-20260709-WA0021.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-69',
    title: 'Surprise Setup 69',
    image: '/IMG-20260709-WA0023.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-70',
    title: 'Surprise Setup 70',
    image: '/IMG-20260709-WA0024.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-71',
    title: 'Surprise Setup 71',
    image: '/IMG-20260709-WA0025.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-72',
    title: 'Surprise Setup 72',
    image: '/IMG-20260709-WA0026.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-73',
    title: 'Surprise Setup 73',
    image: '/IMG-20260709-WA0027.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-74',
    title: 'Surprise Setup 74',
    image: '/IMG-2079-300x300.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-75',
    title: 'Surprise Setup 75',
    image: '/IMG-2148-300x300.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-76',
    title: 'Surprise Setup 76',
    image: '/IMG_1727.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-77',
    title: 'Surprise Setup 77',
    image: '/IMG_1820.jpg_2K_202607182059.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-78',
    title: 'Surprise Setup 78',
    image: '/IMG_1840.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-79',
    title: 'Surprise Setup 79',
    image: '/IMG_2038.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-80',
    title: 'Surprise Setup 80',
    image: '/IMG_2478.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-81',
    title: 'Surprise Setup 81',
    image: '/IMG_4993.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-82',
    title: 'Surprise Setup 82',
    image: '/IMG_5112.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-83',
    title: 'Surprise Setup 83',
    image: '/IMG_5411.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-84',
    title: 'Surprise Setup 84',
    image: '/IMG_5414.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-85',
    title: 'Surprise Setup 85',
    image: '/IMG_5456.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-86',
    title: 'Surprise Setup 86',
    image: '/IMG_5675.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-87',
    title: 'Surprise Setup 87',
    image: '/IMG_5681.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-88',
    title: 'Surprise Setup 88',
    image: '/IMG_6002.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-89',
    title: 'Surprise Setup 89',
    image: '/IMG_6306.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-90',
    title: 'Surprise Setup 90',
    image: '/IMG_6997.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-91',
    title: 'Surprise Setup 91',
    image: '/IMG_7001.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-92',
    title: 'Surprise Setup 92',
    image: '/IMG_7007.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-93',
    title: 'Surprise Setup 93',
    image: '/IMG_7009.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-94',
    title: 'Surprise Setup 94',
    image: '/IMG_7657.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-95',
    title: 'Surprise Setup 95',
    image: '/IMG_7658.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-96',
    title: 'Surprise Setup 96',
    image: '/IMG_7659.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-97',
    title: 'Surprise Setup 97',
    image: '/IMG_7660.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-98',
    title: 'Surprise Setup 98',
    image: '/IMG_7661.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-99',
    title: 'Surprise Setup 99',
    image: '/IMG_9296.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-100',
    title: 'Surprise Setup 100',
    image: '/IMG_9297.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-101',
    title: 'Surprise Setup 101',
    image: '/mall.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-102',
    title: 'Surprise Setup 102',
    image: '/music.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-103',
    title: 'Surprise Setup 103',
    image: '/new-services/anniversary-surprise.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-104',
    title: 'Surprise Setup 104',
    image: '/new-services/balloon-rush-birthday-decor.png',
    tag: 'photo'
  },
  {
    id: 'gal-105',
    title: 'Surprise Setup 105',
    image: '/new-services/balloon-tunnel-surprise.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-106',
    title: 'Surprise Setup 106',
    image: '/new-services/beach-proposal-surprise.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-107',
    title: 'Surprise Setup 107',
    image: '/new-services/birthday-home-decor.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-108',
    title: 'Surprise Setup 108',
    image: '/new-services/birthday-room-surprise-decor.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-109',
    title: 'Surprise Setup 109',
    image: '/new-services/birthday-surprise-decor.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-110',
    title: 'Surprise Setup 110',
    image: '/new-services/birthday-surprise.png',
    tag: 'photo'
  },
  {
    id: 'gal-111',
    title: 'Surprise Setup 111',
    image: '/new-services/car-surprise.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-112',
    title: 'Surprise Setup 112',
    image: '/new-services/fairy-style-birthday-decor.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-113',
    title: 'Surprise Setup 113',
    image: '/new-services/fairytail-birthday-surprise.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-114',
    title: 'Surprise Setup 114',
    image: '/new-services/flash-mob-birthday-surprise.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-115',
    title: 'Surprise Setup 115',
    image: '/new-services/golden-balloon-rush-birthday-decor.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-116',
    title: 'Surprise Setup 116',
    image: '/new-services/grand-birthday-decor.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-117',
    title: 'Surprise Setup 117',
    image: '/new-services/grand-first-birthday-decor.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-118',
    title: 'Surprise Setup 118',
    image: '/new-services/heartin-first-night-room-decor.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-119',
    title: 'Surprise Setup 119',
    image: '/new-services/Jungle-Theme-Birthday-decor.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-120',
    title: 'Surprise Setup 120',
    image: '/new-services/mickymouse-birtday-decor.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-121',
    title: 'Surprise Setup 121',
    image: '/new-services/proposal-surprise (2).png',
    tag: 'photo'
  },
  {
    id: 'gal-122',
    title: 'Surprise Setup 122',
    image: '/new-services/romantic-first-night-room-decor (2).jpg',
    tag: 'photo'
  },
  {
    id: 'gal-123',
    title: 'Surprise Setup 123',
    image: '/new-services/romantic-first-night-room-decor.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-124',
    title: 'Surprise Setup 124',
    image: '/new-services/simple-rose-decor-surprise.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-125',
    title: 'Surprise Setup 125',
    image: '/new-services/surprise-love-proposal-decor.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-126',
    title: 'Surprise Setup 126',
    image: '/new-services/terrace-air-balloon-surprise.png',
    tag: 'photo'
  },
  {
    id: 'gal-127',
    title: 'Surprise Setup 127',
    image: '/new-services/terrace-camp-decor.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-128',
    title: 'Surprise Setup 128',
    image: '/new-services/terrace-prposal-surprise.png',
    tag: 'photo'
  },
  {
    id: 'gal-129',
    title: 'Surprise Setup 129',
    image: '/new-services/terrace-surprise-decor.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-130',
    title: 'Surprise Setup 130',
    image: '/new-services/terrace-surprise.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-131',
    title: 'Surprise Setup 131',
    image: '/new-services/terrace-wedding-anniversary-surprise.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-132',
    title: 'Surprise Setup 132',
    image: '/new-services/theater-surprise-proposal.png',
    tag: 'photo'
  },
  {
    id: 'gal-133',
    title: 'Surprise Setup 133',
    image: '/new-services/wedding-decor.png',
    tag: 'photo'
  },
  {
    id: 'gal-134',
    title: 'Surprise Setup 134',
    image: '/proposal-planning/IMG_0482.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-135',
    title: 'Surprise Setup 135',
    image: '/proposal-planning/IMG_3755.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-136',
    title: 'Surprise Setup 136',
    image: '/proposal-planning/IMG_5681.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-137',
    title: 'Surprise Setup 137',
    image: '/proposal-planning/IMG_7009.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-138',
    title: 'Surprise Setup 138',
    image: '/proposal-planning/prop_new_1.png',
    tag: 'photo'
  },
  {
    id: 'gal-139',
    title: 'Surprise Setup 139',
    image: '/proposal-planning/prop_new_2.png',
    tag: 'photo'
  },
  {
    id: 'gal-140',
    title: 'Surprise Setup 140',
    image: '/proposal-planning/prop_new_3.png',
    tag: 'photo'
  },
  {
    id: 'gal-141',
    title: 'Surprise Setup 141',
    image: '/proposal-planning/Untitled-design-86.png',
    tag: 'photo'
  },
  {
    id: 'gal-142',
    title: 'Surprise Setup 142',
    image: '/proposal.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-143',
    title: 'Surprise Setup 143',
    image: '/romantic-beach-surprise.JPEG',
    tag: 'photo'
  },
  {
    id: 'gal-144',
    title: 'Surprise Setup 144',
    image: '/romantic-room/IMG_2481.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-145',
    title: 'Surprise Setup 145',
    image: '/romantic-room/IMG_5411.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-146',
    title: 'Surprise Setup 146',
    image: '/romantic-room/IMG_5414.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-147',
    title: 'Surprise Setup 147',
    image: '/romantic-room/IMG_9042.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-148',
    title: 'Surprise Setup 148',
    image: '/romantic-room/IMG_9048.JPG.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-149',
    title: 'Surprise Setup 149',
    image: '/simple-rose-decor-surprise.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-150',
    title: 'Surprise Setup 150',
    image: '/terrace-birthday-decor.JPG',
    tag: 'photo'
  },
  {
    id: 'gal-151',
    title: 'Surprise Setup 151',
    image: '/terrace-camp-decor.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-152',
    title: 'Surprise Setup 152',
    image: '/terrace-surprise.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-153',
    title: 'Surprise Setup 153',
    image: '/wedding-decor.png',
    tag: 'photo'
  },
  {
    id: 'gal-154',
    title: 'Surprise Setup 154',
    image: '/yacht.jpg',
    tag: 'photo'
  },
  {
    id: 'gal-155',
    title: 'Surprise Setup 155',
    image: '/Young_friends_surprising_friend_2K_202607182136.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-156',
    title: 'Surprise Setup 156',
    image: '/Young_friends_surprising_friend_…_202607182105.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-157',
    title: 'Surprise Setup 157',
    image: '/Young_friends_surprising_friend_…_202607182108.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-158',
    title: 'Surprise Setup 158',
    image: '/Young_man_proposing_to_lover_202607182128.jpeg',
    tag: 'photo'
  },
  {
    id: 'gal-159',
    title: 'Airport Welcome Surprise',
    image: '/new-services/airport-welcome-surprise.mp4',
    tag: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Dummy link to avoid breaking
  }
];;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't0',
    name: 'Malavika ML',
    location: 'Chennai',
    quote: 'What an amazing experience! The surprise team did a fantastic job, from planning to execution within a short span, everything was flawless. The prank was insanely real hats off to the team lead Mr.Vijay for coordinating it so smoothly. And the dancers, Mr. Sandy, Santosh, Jakier Kamalesh and team WOW! Such an energetic, absolutely entertaining and stunning performance. You guys made the day unforgettable. Thank you team for turning the birthday into a beautiful memory. Highly recommended for anyone looking to create a truly unforgettable unique surprise!!',
    rating: 5,
    avatarSeed: 'malavika',
    serviceName: 'Flash Mob Surprise'
  },
  {
    id: 't1',
    name: 'Niyaz Karippal',
    location: 'Chennai',
    quote: 'Perfect gift and excellent service! I ordered a birthday cake and flowers for my friend, and everything arrived exactly on time. The cake was delicious and the flowers were beautiful. I was kept updated throughout the entire delivery process by their staff Vijay. This is my first time using this service, and I\'m very satisfied. Highly recommend and will use again!',
    rating: 5,
    avatarSeed: 'niyaz',
    serviceName: 'Birthday Cake & Flowers'
  },
  {
    id: 't2',
    name: 'Vini Sha',
    location: 'Chennai',
    quote: 'I came across their page randomly through a reel and loved how they surprised people. Chennai Surprise did a fantastic job! I truly want to thank them for the effort and the beautiful decoration they did. I strongly recommend their service. They didn’t even ask for an advance payment, even after knowing I was out of the city, thank you for that. ♥️ A special thanks to Vijay and Arjun for their patience. They literally waited for 3 hours to make sure the person I wanted to surprise was genuinely surprised by the plan they executed.',
    rating: 5,
    avatarSeed: 'vini',
    serviceName: 'Surprise Decoration'
  },
  {
    id: 't3',
    name: 'Arya Nepaul',
    location: 'Chennai',
    quote: 'Vijay, and his team , Kamlesh and Saran— did a wonderful job for a birthday decoration, on very short notice.. they came and set up everything and put in so much hardwork! Truly a great team to rely on for last minute surprises and big time events! I was able to trust them, and they set all this up within a matter of an hour and we were right on time for the birthday!! I recommend them for all your decorations!',
    rating: 5,
    avatarSeed: 'arya',
    serviceName: 'Birthday Decoration'
  },
  {
    id: 't4',
    name: 'Priyasargunaseelan',
    location: 'Chennai',
    quote: 'I have booked Chennai Surprise for my fiance\'s birthday. The surprise was really amazing. My fiance and I were very much happy. Vijay and their team did a wonderful surprise. I really don\'t have any words to explain the surprise. They have made our day more special and memorable. Thank you Chennai Surprise team for the wonderful surprise event.',
    rating: 5,
    avatarSeed: 'priya',
    serviceName: 'Fiance Birthday Surprise'
  },
  {
    id: 't5',
    name: 'Teena Vinu',
    location: 'Chennai',
    quote: 'big thank you to the Chennai Surprise Team! ❤️ Thank you so much🙏🏼🙏🏼🙏🏼 Vijay sir for beautifully planning and arranging my friend’s birthday surprise. Even though I’m in Sri Lanka, being able to surprise my friend in India was such a special moment for me. The way you organized everything was truly impressive! 🥰 A heartfelt thanks for all your efforts please keep spreading happiness to many more people like this!',
    rating: 5,
    avatarSeed: 'teena',
    serviceName: 'Remote Birthday Surprise'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How far in advance should I book with surprise party organizers Chennai?',
    answer: 'We recommend booking at least 3-5 days in advance for regular setups like a home birthday decoration Chennai, and 7-10 days for high-end events handled by our professional proposal planners Chennai (such as a Yacht surprise Chennai, Boat surprise Chennai, or customized flash mob organizers Chennai setups). However, as leading customized surprise planners Chennai, we also take last-minute urgent requests if slots are free!',
    category: 'booking'
  },
  {
    question: 'Can you customize the birthday decoration services Chennai theme or songs?',
    answer: 'Absolutely! As the premier customized surprise planners Chennai team, bespoke events are our absolute specialty. You can select the color palette of your balloon decoration Chennai package, specify favorite tracks for a live music surprise Chennai session, include personal photos for custom anniversary surprise planner Chennai layouts, or ask for a romantic decoration for girlfriend Chennai that includes her favorite flowers.',
    category: 'customization'
  },
  {
    question: 'Where can we set up a beach proposal setup Chennai or beach surprise Chennai?',
    answer: 'Chennai is blessed with a stunning coast! We arrange premium beach surprise Chennai teepee setups and elaborate beach proposal setup Chennai backdrops on quiet, scenic, private stretches of ECR beach and Kovalam. We handle all permits, drapes, marquee lights, and safety coordinates so your seaside dream comes to life perfectly.',
    category: 'locations'
  },
  {
    question: 'Do you offer hotel room decoration Chennai or romantic room decoration Chennai?',
    answer: 'Yes! We offer professional hotel room decoration Chennai and private romantic room decoration Chennai suites makeover. We coordinate with major hotels across Chennai to set up a beautiful candle light room decoration Chennai with 100% safe warm-flicker LED tea-lights, rose petals, and memory photo streams. It is an amazing choice for a romantic birthday surprise in Chennai or an anniversary milestone.',
    category: 'logistics'
  },
  {
    question: 'Do you handle the permissions for a flash mob for proposal Chennai or mall surprise planner Chennai events?',
    answer: 'Yes, we handle 100% of the logistics! Whether you are planning a high-energy flash mob for proposal Chennai with our elite dancers or need a professional mall surprise planner Chennai coordinator for a public reveal in major Chennai malls (like Express Avenue or Phoenix Marketcity), we secure all legal clearances and setup coordination.',
    category: 'logistics'
  },
  {
    question: 'Can you arrange a special airport welcome surprise Chennai at MAA terminal?',
    answer: 'Definitely! Our dedicated airport surprise planner Chennai division specializes in welcome parties. We arrange cute greeting banners, personalized placards, flowers, and an unplugged guitarist right outside the arrivals gate of Chennai International Airport to make their homecoming incredibly emotional.',
    category: 'locations'
  },
  {
    question: 'What is the pricing for a luxury yacht birthday celebration Chennai?',
    answer: 'Our yacht surprise Chennai and yacht birthday celebration Chennai packages are premium offerings starting on the Bay of Bengal waters. It includes private boat decoration, custom cakes, drone photography, and optional live musicians. We also coordinate smaller boat surprise Chennai trips for intimate couples.',
    category: 'booking'
  }
];

export const CATEGORY_DATA = [
  {
    id: 'surprise',
    name: 'Surprise',
    image: '/Young_friends_surprising_friend_2K_202607182136.jpeg',
    tag: 'All Occasions',
    iconName: 'Sparkles',
    colorTheme: 'peach',
    shortDesc: 'Explore our wide range of surprise setups for every special occasion.',
    seoDesc: 'Explore our wide range of surprise setups including birthdays, proposals, beach events, mall flash mobs, music serenades, and yacht experiences. We craft unforgettable magical moments for every occasion.',
    services: [
      'birthday-decor',
      'proposal-surprise',
      'beach-surprise',
      'mall-surprise',
      'flash-mob',
      'music-surprise',
      'boat-yacht-surprise'
    ,
      'airport-welcome-surprise',
      'anniversary-surprise',
      'balloon-rush-birthday-decor',
      'balloon-tunnel-surprise',
      'beach-proposal-surprise',
      'birthday-home-decor',
      'birthday-room-surprise-decor',
      'birthday-surprise-decor',
      'birthday-surprise',
      'car-surprise',
      'fairy-style-birthday-decor',
      'flash-mob-birthday-surprise',
      'golden-balloon-rush-birthday-decor',
      'grand-birthday-decor',
      'grand-first-birthday-decor',
      'heartin-first-night-room-decor',
      'jungle-theme-birthday-decor',
      'mickymouse-birtday-decor',
      'proposal-surprise-2',
      'romantic-first-night-room-decor',
      'simple-rose-decor-surprise',
      'surprise-love-proposal-decor',
      'terrace-air-balloon-surprise',
      'terrace-camp-decor',
      'terrace-prposal-surprise',
      'terrace-surprise-decor',
      'terrace-surprise',
      'terrace-wedding-anniversary-surprise',
      'theater-surprise-proposal',
      'wedding-decor'
    ]
  },
  {
    id: 'birthday',
    name: 'Birthday',
    image: '/IMG-0506-Copy-scaled.jpg',
    tag: 'Sweet Celebrations',
    iconName: 'Cake',
    colorTheme: 'yellow',
    shortDesc: 'Make birthdays extra special with our premium decor and surprise packages.',
    seoDesc: 'Make birthdays extra special with our premium birthday surprise and decor packages, grand party setups, and thrilling flash mobs designed to leave them speechless.',
    services: [
      'birthday-decor',
      'birthday-party-decor',
      'flash-mob',
      'balloon-rush-birthday-decor',
      'birthday-home-decor',
      'birthday-room-surprise-decor',
      'birthday-surprise-decor',
      'birthday-surprise',
      'fairy-style-birthday-decor',
      'flash-mob-birthday-surprise',
      'golden-balloon-rush-birthday-decor',
      'grand-birthday-decor',
      'grand-first-birthday-decor',
      'jungle-theme-birthday-decor',
      'mickymouse-birtday-decor'
    ]
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    image: '/carousel/IMG_6997.jpg',
    tag: 'Romantic Milestones',
    iconName: 'Heart',
    colorTheme: 'purple',
    shortDesc: 'Celebrate your beautiful journey with romantic and unforgettable setups.',
    seoDesc: 'Celebrate your beautiful journey with romantic room decor, beachside surprises, proposal-style anniversary setups, or an exclusive yacht and boat cruise for two.',
    services: [
      'proposal-surprise',
      'beach-surprise',
      'romantic-room-decor',
      'boat-yacht-surprise',
      'anniversary-surprise',
      'terrace-wedding-anniversary-surprise',
      'romantic-first-night-room-decor',
      'heartin-first-night-room-decor',
      'simple-rose-decor-surprise',
      'terrace-camp-decor',
      'terrace-surprise-decor',
      'car-surprise'
    ]
  },
  {
    id: 'proposal',
    name: 'Proposal',
    image: '/Young_man_proposing_to_lover_202607182128.jpeg',
    tag: 'She Said Yes!',
    iconName: 'HeartHandshake',
    colorTheme: 'pink',
    shortDesc: 'Pop the big question with our expert proposal planning services.',
    seoDesc: 'Pop the big question with our expert proposal planning services. Choose from breathtaking beach setups, melodious music serenades, or a dramatic mall surprise.',
    services: [
      'proposal-surprise',
      'beach-surprise',
      'music-surprise',
      'mall-surprise',
      'beach-proposal-surprise',
      'proposal-surprise-2',
      'surprise-love-proposal-decor',
      'terrace-prposal-surprise',
      'theater-surprise-proposal'
    ]
  },
  {
    id: 'decor',
    name: 'Decors',
    image: '/81Y1OwaQp4L._AC_SL1500_-600x600.jpg',
    tag: 'Premium Styling',
    iconName: 'Palmtree',
    colorTheme: 'mint',
    shortDesc: 'Elevate your venue with our professional and aesthetic decoration services.',
    seoDesc: 'Elevate your venue with our professional decoration services. From birthday balloon arches to romantic hotel room setups, we bring your vision to life.',
    services: [
      'birthday-decor',
      'birthday-party-decor',
      'proposal-surprise',
      'romantic-room-decor',
      'beach-surprise',
      'wedding-decor',
      'balloon-tunnel-surprise',
      'terrace-air-balloon-surprise',
      'balloon-rush-birthday-decor',
      'birthday-home-decor',
      'birthday-room-surprise-decor',
      'birthday-surprise-decor',
      'fairy-style-birthday-decor',
      'golden-balloon-rush-birthday-decor',
      'grand-birthday-decor',
      'grand-first-birthday-decor',
      'jungle-theme-birthday-decor',
      'mickymouse-birtday-decor',
      'surprise-love-proposal-decor',
      'terrace-camp-decor',
      'terrace-prposal-surprise',
      'terrace-surprise-decor',
      'terrace-wedding-anniversary-surprise',
      'heartin-first-night-room-decor',
      'romantic-first-night-room-decor',
      'simple-rose-decor-surprise'
    ]
  },
  {
    id: 'room-decor',
    name: 'Romantic Room Decor',
    image: '/new-services/romantic-first-night-room-decor.jpg',
    tag: 'Private Makeovers',
    iconName: 'Heart',
    colorTheme: 'pink',
    shortDesc: 'Transform your room into a magical, romantic, or festive paradise.',
    seoDesc: 'Transform your room into a magical paradise with our professional room decor services. Perfect for first nights, birthdays, and surprise makeovers.',
    services: [
      'romantic-room-decor',
      'birthday-room-surprise-decor',
      'heartin-first-night-room-decor',
      'romantic-first-night-room-decor',
      'simple-rose-decor-surprise',
      'birthday-home-decor'
    ]
  }
];
