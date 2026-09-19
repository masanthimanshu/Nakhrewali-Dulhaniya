import { Product } from "../types";

export const CATEGORIES = [
  {
    id: "all" as const,
    name: "All Collections",
    romanNumeral: "I-IV",
    tagline:
      "The complete treasury of Bollywood romance and heirloom keepsakes",
    subtitle: "All 4 Signature Collections",
  },
  {
    id: "earrings" as const,
    name: "Haye Jhumka",
    romanNumeral: "I",
    tagline: "Earrings that steal hearts before words are spoken",
    subtitle: "Mirror Chandbalis, Kundan Drops & Royal Meenakari",
  },
  {
    id: "bangles" as const,
    name: "Bole Chudiyan",
    romanNumeral: "II",
    tagline: "The poetic chime of velvet, glass & heirloom kadas",
    subtitle: "Velvet Stacks, Resham Bangles & Latkan Kadas",
  },
  {
    id: "hair" as const,
    name: "Yeh Reshmi Zulfen",
    romanNumeral: "III",
    tagline: "Poetic hair adornments crafted for cinema-worthy moments",
    subtitle: "Silk Organza Bows, Pearl Vines & Embroidered Bands",
  },
  {
    id: "romantic-gifts" as const,
    name: "Dil Tu Jaan Tu",
    romanNumeral: "IV",
    tagline: "Keepsake unboxing gestures designed to make her tear up with joy",
    subtitle: "Curated Trunks, Wax-Sealed Notes & Scented Keepsakes",
  },
];

