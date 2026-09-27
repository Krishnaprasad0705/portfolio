export interface BeyondIdentity {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  heroImg: string;
  accentColor: string;
  supportingImages: {
    src: string;
    title?: string;
    caption?: string;
    aspect?: "portrait" | "landscape" | "square";
  }[];
  keywords: string[];
}

export const BEYOND_DATA_PALETTE = {
  bg: "#080807",
  secondary: "#11100D",
  gold: "#D4AF37",
  brightGold: "#F4D06F",
  warmIvory: "#F5F0E6",
  muted: "#A8A08F",
  darkBronze: "#3A3020",
};

export const BEYOND_IDENTITIES: BeyondIdentity[] = [
  {
    id: "explorer",
    number: "01",
    title: "EXPLORER",
    subtitle: "CURIOUS BY DEFAULT.",
    quote: "Always curious about what lies beyond the familiar.",
    description:
      "Curious about places, people, open horizons and novel experiences. Exploration is the natural impulse to see the world with wide-eyed wonder, unconstrained by routine.",
    heroImg: "/BEYOND-DATA/Explorer/images/Heroimg.png",
    accentColor: "#D4AF37",
    keywords: ["DISCOVERY", "HORIZONS", "PERSPECTIVE", "OPEN SPACES", "JOURNEY"],
    supportingImages: [
      {
        src: "/BEYOND-DATA/Explorer/images/img.jpg",
        title: "Wanderer's Lens",
        caption: "Finding stillness amidst vast journeys",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Explorer/images/img1.jpg",
        title: "Beyond The Horizon",
        caption: "A quiet moment of reflection on the open road",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Explorer/images/img2.jpg",
        title: "Atmosphere & Light",
        caption: "Observing textures and terrain from new angles",
        aspect: "square",
      },
      {
        src: "/BEYOND-DATA/Explorer/images/img3.jpg",
        title: "The Solitary Path",
        caption: "Where every detour becomes a meaningful discovery",
        aspect: "square",
      },
      {
        src: "/BEYOND-DATA/Explorer/images/img4.jpg",
        title: "Uncharted Frames",
        caption: "Documenting places that leave a lasting impression",
        aspect: "square",
      },
      {
        src: "/BEYOND-DATA/Explorer/images/img5.jpg",
        title: "Natural Rhythm",
        caption: "Stepping outside the familiar into the elements",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Explorer/images/img6.jpg",
        title: "Twilight Exploration",
        caption: "The subtle beauty found when day turns into night",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "artist",
    number: "02",
    title: "ARTIST",
    subtitle: "THE ARTIST'S EYE.",
    quote: "Finding different ways to see, create and express beyond words and data.",
    description:
      "Creativity, composition, and visual experimentation. Stepping beyond structured logic into freeform visual thought, line art, color depth, and emotional resonance.",
    heroImg: "/BEYOND-DATA/Artist/images/Heroimg.png",
    accentColor: "#F4D06F",
    keywords: ["COMPOSITION", "EXPRESSION", "CONTRAST", "EXPERIMENTATION", "LINEWORK"],
    supportingImages: [
      {
        src: "/BEYOND-DATA/Artist/images/img.jpeg",
        title: "Drawn Form",
        caption: "Intricate line study and delicate hand-drawn texture",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Artist/images/img1.png",
        title: "Visual Study I",
        caption: "Exploring balance, contrast and tactile detail",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Artist/images/img2.jpeg",
        title: "Artistic Expression",
        caption: "Emotional gesture captured through patient craftsmanship",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Artist/images/img3.png",
        title: "Abstract Rhythm",
        caption: "Harmonizing shapes and values into unified visual voice",
        aspect: "square",
      },
    ],
  },
  {
    id: "athlete",
    number: "03",
    title: "ATHLETE & SPORTSPERSON",
    subtitle: "DISCIPLINE. MOVEMENT. PERSISTENCE.",
    quote: "Energy, focus and physical persistence that fuels mental clarity.",
    description:
      "Physical discipline and endurance. The dedication to move, train, persist through fatigue, and cultivate the mental resilience that underpins every aspect of personal growth.",
    heroImg: "/BEYOND-DATA/Athlete/images/Heroimg.png",
    accentColor: "#D4AF37",
    keywords: ["DISCIPLINE", "MOVEMENT", "PERSISTENCE", "GRIT", "ENDURANCE"],
    supportingImages: [
      {
        src: "/BEYOND-DATA/Athlete/images/img.png",
        title: "Kinetic Focus",
        caption: "Channeling energy into disciplined motion",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Athlete/images/img1.png",
        title: "The Court & Field",
        caption: "Dedication and rhythm built through consistent practice",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Athlete/images/img2.png",
        title: "Dynamic Drive",
        caption: "Pushing physical limits with quiet determination",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Athlete/images/img3.png",
        title: "Endurance Mindset",
        caption: "Every repetition trains mental fortitude",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Athlete/images/img4.png",
        title: "Speed & Reflex",
        caption: "Precision timing in high-energy sport",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Athlete/images/img5.png",
        title: "Grit & Agility",
        caption: "Staying centered under pressure",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Athlete/images/img6.png",
        title: "Movement In Action",
        caption: "The flow state where body and mind move as one",
        aspect: "landscape",
      },
      {
        src: "/BEYOND-DATA/Athlete/images/img7.png",
        title: "Team & Spirit",
        caption: "Shared passion, camaraderie and sportsmanship",
        aspect: "landscape",
      },
    ],
  },
  {
    id: "photographer",
    number: "04",
    title: "PHOTOGRAPHER",
    subtitle: "A PERSONAL VISUAL JOURNAL.",
    quote: "Capturing moments, perspectives and stories through a different lens.",
    description:
      "A curated visual diary of candid moments, light, atmosphere, and fleeting stories. Through the viewfinder, everyday fragments transform into enduring photographic memories.",
    heroImg: "/BEYOND-DATA/Photographer/images/heroimg.png",
    accentColor: "#D4AF37",
    keywords: ["LIGHT", "CANDID", "STORYTELLING", "PERSPECTIVE", "SHADOW"],
    supportingImages: [
      {
        src: "/BEYOND-DATA/Photographer/images/img.jpeg",
        title: "Golden Hour Glow",
        caption: "Chasing ambient light and quiet street silhouettes",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Photographer/images/img1.jpeg",
        title: "Candid Stillness",
        caption: "Capturing unscripted human expressions",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Photographer/images/img2.jpeg",
        title: "Framed Perspective",
        caption: "Geometry, natural framing, and architectural rhythm",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Photographer/images/img3.jpeg",
        title: "Urban Shadows",
        caption: "High contrast compositions bathed in natural sunlight",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Photographer/images/img4.jpeg",
        title: "Atmospheric Depth",
        caption: "The interplay of depth of field and soft focal blur",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Photographer/images/img5.jpeg",
        title: "Street Story",
        caption: "A fleeting moment frozen in natural color tones",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Photographer/images/img6.jpeg",
        title: "Quiet Vignette",
        caption: "Embracing minimalism and negative space",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Photographer/images/img7.jpeg",
        title: "Monochrome Study",
        caption: "Texture, mood, and timeless tonal balance",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "creative",
    number: "05",
    title: "CREATIVE MEDIA DESIGNER",
    subtitle: "CREATIVE ARCHIVE & ART DIRECTION.",
    quote: "Bridging the gap between conceptual visual art and impactful communication.",
    description:
      "Crafting event creatives, exhibition posters, visual identity systems, and dynamic digital assets. Translating complex technical concepts into captivating graphic narratives.",
    heroImg: "/BEYOND-DATA/Creative-Media-Designer/images/Heroimg.jpg",
    accentColor: "#F4D06F",
    keywords: ["POSTERS", "EVENT CREATIVES", "TYPOGRAPHY", "MEDIA", "ART DIRECTION"],
    supportingImages: [
      {
        src: "/BEYOND-DATA/Creative-Media-Designer/images/img.png",
        title: "Event Creative Campaign",
        caption: "High-impact visual communication for modern conferences",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Creative-Media-Designer/images/img1.png",
        title: "Keynote Exhibition Poster",
        caption: "Bold typography, color hierarchy and thematic design",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Creative-Media-Designer/images/img2.png",
        title: "Digital Art & Narrative",
        caption: "Layered visual concepts designed for digital engagement",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Creative-Media-Designer/images/img3.png",
        title: "Conference Media System",
        caption: "Cohesive visual identity tailored for modern tech gatherings",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "philanthropist",
    number: "06",
    title: "PHILANTHROPIST",
    subtitle: "COMMUNITY. CONTRIBUTION. PURPOSE.",
    quote: "Data is what I work with. People, compassion and community are what make me.",
    description:
      "Grounding technical ambition in human empathy. Believing that success is only meaningful when used to uplift others, support community initiatives, and give back selflessly.",
    heroImg: "/BEYOND-DATA/Philanthropist/images/heroimg.png",
    accentColor: "#D4AF37",
    keywords: ["COMMUNITY", "EMPATHY", "GIVING BACK", "HUMAN CONNECTION", "PURPOSE"],
    supportingImages: [
      {
        src: "/BEYOND-DATA/Philanthropist/images/img.jpeg",
        title: "Community Outreach",
        caption: "Supporting local education, mentorship and grassroots causes",
        aspect: "landscape",
      },
      {
        src: "/BEYOND-DATA/Philanthropist/images/img1.jpg",
        title: "Humane Contribution",
        caption: "Direct support towards welfare and meaningful social causes",
        aspect: "portrait",
      },
      {
        src: "/BEYOND-DATA/Philanthropist/images/img2.jpg",
        title: "Giving With Purpose",
        caption: "Quiet commitment to making a positive difference in someone's life",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "collage",
    number: "07",
    title: "COLLAGE / IDENTITY WALL",
    subtitle: "WHERE ALL WORLDS CONVERGE.",
    quote: "The multifaceted tapestry of curiosity, art, discipline and human warmth.",
    description:
      "A cinematic intersection where code meets creativity, data meets human connection, and logic harmonizes with art. The complete portrait of who I am.",
    heroImg: "/BEYOND-DATA/Explorer/images/Heroimg.png",
    accentColor: "#F4D06F",
    keywords: ["SYNTHESIS", "TAPESTRY", "HOLISTIC", "MULTIFACETED", "AUTHENTIC"],
    supportingImages: [
      {
        src: "/BEYOND-DATA/Artist/images/Heroimg.png",
        title: "The Artist's Eye",
        caption: "Visual thinking and craftsmanship",
        aspect: "landscape",
      },
      {
        src: "/BEYOND-DATA/Athlete/images/Heroimg.png",
        title: "Athletic Discipline",
        caption: "Grit and physical resilience",
        aspect: "landscape",
      },
      {
        src: "/BEYOND-DATA/Photographer/images/heroimg.png",
        title: "The Viewfinder",
        caption: "Light and candid storytelling",
        aspect: "landscape",
      },
      {
        src: "/BEYOND-DATA/Creative-Media-Designer/images/Heroimg.jpg",
        title: "Creative Direction",
        caption: "Impactful visual media",
        aspect: "landscape",
      },
      {
        src: "/BEYOND-DATA/Philanthropist/images/heroimg.png",
        title: "Compassion & Purpose",
        caption: "Uplifting others with empathy",
        aspect: "landscape",
      },
    ],
  },
];
