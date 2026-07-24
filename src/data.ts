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
      '/carousel/IMG_1635.jpg'
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
      '/2.png'
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
    ]
  },
  {
    id: 'airport-surprise',
    name: 'Airport Welcome Surprise',
    shortDesc: 'A grand, emotional welcome right as they step out of Chennai Airport! We are your premier airport surprise planner Chennai services.',
    longDesc: 'Make their arrival unforgettable with our specialized airport welcome surprise Chennai packages! Whether they are returning home after years or arriving in Chennai for the first time, our dedicated team acts as a professional airport surprise planner Chennai coordinator. We set up an adorable greeting party right outside the arrivals gate with customized cute placards, a professional guitarist playing their favorite song, beautiful helium balloons, and a bouquet of fresh lilies!',
    iconName: 'Plane',
    colorTheme: 'blue',
    tag: 'Welcome Back',
    image: '/airport.jpg',
    priceStart: '₹4,999',
    whatsIncluded: [
      'Cute customized welcome board / banner',
      'Professional guitarist playing 3 songs',
      'Cute helium balloons & rose bouquet',
      'Candid photography/videography',
      'Special greeting mascot (Puffy the cat!)'
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
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'v3',
    title: 'Fairytale Candlelight Proposal surprise',
    serviceId: 'proposal-surprise',
    serviceName: 'Proposal planning and Decor',
    image: '/proposal.jpg',
    tag: 'video',
    location: 'ECR Resort Garden, Chennai',
    description: 'Watch this dream-like proposal walkthrough with neon marquee signs, dry-ice fog, and cold fire sparklers.',
    videoUrl: 'https://www.youtube.com/watch?v=CvcdDx7e5R0'
  },
  {
    id: 'v4',
    title: 'Heartwarming Birthday Surprise',
    serviceId: 'birthday-surprise',
    serviceName: 'Birthday Surprise',
    image: '/beach.jpg',
    tag: 'video',
    location: 'Chennai',
    description: 'A beautiful birthday celebration captured live.',
    videoUrl: 'https://youtu.be/oqJwNSH_feA'
  },
  {
    id: 'v5',
    title: 'Magical Surprise Moment',
    serviceId: 'anniversary-surprise',
    serviceName: 'Anniversary Surprise',
    image: '/music.jpg',
    tag: 'video',
    location: 'Chennai',
    description: 'An unforgettable anniversary surprise experience.',
    videoUrl: 'https://youtube.com/shorts/GJ-AwADCL-E'
  },
  {
    id: 'v6',
    title: 'Spectacular Decor Setup',
    serviceId: 'premium-decor',
    serviceName: 'Premium Decor',
    image: '/proposal.jpg',
    tag: 'video',
    location: 'Chennai',
    description: 'A glimpse into our premium decoration setups.',
    videoUrl: 'https://youtube.com/shorts/0PmpUdnNykc'
  },
  {
    id: 'v7',
    title: 'Surprise Planning in Action',
    serviceId: 'romantic-room-decor',
    serviceName: 'Room Decor Surprise',
    image: '/music.jpg',
    tag: 'video',
    location: 'Chennai',
    description: 'See how we bring magical room surprises to life.',
    videoUrl: 'https://youtube.com/shorts/-AJyyJRL7Zg'
  },
  {
    id: 'v8',
    title: 'Joyful Moments Captured',
    serviceId: 'beach-surprise',
    serviceName: 'Flash Mob Surprise',
    image: '/beach.jpg',
    tag: 'video',
    location: 'Chennai',
    description: 'Smiles, hugs, and unexpected joy from our latest events.',
    videoUrl: 'https://youtube.com/shorts/u-HoIaaUTKM'
  },
  {
    id: 'g5',
    title: 'Dreamy Fairy Lights Room Makeover',
    serviceId: 'romantic-room-decor',
    serviceName: 'Romantic Room Decor',
    image: '/canopy.jpg',
    tag: 'photo',
    location: 'Adyar, Chennai',
    description: 'A heartwarming indoor surprise with polaroid memories and custom warm drapes.'
  },
  {
    id: 'g6',
    title: 'Cute Aesthetic Candy Birthday',
    serviceId: 'birthday-decor',
    serviceName: 'Birthday surprise and Decor',
    image: '/birthday.jpg',
    tag: 'photo',
    location: 'Anna Nagar, Chennai',
    description: 'A beautiful cloud balloon backdrop and birthday crown for baby Kiara.'
  },
  {
    id: 'g8',
    title: 'Mall Plaza Mascot Gift Drop',
    serviceId: 'mall-surprise',
    serviceName: 'Mall Surprise',
    image: '/mall.jpg',
    tag: 'photo',
    location: 'Phoenix Marketcity, Velachery',
    description: 'Our giant fluffy bear mascot giving a customized message scroll and floating gifts.'
  },
  {
    id: 'g9',
    title: 'Romantic Terrace Fairy-Lit Setup',
    serviceId: 'romantic-room-decor',
    serviceName: 'Romantic Room Decor',
    image: '/IMG-20260709-WA0016.jpg',
    tag: 'photo',
    location: 'Nungambakkam, Chennai',
    description: 'An elegant rooftop arrangement with string lights and fresh rose petals.'
  },
  {
    id: 'g10',
    title: 'Sweet Home Birthday Surprise',
    serviceId: 'birthday-decor',
    serviceName: 'Birthday surprise and Decor',
    image: '/IMG-20260709-WA0017.jpg',
    tag: 'photo',
    location: 'T. Nagar, Chennai',
    description: 'Gorgeous organic balloon bouquet and backdrop for a sweet surprise party at home.'
  },
  {
    id: 'g11',
    title: 'Dreamy Neon Proposal',
    serviceId: 'proposal-surprise',
    serviceName: 'Proposal planning and Decor',
    image: '/IMG-20260709-WA0018.jpg',
    tag: 'photo',
    location: 'ECR Resort Hall, Chennai',
    description: 'Brilliant glowing "MARRY ME" neon signs with heavy mist and glass lanterns.'
  },
  {
    id: 'g12',
    title: 'Heartfelt Doorstep Guitar Serenade',
    serviceId: 'music-surprise',
    serviceName: 'Melodious Music Surprise',
    image: '/IMG-20260709-WA0019.jpg',
    tag: 'photo',
    location: 'Velachery, Chennai',
    description: 'Surprising Sneha on her birthday morning with custom live acoustic Tamil melody covers.'
  },
  {
    id: 'g13',
    title: 'Airport Grand Welcome Party',
    serviceId: 'airport-surprise',
    serviceName: 'Airport Welcome Surprise',
    image: '/IMG-20260709-WA0020.jpg',
    tag: 'photo',
    location: 'Chennai Intl Airport (MAA)',
    description: 'A colorful balloons bunch and custom welcome banner welcoming back a beloved brother.'
  },
  {
    id: 'g14',
    title: 'Bay of Bengal Yacht Celebration',
    serviceId: 'boat-yacht-surprise',
    serviceName: 'Yacht & Boat Surprise',
    image: '/IMG-20260709-WA0021.jpg',
    tag: 'photo',
    location: 'Royapuram Marina Coast',
    description: 'An exclusive romantic couple sunset cruise decorated with high-end helium balloons.'
  },

  {
    id: 'g21',
    title: 'Aesthetic Indoor Fairy-Lit Setup',
    serviceId: 'romantic-room-decor',
    serviceName: 'Romantic Room Decor',
    image: '/IMG-20260709-WA0003.jpg',
    tag: 'photo',
    location: 'Kilpauk, Chennai',
    description: 'Beautiful white frame setup with warm lights and customized framed photos hanging beautifully.'
  },
  {
    id: 'g22',
    title: 'Dreamy Aesthetic Birthday Decor',
    serviceId: 'birthday-decor',
    serviceName: 'Birthday surprise and Decor',
    image: '/IMG-20260709-WA0004.jpg',
    tag: 'photo',
    location: 'Teynampet, Chennai',
    description: 'A massive organic balloon wall and matching custom-designed cake table backdrop for birthday parties.'
  },
  {
    id: 'g23',
    title: 'Magical Marry Me Backdrop',
    serviceId: 'proposal-surprise',
    serviceName: 'Proposal planning and Decor',
    image: '/IMG-20260709-WA0005.jpg',
    tag: 'photo',
    location: 'Resort Beachside lawn, ECR',
    description: 'Breathtaking warm glowing letters under the night sky on the ECR coast.'
  },
  {
    id: 'g24',
    title: 'Doorstep Melody Serenade surprise',
    serviceId: 'music-surprise',
    serviceName: 'Melodious Music Surprise',
    image: '/IMG-20260709-WA0006.jpg',
    tag: 'photo',
    location: 'Gopalapuram, Chennai',
    description: 'Professional musicians surprise a lovely bride-to-be with beautiful live unplugged covers.'
  },
  {
    id: 'g25',
    title: 'Warm Welcome Airport Welcome',
    serviceId: 'airport-surprise',
    serviceName: 'Airport Welcome Surprise',
    image: '/IMG-20260709-WA0007.jpg',
    tag: 'photo',
    location: 'Chennai Airport (MAA)',
    description: 'Emotional welcome banners, specialized cupcakes and customized board for returning couples.'
  },
  {
    id: 'g26',
    title: 'Sailing Sunset Anniversary Cruise',
    serviceId: 'boat-yacht-surprise',
    serviceName: 'Yacht & Boat Surprise',
    image: '/IMG-20260709-WA0008.jpg',
    tag: 'photo',
    location: 'Royapuram Marina Wharf',
    description: 'A fully custom yacht decking decoration with floating balloons, petals, and customized lighting.'
  },
  {
    id: 'g27',
    title: 'Deluxe ECR Seaside Tent',
    serviceId: 'beach-surprise',
    serviceName: 'Beach Surprise and decor',
    image: '/IMG-20260709-WA0009.jpg',
    tag: 'photo',
    location: 'Kovalam Beach, ECR',
    description: 'Our deluxe double-layered white teepee tent styled with bohemian rugs and plush cushions.'
  },
  {
    id: 'g28',
    title: 'Surprise Flash Mob Showcase',
    serviceId: 'flash-mob',
    serviceName: 'Random Flash Mob Surprise',
    image: '/IMG-20260709-WA0010.jpg',
    tag: 'photo',
    location: 'Forum Vijaya Mall, Vadapalani',
    description: 'An upbeat 12-member flash mob dance routine leaving the celebrant absolutely starstruck.'
  },
  {
    id: 'g29',
    title: 'Crowd-pleasing Mall Spotlight Proposal',
    serviceId: 'mall-surprise',
    serviceName: 'Mall Surprise',
    image: '/IMG-20260709-WA0011.jpg',
    tag: 'photo',
    location: 'Express Avenue Mall, Royapettah',
    description: 'A giant box balloon release with red carpets in the central atrium of Express Avenue.'
  },
  {
    id: 'g30',
    title: 'Enchanted Room transformation',
    serviceId: 'romantic-room-decor',
    serviceName: 'Romantic Room Decor',
    image: '/IMG-20260709-WA0013.jpg',
    tag: 'photo',
    location: 'Mylapore, Chennai',
    description: 'Intimate room decoration with soft cotton drapes, LED floor trail, and floating memories.'
  },
  {
    id: 'g31',
    title: 'Glowing Marry Me Beachside Setup',
    serviceId: 'proposal-surprise',
    serviceName: 'Proposal planning and Decor',
    image: '/IMG_9296.JPG',
    tag: 'photo',
    location: 'ECR Private Beachside Lawn, Chennai',
    description: 'A luxury glowing setup with giant letters, cold sparklers, and rose paths.'
  },
  {
    id: 'g32',
    title: 'Majestic Gold Metallic Birthday Balloon Party',
    serviceId: 'birthday-decor',
    serviceName: 'Birthday surprise and Decor',
    image: '/IMG_9297.JPG',
    tag: 'photo',
    location: 'Alwarpet, Chennai',
    description: 'Premium metallic gold balloon arch design with warm string lights and customized signs.'
  },
  {
    id: 'g33',
    title: 'Bespoke Premium Floral Proposal',
    serviceId: 'proposal-surprise',
    serviceName: 'Proposal planning and Decor',
    image: '/IMG_1727.JPG',
    tag: 'photo',
    location: 'ECR Villa Lawn, Chennai',
    description: 'An elegant floral structure adorned with fairy lights, custom neon signage, and romantic candle jars.'
  },
  {
    id: 'g34',
    title: 'Magical Evening Beachside Picnic',
    serviceId: 'beach-surprise',
    serviceName: 'Beach Surprise and decor',
    image: '/IMG_1840.JPG',
    tag: 'photo',
    location: 'ECR Private Beach, Chennai',
    description: 'An intimate wooden layout decorated with dreamy lights, soft drapes, and customized photo memory line.'
  },
  {
    id: 'g35',
    title: 'Luxe Room Bed Transformation',
    serviceId: 'romantic-room-decor',
    serviceName: 'Romantic Room Decor',
    image: '/IMG_2038.JPG',
    tag: 'photo',
    location: 'Nungambakkam, Chennai',
    description: 'A cozy bedroom decorated with premium white drapes, hanging photo cards, and glowing floor lights.'
  },
  {
    id: 'g36',
    title: 'Elegant Sunset Beach Dinner',
    serviceId: 'beach-surprise',
    serviceName: 'Beach Surprise and decor',
    image: '/IMG_2042.JPG',
    tag: 'photo',
    location: 'Mahabalipuram Coast, Chennai',
    description: 'Breathtaking beach sunset view decorated with a rustic teepee, floor cushions, and personalized lanterns.'
  },
  {
    id: 'g37',
    title: 'Surprise Hotel Suite Balloon Styling',
    serviceId: 'birthday-decor',
    serviceName: 'Birthday surprise and Decor',
    image: '/IMG_2049.JPG',
    tag: 'photo',
    location: 'Adyar, Chennai',
    description: 'A grand luxury suite filled with gorgeous elegant pink and white balloons, confetti, and romantic LED signs.'
  },
  {
    id: 'g38',
    title: 'Glamorous Red and Gold Anniversary Decor',
    serviceId: 'romantic-room-decor',
    serviceName: 'Romantic Room Decor',
    image: '/IMG_7661.JPG',
    tag: 'photo',
    location: 'T. Nagar, Chennai',
    description: 'Extravagant metallic gold and rich red balloon ceiling design with customized foil letter letters and photos.'
  },
  {
    id: 'g39',
    title: 'Aesthetic Balloon Birthday Archway',
    serviceId: 'birthday-decor',
    serviceName: 'Birthday surprise and Decor',
    image: '/IMG_7660.JPG',
    tag: 'photo',
    location: 'Anna Nagar, Chennai',
    description: 'Delicate light blue and gold organic balloon arch with custom printed backdrops for a sweet birthday celebration.'
  },
  {
    id: 'g40',
    title: 'Fairytale Glowing Proposal Walkway',
    serviceId: 'proposal-surprise',
    serviceName: 'Proposal planning and Decor',
    image: '/IMG_7659.JPG',
    tag: 'photo',
    location: 'ECR Beachside Garden, Chennai',
    description: 'Romantic red-carpet walkway lined with warm lantern lights leading up to a giant glowing "MARRY ME" heart.'
  },
  {
    id: 'g41',
    title: 'Sunset Coastline Acoustic Guitar Serenade',
    serviceId: 'music-surprise',
    serviceName: 'Melodious Music Surprise',
    image: '/IMG_7658.JPG',
    tag: 'photo',
    location: 'Kovalam Beach, Chennai',
    description: 'A beautiful beach picnic surprise with live professional singers performing custom Tamil and Hindi melodies.'
  },
  {
    id: 'g42',
    title: 'Cozy Bohemian Teepee Surprise',
    serviceId: 'beach-surprise',
    serviceName: 'Beach Surprise and decor',
    image: '/IMG_7657.JPG',
    tag: 'photo',
    location: 'Muttukadu Shore, Chennai',
    description: 'Charming bohemian beach setup styled with warm lanterns, fairy light stringing, and fresh rose petals.'
  },
  {
    id: 'g43',
    title: 'Exclusive High-End Yacht Party',
    serviceId: 'boat-yacht-surprise',
    serviceName: 'Yacht & Boat Surprise',
    image: '/IMG_7228.JPEG',
    tag: 'photo',
    location: 'Chennai Marina waters',
    description: 'An ultimate sunset sailing yacht setup decorated with bespoke helium balloons, champagne tables, and custom decor.'
  },
  {
    id: 'g44',
    title: 'Golden Hour Candlelight Table Setting',
    serviceId: 'romantic-room-decor',
    serviceName: 'Romantic Room Decor',
    image: '/IMG_5411.JPG',
    tag: 'photo',
    location: 'Besant Nagar, Chennai',
    description: 'A cozy candle-lit anniversary table setup featuring personalized chocolates, rose gold accents, and fairy lights.'
  },
  {
    id: 'g45',
    title: 'Gourmet Handcrafted Chocolate Bouquet',
    serviceId: 'music-surprise',
    serviceName: 'Melodious Music Surprise',
    image: '/IMG_5414.JPG',
    tag: 'photo',
    location: 'Velachery, Chennai',
    description: 'A custom-designed premium chocolate bouquet presented alongside an unplugged live guitar serenade.'
  },
  {
    id: 'g46',
    title: 'Whimsical Lavender and Rose Gold Balloon Arch',
    serviceId: 'birthday-decor',
    serviceName: 'Birthday surprise and Decor',
    image: '/IMG_5675.JPG',
    tag: 'photo',
    location: 'Anna Nagar, Chennai',
    description: 'Stunning organic balloon arch styled with metallic accents, fresh flowers, and neon celebration signage.'
  },
  {
    id: 'g47',
    title: 'Dreamy Fairy Lit Garden Proposal Layout',
    serviceId: 'proposal-surprise',
    serviceName: 'Proposal planning and Decor',
    image: '/IMG_5681.JPG',
    tag: 'photo',
    location: 'ECR Lawn, Chennai',
    description: 'A breathtaking outdoor garden proposal decorated with warm fairy lights, custom neon drapes, and lanterns.'
  },
  {
    id: 'g48',
    title: 'Cozy Net Frame Bedroom Surprise',
    serviceId: 'romantic-room-decor',
    serviceName: 'Romantic Room Decor',
    image: '/IMG_2478.JPG',
    tag: 'photo',
    location: 'Nungambakkam, Chennai',
    description: 'Intimate bedroom net arrangement decorated with warm LED lights, printed polaroids, and heart-shaped rose path.'
  },
  {
    id: 'g49',
    title: 'Royal Seaside Candle Trail',
    serviceId: 'beach-surprise',
    serviceName: 'Beach Surprise and decor',
    image: '/IMG_1727.JPG',
    tag: 'photo',
    location: 'ECR Beach, Chennai',
    description: 'An ultra-premium beachside wooden layout framed by a red carpet walkway and heavy glowing floor drapes.'
  },
  {
    id: 'g50',
    title: 'Elegant Heart Bedroom Escape',
    serviceId: 'romantic-room-decor',
    serviceName: 'Romantic Room Decor',
    image: '/IMG_1840.JPG',
    tag: 'photo',
    location: 'Guindy, Chennai',
    description: 'A gorgeous heart-shaped balloon arrangement with custom warm glowing net arrangements.'
  },
  {
    id: 'g51',
    title: 'Fairytale Golden Fairy Lights Layout',
    serviceId: 'proposal-surprise',
    serviceName: 'Proposal planning and Decor',
    image: '/IMG_2478.JPG',
    tag: 'photo',
    location: 'Kovalam, Chennai',
    description: 'Warm, golden illumination cascade over an elegant outdoor dining setup.'
  }
];

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
      'airport-surprise',
      'boat-yacht-surprise'
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
      'flash-mob'
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
      'boat-yacht-surprise'
    ]
  },
  {
    id: 'proposal',
    name: 'Proposal',
    image: '/Young_man_proposing_to_lover_202607182128.jpeg',
    tag: 'He Said Yes!',
    iconName: 'HeartHandshake',
    colorTheme: 'pink',
    shortDesc: 'Pop the big question with our expert proposal planning services.',
    seoDesc: 'Pop the big question with our expert proposal planning services. Choose from breathtaking beach setups, melodious music serenades, or a dramatic mall surprise.',
    services: [
      'proposal-surprise',
      'beach-surprise',
      'music-surprise',
      'mall-surprise'
    ]
  },
  {
    id: 'decor',
    name: 'Decor',
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
      'beach-surprise'
    ]
  }
];