export const PRODUCTS: Product[] = [
  // 💎 Earrings -> Haye Jhumka
  {
    id: "jhumka-1",
    name: "Kajra Re Mirror & Pearl Chandbali",
    category: "earrings",
    categoryLabel: "Haye Jhumka",
    price: 1199,
    originalPrice: 1899,
    image:
      "https://i.pinimg.com/1200x/69/06/d9/6906d9d10843730960f22245a47b64f5.jpg",
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    bollywoodDialogue:
      "“Aankhon ki gustakhiyan maaf hon... jab jhumke itne khoobsurat hon!”",
    description:
      "Statement crescent chandbalis handcrafted with miniature mirrors, cultured faux pearls, and intricate micro-filigree detailing. Lightweight enough for hours of sangeet dancing.",
    whySheLovesIt: [
      "Gives instant royal heroine energy",
      "Featherlight hollow craft (zero earlobe strain)",
      "Subtle pearl chimes when she turns her head",
    ],
    stylingTip:
      "Pair with an ivory or blush Chikankari Anarkali and soft curls.",
    material: "22k Micro Gold Polish, Brass, Faux Seed Pearls",
  },
  {
    id: "jhumka-2",
    name: "Mastani Meenakari Lotus Jhumkas",
    category: "earrings",
    categoryLabel: "Haye Jhumka",
    price: 949,
    originalPrice: 1499,
    image:
      "https://i.pinimg.com/1200x/db/a7/81/dba7811f8fdd91726bf11abaf6140d4d.jpg",
    rating: 4.8,
    reviewsCount: 98,
    badge: "GF Favorite",
    bollywoodDialogue:
      "“Kismat badi kutti cheez hai... par ye jhumke toh 10/10 hain!”",
    description:
      "Hand-painted pastel pink and mint Meenakari enamel with cascading pearl drop clusters and golden dome bells.",
    whySheLovesIt: [
      "Colors match literally every ethnic or fusion outfit",
      "Hand-painted artisanal craftsmanship",
      "Compliment magnet in every Instagram selfie",
    ],
    stylingTip:
      "Wear with an oversized pastel shirt tucked into lehenga skirts or festive sarees.",
    material:
      "Hand-glazed Meenakari Enamel, Brass Core, Freshwater-finish beads",
  },
  {
    id: "jhumka-3",
    name: "Jhumka Gira Re Tiered Kundan Drops",
    category: "earrings",
    categoryLabel: "Haye Jhumka",
    price: 1399,
    originalPrice: 2199,
    image:
      "https://i.pinimg.com/1200x/c6/f3/34/c6f3340dea969af9792c252bea025858.jpg",
    rating: 5.0,
    reviewsCount: 210,
    badge: "Trending",
    bollywoodDialogue:
      "“Bareilly ke bazaar mein nahi, seedha aapke dil mein gira ye jhumka!”",
    description:
      "Double-tier Kundan stones set in antique gold foil backing, finished with delicate emerald green and champagne beads.",
    whySheLovesIt: [
      "Looks like an heirloom straight out of Sanjay Leela Bhansali movie",
      "Premium weight and luxurious shine",
      "Includes silicone comfort stoppers",
    ],
    stylingTip: "Sleek middle-parted bun with fresh gajra and winged liner.",
    material: "Polished Brass Core, Micro-Gold Layer, Real Glass Kundan",
  },
  {
    id: "jhumka-4",
    name: "Bairi Piya Oxidised Silver Ghungroo Danglers",
    category: "earrings",
    categoryLabel: "Haye Jhumka",
    price: 799,
    originalPrice: 1299,
    image:
      "https://i.pinimg.com/1200x/8c/29/c2/8c29c20c7025605656e23bbc8a0fe93f.jpg",
    rating: 4.8,
    reviewsCount: 86,
    badge: "Viral Reel",
    bollywoodDialogue:
      "“Bairi piya bada bedardi... par jhumka bada meharbaan!”",
    description:
      "Vintage-washed oxidised silver jhumkas adorned with real miniature ghungroos that offer a soft musical whisper.",
    whySheLovesIt: [
      "The ultimate college & boho-indie everyday vibe",
      "Tarnish-resistant antique finish",
      "Matches denim jackets as effortlessly as kurtis",
    ],
    stylingTip:
      "Style with black kolhapuris, oxidized rings, and a casual kurta.",
    material: "Oxidised German Silver, Brass alloy bells",
  },
  {
    id: "jhumka-5",
    name: "Chand Sifarish Festive Temple Jhumkas",
    category: "earrings",
    categoryLabel: "Haye Jhumka",
    price: 1249,
    originalPrice: 1999,
    image:
      "https://i.pinimg.com/736x/8c/29/c2/8c29c20c7025605656e23bbc8a0fe93f.jpg",
    rating: 4.9,
    reviewsCount: 114,
    badge: "Romantic Hit",
    bollywoodDialogue:
      "“Subhanallah! Ek baar pehno aur sab dekhte reh jayein.”",
    description:
      "Intricate temple motifs meeting playful dangling bell domes, finished with lustrous ruby-red cabochon highlights.",
    whySheLovesIt: [
      "Pure festive statement without feeling heavy",
      "Deep antique gold undertone that looks genuine gold",
      "Hypoallergenic ear-posts tested for sensitive skin",
    ],
    stylingTip:
      "Perfect for Diwali, Eid, family weddings, or romantic candlelit dates.",
    material: "Antique Matte Gold Plated Brass, Ruby Glass Stones",
  },

  // 💚 Bangles -> Bole Chudiyan
  {
    id: "bangles-1",
    name: "Leja Leja Emerald Velvet & Gold Kangan Set",
    category: "bangles",
    categoryLabel: "Bole Chudiyan",
    price: 1499,
    originalPrice: 2299,
    image:
      "https://i.pinimg.com/1200x/8e/92/9b/8e929bd4037d189c792ad059dd01b878.jpg",
    rating: 4.9,
    reviewsCount: 165,
    badge: "Bestseller",
    bollywoodDialogue:
      "“Bole chudiyan, bole kangna... tere bina mushkil hai jeena!”",
    description:
      "A curated 24-piece bridal choodi stack combining plush forest green velvet bangles flanked by filigree gold-plated kadas.",
    whySheLovesIt: [
      "Velvety soft against the skin (no scratches)",
      "Rich contrast of deep emerald green and sparkling gold",
      "Comes with a branded velvet storage pouch",
    ],
    stylingTip:
      "Wear on one wrist with a luxury watch or split across both wrists with a silk lehenga.",
    material: "Plush Micro-Velvet, Alloy Core, Micro-pearl beads",
  },
  {
    id: "bangles-2",
    name: "Chalka Chalka Re Silk Glass Choodi Stack",
    category: "bangles",
    categoryLabel: "Bole Chudiyan",
    price: 899,
    originalPrice: 1399,
    image:
      "https://i.pinimg.com/736x/82/60/ad/8260adfc7b67bbfb8bb51e8c95577359.jpg",
    rating: 4.8,
    reviewsCount: 79,
    badge: "GF Favorite",
    bollywoodDialogue:
      "“Haath pakadne ka bahana mil gaya chudiyan pehnate waqt!”",
    description:
      "Vibrant multihued glass choodis bound with delicate golden silk threads and embellished zircon spacers.",
    whySheLovesIt: [
      "The authentic, romantic tinkling sound every girl adores",
      "Rich glossy shine under sunlight and candlelight",
      "Available in sizes 2.4, 2.6, and 2.8",
    ],
    stylingTip:
      "Stack them high with a handloom cotton saree or organza dupatta.",
    material:
      "Handcrafted Firozabad Crystal Glass, Resham Thread, Brass Zircons",
  },
  {
    id: "bangles-3",
    name: "Dhol Baje Zari Latkan Bridal Kada Pair",
    category: "bangles",
    categoryLabel: "Bole Chudiyan",
    price: 1699,
    originalPrice: 2599,
    image:
      "https://i.pinimg.com/1200x/b9/ec/12/b9ec12b24f26e7f2ac4dbada8532d34a.jpg",
    rating: 5.0,
    reviewsCount: 132,
    badge: "Trending",
    bollywoodDialogue: "“Teri aakhon ke matvaale kaajal ko mera salaam!”",
    description:
      "Opulent openable kadas with hand-embroidered zari tassel latkans, micro-pearl tassels, and screw-lock closures.",
    whySheLovesIt: [
      "Swingy drama every time she moves her hands",
      "Openable screw mechanism fits any wrist size comfortably",
      "Feels like bespoke couture jewelry",
    ],
    stylingTip:
      "Let these statement kadas be the hero of your festive wristwear.",
    material: "Gold Plated Brass, Zari Thread Tassels, Faux Micro Pearls",
  },

  // 🎀 Hair Accessories -> Yeh Reshmi Zulfen
  {
    id: "hair-1",
    name: "Genda Phool Silk Organza Jumbo Hair Bow",
    category: "hair",
    categoryLabel: "Yeh Reshmi Zulfen",
    price: 549,
    originalPrice: 899,
    image:
      "https://i.pinimg.com/736x/49/0e/6e/490e6ee4b020f17df2722c794465331a.jpg",
    rating: 4.9,
    reviewsCount: 220,
    badge: "Viral Reel",
    bollywoodDialogue:
      "“Yeh reshmi zulfen, yeh sharbati aankhein... inhe dekh kar jee rahe hain sabhi!”",
    description:
      "Oversized dreamy sheer organza bow clip with cascading soft tails. Gives any half-up hairstyle instant Pinterest aesthetic.",
    whySheLovesIt: [
      "Instant French-girl-meets-Bollywood heroine aesthetic",
      "Strong alligator clip that stays locked in thick or fine hair",
      "Wrinkle-resistant luxurious organza",
    ],
    stylingTip: "Clip onto a loose half-up crown braid or low messy bun.",
    material: "Hand-spun Raw Silk Thread, Brass Core, Metallic Zari",
  },
  {
    id: "hair-2",
    name: "Udi Udi Jaye Pearl Cascade Hair Vine",
    category: "hair",
    categoryLabel: "Yeh Reshmi Zulfen",
    price: 849,
    originalPrice: 1299,
    image:
      "https://i.pinimg.com/736x/68/08/d6/6808d6f5b96cfdd0f4d098cc8463a196.jpg",
    rating: 4.8,
    reviewsCount: 67,
    badge: "Romantic Hit",
    bollywoodDialogue:
      "“Hawa ke jhonke se zulfen jab chehre pe aati hain... dil ruk jata hai!”",
    description:
      "Flexible bendable gold wire intertwined with lustrous freshwater-style pearls and crystalline floral sprigs.",
    whySheLovesIt: [
      "Can be woven into braids, pinned around buns, or worn as a tiara",
      "Doesn’t snag or pull hair strands",
      "Ultra photogenic for bridal showers & farewell parties",
    ],
    stylingTip:
      "Intertwine through a fishtail braid with soft face-framing tendrils.",
    material: "Pliable Gold Wire, Simulated Pearls, Austrian Cut Crystals",
  },
  {
    id: "hair-3",
    name: "Deewani Mastani Velvet Hair Ribbon with Gota Patti",
    category: "hair",
    categoryLabel: "Yeh Reshmi Zulfen",
    price: 699,
    originalPrice: 999,
    image:
      "https://i.pinimg.com/1200x/4a/58/ae/4a58aedb620f89a4f66f2e704879d6d9.jpg",
    rating: 4.7,
    reviewsCount: 54,
    badge: "Limited Stock",
    bollywoodDialogue:
      "“Haaye... sharminda mat karo, bas baalon mein baandh lo!”",
    description:
      "Plush jewel-toned velvet ribbon edged with golden Rajasthani gota patti scallops and pearl teardrop latkans.",
    whySheLovesIt: [
      "Vintage royal nostalgia wrapped in a modern accessory",
      "Doubles as a neck choker ribbon or gift box bow",
      "Signature Nakhrewali gold charm pendant attached",
    ],
    stylingTip: "Tie loosely around a high ponytail for festive chic charm.",
    material: "Royal Velvet, Pure Metallic Gota Patti Border",
  },
  {
    id: "hair-4",
    name: "Chura Ke Dil Mera Embroidered Bridal Headband",
    category: "hair",
    categoryLabel: "Yeh Reshmi Zulfen",
    price: 999,
    originalPrice: 1599,
    image:
      "https://i.pinimg.com/1200x/60/2c/01/602c01a66456e3d9564f1990e719ab11.jpg",
    rating: 4.9,
    reviewsCount: 118,
    badge: "GF Favorite",
    bollywoodDialogue:
      "“Chura ke dil mera goriya chali... headband pehan kar!”",
    description:
      "Padded comfort headband hand-embellished with micro zardozi florals, pearl clusters, and soft satin lining that never pinches behind the ears.",
    whySheLovesIt: [
      "Zero headache grip design (tested for 12-hour wear)",
      "Instantly elevates basic hair into a runway look",
      "Comes in a keepsake satin dust bag",
    ],
    stylingTip: "Wear with open blow-dried waves or sleek straight hair.",
    material: "Padded Foam, Silk Satin Fabric, Zari & Pearl Embroidery",
  },
  {
    id: "hair-5",
    name: "Suraj Hua Maddham Rose Gold Blossom Claw Clips",
    category: "hair",
    categoryLabel: "Yeh Reshmi Zulfen",
    price: 499,
    originalPrice: 799,
    image:
      "https://i.pinimg.com/1200x/0c/20/5d/0c205d6614d9354d7de0bebaf325f5d0.jpg",
    rating: 4.8,
    reviewsCount: 189,
    badge: "Bestseller",
    bollywoodDialogue:
      "“Chand dhalne laga... par tumhara claw clip glow kar raha hai!”",
    description:
      "Set of two sculpted metal blossom claw clips in high-shine rose gold and champagne plating with crystal petal centres.",
    whySheLovesIt: [
      "Unbreakable heavy-duty metal spring mechanism",
      "Holds thickest Indian hair securely all day",
      "Looks effortlessly chic when grabbed for casual coffee dates",
    ],
    stylingTip: "Twist hair into a French twist and snap in the center.",
    material: "Reinforced Metal Alloy, Rose Gold Finish, Rhinestones",
  },

  // ❤️ Romantic Gifts -> Dil Tu Jaan Tu
  {
    id: "gift-1",
    name: "Tujh Mein Rab Dikhta Hai Heirloom Keepsake Hamper",
    category: "romantic-gifts",
    categoryLabel: "Dil Tu Jaan Tu",
    price: 2499,
    originalPrice: 3899,
    image:
      "https://i.pinimg.com/1200x/67/b4/b4/67b4b4c4f8eb32d68b45123acb0e0f90.jpg",
    rating: 5.0,
    reviewsCount: 245,
    badge: "Romantic Hit",
    bollywoodDialogue:
      "“Tujh mein rab dikhta hai, yaara main kya karoon... sajde sar jhukta hai!”",
    description:
      "Our most requested boyfriend-to-girlfriend surprise box. Includes a handcrafted gold jewelry piece, velvet storage box, scented damask rose candle, wax-sealed handwritten Bollywood love letter, and vintage polaroid frame.",
    whySheLovesIt: [
      "The ultimate romantic flex (she will 100% cry happy tears)",
      "Curated unboxing experience with fragrant rose petals",
      "Personalized with her name embossed in gold foil",
    ],
    stylingTip:
      'Gift on anniversary, birthday, or as the ultimate "I’m sorry" gesture.',
    material:
      "Handcrafted Wooden Trunk, Soy Wax Candle, 22k Polish Jewelry, Wax Seal",
  },
  {
    id: "gift-2",
    name: "Pehla Nasha Romantic Trinket & Scented Candle Box",
    category: "romantic-gifts",
    categoryLabel: "Dil Tu Jaan Tu",
    price: 1899,
    originalPrice: 2799,
    image:
      "https://i.pinimg.com/1200x/34/26/3c/34263ce3c26d0638d05b3dd1a3b357bd.jpg",
    rating: 4.9,
    reviewsCount: 156,
    badge: "Bestseller",
    bollywoodDialogue:
      "“Pehla nasha, pehla khumaar... naya pyaar hai naya intezaar!”",
    description:
      "A plush velvet hexagon trinket box with a brass filigree lid, paired with an aromatherapy jasmine-vanilla candle and pearl drop necklace.",
    whySheLovesIt: [
      "Aesthetic nightstand centerpiece she will see every single day",
      "Heavenly calming fragrance that fills her bedroom",
      "Includes complimentary secret love note in calligraphy",
    ],
    stylingTip:
      "Perfect for first anniversaries, Valentine’s, or cute monthly milestones.",
    material: "Plush Velvet, Brass Filigree, Pure Essential Oils Candle",
  },
  {
    id: "gift-3",
    name: "Tum Se Hi Custom Polaroid & Jewelry Gift Trunk",
    category: "romantic-gifts",
    categoryLabel: "Dil Tu Jaan Tu",
    price: 2199,
    originalPrice: 3299,
    image:
      "https://i.pinimg.com/1200x/ee/14/fc/ee14fc1b2d6ad53b35f3a8cafe3068df.jpg",
    rating: 4.9,
    reviewsCount: 180,
    badge: "Trending",
    bollywoodDialogue:
      "“Aadha sa vaada kabhi, aadhe se zyada kabhi... jee mein aata hai tum se hi!”",
    description:
      "A vintage-inspired emerald green hardbound trunk that holds her favorite accessories, 3 custom mini polaroid slots, fairy lights, and an engraved brass key.",
    whySheLovesIt: [
      "High nostalgia value that feels deeply personal and thoughtful",
      "Reusable as her forever jewelry treasure chest",
      "Packed with golden ribbons and filmy stickers",
    ],
    stylingTip:
      "Slip your favorite song lyrics or couple photo into the lid frame.",
    material: "Heavy Weight Velvet, Satin Lining, Micro Gold Filigree",
  },
  {
    id: "gift-4",
    name: "Jab Tak Hai Jaan Filmy Love Letter & Petal Box",
    category: "romantic-gifts",
    categoryLabel: "Dil Tu Jaan Tu",
    price: 1599,
    originalPrice: 2399,
    image:
      "https://i.pinimg.com/1200x/e3/25/c7/e325c7456d9e5addce40fe53b605aff9.jpg",
    rating: 4.8,
    reviewsCount: 92,
    badge: "GF Favorite",
    bollywoodDialogue:
      "“Teri aankhon ki namkeen mastiyan... jab tak hai jaan!”",
    description:
      "An old-world parchment scroll tied with raw silk cord, filled with preserved dried red roses and a surprise heart-pendant kundan bracelet.",
    whySheLovesIt: [
      "Full Yash Chopra movie romantic hero vibes",
      "Preserved petals last for years without losing color",
      "The letter can be customized with your own words",
    ],
    stylingTip:
      "Have this delivered to her desk or home when she least expects it.",
    material: "Handmade Deckle-edge Cotton Rag Paper, Dried Botanicals, Brass",
  },
  {
    id: "gift-5",
    name: "Ishq Wala Love Luxury Velvet Gift Box Set",
    category: "romantic-gifts",
    categoryLabel: "Dil Tu Jaan Tu",
    price: 1999,
    originalPrice: 2999,
    image:
      "https://i.pinimg.com/1200x/e7/a4/97/e7a49785c30b44fb3c4c234d264e51d4.jpg",
    rating: 4.9,
    reviewsCount: 134,
    badge: "Bestseller",
    bollywoodDialogue:
      "“Surkh wala, soz wala, faiz wala love... Ishq wala love!”",
    description:
      "A dual-tier Rani Pink velvet box featuring our signature Kajra Re jhumkas and matching Genda Phool organza hair bow, topped with an oversized gold satin bow.",
    whySheLovesIt: [
      "The perfect matching pairing — earrings + hair accessory",
      "Saves the guesswork for boyfriends shopping for their girlfriend",
      "Ready to gift right out of the courier box",
    ],
    stylingTip: "The ultimate wedding season or Diwali gifting bundle.",
    material: "Rani Pink Micro-Velvet, Satin, Gold Foil Embossing",
  },
  {
    id: "gift-6",
    name: "Dulhania Special The Ultimate Nakhrewali Hamper",
    category: "romantic-gifts",
    categoryLabel: "Dil Tu Jaan Tu",
    price: 2799,
    originalPrice: 4299,
    image:
      "https://i.pinimg.com/1200x/77/04/fb/7704fb995bcc55cf2d8fd40707ba7e00.jpg",
    rating: 5.0,
    reviewsCount: 310,
    badge: "Romantic Hit",
    bollywoodDialogue:
      "“100% Nakhrewali Certified! Kyunki drama ke bina koi love story poori nahi hoti.”",
    description:
      "The crowning jewel of Nakhrewali Dulhaniya. Packed with statement jhumkas, velvet bangles stack, bridal headband, scented soy candle, sweet treats, and a cheeky ‘Drama Queen Certificate’.",
    whySheLovesIt: [
      "All 4 product categories in one showstopper luxury box",
      "Playful ‘Official Nakhrewali’ certificate with your names",
      "Guaranteed to make her Instagram story of the year",
    ],
    stylingTip:
      "For the girlfriend or bride-to-be who deserves Bollywood level pampering.",
    material:
      "Lacquered Wooden Keepsake Chest with Gold Hardware, Silk Cushions",
  },
];

export const BOLLYWOOD_LOVE_NOTES = [
  {
    id: "note-1",
    title: "Geet Drama Queen Vibe",
    text: "“Main apni favorite hoon... par tum mere sabse favorite ho! Happy shopping to the most dramatic girlfriend ever. ❤️”",
    movie: "Jab We Met",
  },
  {
    id: "note-2",
    title: "Classic DDLJ Romance",
    text: "“Bade bade deshon mein aisi choti choti baatein hoti rehti hain, Senorita! Gift your heart out. ✨”",
    movie: "DDLJ",
  },
  {
    id: "note-3",
    title: "Yeh Jawaani Deewani Energy",
    text: "“Kahin pahunchne ke liye kahin se nikalna zaroori hota hai... par tumhare dil se nikalne ka mera koi irada nahi hai! 💫”",
    movie: "YJHD",
  },
  {
    id: "note-4",
    title: "Om Shanti Om Destiny",
    text: "“Itni shiddat se maine tumhe paane ki koshish ki hai... ki har zarre ne mujhe tumse milane ki saazish ki hai! 🌹”",
    movie: "Om Shanti Om",
  },
  {
    id: "note-5",
    title: "Cheeky Boyfriend Apology",
    text: "“Sorry for being annoying earlier. Please accept this jhumka peace offering before you declare World War 3 on me! 🙈”",
    movie: "Boyfriend Survival Code",
  },
];

export const REVIEWS_WALL = [
  {
    id: "rev-1",
    name: "Ananya Sharma",
    city: "Mumbai",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    productName: "Kajra Re Chandbalis",
    rating: 5,
    date: "2 days ago",
    comment:
      "My boyfriend surprised me with this on our 1-year anniversary with the Geet love note! I literally screamed. The jhumkas are so lightweight and the packaging felt like a fairytale.",
    tag: "Anniversary Gift",
  },
  {
    id: "rev-2",
    name: "Kabir & Tara",
    city: "Delhi NCR",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    productName: "Dulhania Special Hamper",
    rating: 5,
    date: "Yesterday",
    comment:
      "Bro if you made your girlfriend angry or want to score 100 boyfriend points, just order the Dulhania Special Hamper. The wax-sealed letter and velvet box is unmatched.",
    tag: "Boyfriend Lifesaver",
  },
  {
    id: "rev-3",
    name: "Rhea Sengupta",
    city: "Bangalore",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    productName: "Genda Phool Organza Bow",
    rating: 5,
    date: "3 days ago",
    comment:
      "The sheer volume on this hair bow is insane! Wore it to my bestie’s sangeet and at least 15 girls asked me where I bought it from. Obsessed with nakhrewalidulhaniya.com!",
    tag: "Sangeet Fit",
  },
  {
    id: "rev-4",
    name: "Zoya Khan",
    city: "Hyderabad",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    productName: "Leja Leja Velvet Bangles",
    rating: 5,
    date: "Last week",
    comment:
      "The green velvet with gold kadas is so rich and regal! Felt like Mastani dancing in Deewani Mastani. The tinkling sound is therapy.",
    tag: "Desi Aesthetic",
  },
];
