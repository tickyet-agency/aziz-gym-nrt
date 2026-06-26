/**
 * Curated photography sourced from Unsplash (free to use under the
 * Unsplash License — https://unsplash.com/license). Each entry traces
 * back to a real, verified photo page. Swap any of these for your own
 * brand photography by replacing the `src` value — see README.md.
 */
export interface SourcedPhoto {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

export const PHOTOS = {
  heroBackground: {
    src: "/images/media__1782399380054.png",
    alt: "Muscular man's back training in a dark, premium gym",
    credit: "Local Brand Photography",
    creditUrl: "#",
  },
  freeWeightZone: {
    src: "https://images.unsplash.com/photo-1620188540300-c156a625c6fc?q=80&w=1600&auto=format&fit=crop",
    alt: "Black dumbbells racked in a dark gym",
    credit: "Eduardo Cano Photo Co.",
    creditUrl: "https://unsplash.com/@eduardocanophotoco",
  },
  cardioFloor: {
    src: "https://images.unsplash.com/photo-1542766788-a2f588f447ee?q=80&w=1600&auto=format&fit=crop",
    alt: "Treadmill on a gym cardio floor",
    credit: "gina lin",
    creditUrl: "https://unsplash.com/@shuttch",
  },
  equipmentBay: {
    src: "https://images.unsplash.com/photo-1545612036-2872840642dc?q=80&w=1600&auto=format&fit=crop",
    alt: "Gym equipment inside a training room",
    credit: "George Pagan III",
    creditUrl: "https://unsplash.com/@gpthree",
  },
  functionalZone: {
    src: "/images/media__1782399380256.jpg",
    alt: "Premium fitness machines in a dark gold gym interior",
    credit: "Local Brand Photography",
    creditUrl: "#",
  },
  trainerAziz: {
    src: "/images/media__1782399380054.jpg",
    alt: "Mohammed Aziz, Head Coach & Founder",
    credit: "Local Brand Photography",
    creditUrl: "#",
  },
  trainerRahul: {
    src: "/images/media__1782399380072.jpg",
    alt: "Rahul Verma, Personal Trainer",
    credit: "Local Brand Photography",
    creditUrl: "#",
  },
  trainerSameer: {
    src: "/images/media__1782399380087.jpg",
    alt: "Sameer Khan, Personal Trainer",
    credit: "Local Brand Photography",
    creditUrl: "#",
  },
  trainerCoaching: {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    alt: "Trainer coaching member form in the gym",
    credit: "Anastasija Vujic",
    creditUrl: "https://unsplash.com/@anastasijavujic",
  },
  /* ── WhyUs section — cards that previously had no image ── */
  whyusSpacious: {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600&auto=format&fit=crop",
    alt: "Spacious, open gym floor with ample training space",
    credit: "Danielle Cerullo",
    creditUrl: "https://unsplash.com/@dncerullo",
  },
  whyusPersonalTraining: {
    src: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=1600&auto=format&fit=crop",
    alt: "One-on-one personal training session in a gym",
    credit: "Jonathan Borba",
    creditUrl: "https://unsplash.com/@jonathanborba",
  },
  whyusFriendly: {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1600&auto=format&fit=crop",
    alt: "Welcoming gym atmosphere with members training together",
    credit: "Sven Mieke",
    creditUrl: "https://unsplash.com/@sxoxm",
  },
  whyusTrusted: {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
    alt: "Gym members training together in a community environment",
    credit: "Karsten Winegeart",
    creditUrl: "https://unsplash.com/@karsten116",
  },
  /* ── Diet & Nutrition section ── */
  nutritionHeroBg: {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop",
    alt: "Colourful healthy meal prep bowls on dark surface",
    credit: "Brooke Lark",
    creditUrl: "https://unsplash.com/@brookelark",
  },
  nutritionDietPlan: {
    src: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=800&auto=format&fit=crop",
    alt: "Personalised diet plan with healthy foods and notebook",
    credit: "Vicky Ng",
    creditUrl: "https://unsplash.com/@vickyng",
  },
  nutritionBalanced: {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    alt: "Balanced nutrition bowl with vegetables, grains and protein",
    credit: "Anna Pelzer",
    creditUrl: "https://unsplash.com/@annapelzer",
  },
  nutritionMealPrep: {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop",
    alt: "Weekly meal prep containers lined up on a dark counter",
    credit: "S'well",
    creditUrl: "https://unsplash.com/@swell",
  },
  nutritionWeightLoss: {
    src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop",
    alt: "Clean, light weight-loss friendly salad and lean foods",
    credit: "Dan Gold",
    creditUrl: "https://unsplash.com/@danielcgold",
  },
  nutritionMuscle: {
    src: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=800&auto=format&fit=crop",
    alt: "High-protein foods for muscle gain — eggs, meat, nuts",
    credit: "Louis Hansel",
    creditUrl: "https://unsplash.com/@louishansel",
  },
  nutritionLifestyle: {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    alt: "Active person enjoying a healthy lifestyle with fresh food",
    credit: "Huha Inc.",
    creditUrl: "https://unsplash.com/@huha",
  },
  planGeneral: {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    alt: "Trainee lifting dumbbells on gym floor",
    credit: "Daniil Lobachev",
    creditUrl: "https://unsplash.com/@lobachevphoto",
  },
  planPersonal: {
    src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    alt: "Coach guiding personal client workout",
    credit: "Sven Mieke",
    creditUrl: "https://unsplash.com/@sxoxm",
  },
  finalCtaBg: {
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop",
    alt: "Atmospheric dark gym weights close-up",
    credit: "Sven Mieke",
    creditUrl: "https://unsplash.com/@sxoxm",
  },
  mapBg: {
    src: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=1600&auto=format&fit=crop",
    alt: "Dark industrial gym background wall textures",
    credit: "Sven Mieke",
    creditUrl: "https://unsplash.com/@sxoxm",
  },
  avatarArjun: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    alt: "Arjun Mehta",
    credit: "Joseph Gonzalez",
    creditUrl: "https://unsplash.com/@josephgonzalez",
  },
  avatarPriya: {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
    alt: "Priya Sharma",
    credit: "Michael Dam",
    creditUrl: "https://unsplash.com/@michaeldam",
  },
  avatarImran: {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
    alt: "Imran Sheikh",
    credit: "Albert Dera",
    creditUrl: "https://unsplash.com/@albertdera",
  },
  avatarSneha: {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
    alt: "Sneha Reddy",
    credit: "Christopher Campbell",
    creditUrl: "https://unsplash.com/@obiqua",
  },
  avatarVikram: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    alt: "Vikram Rao",
    credit: "Jake Nackos",
    creditUrl: "https://unsplash.com/@jakenackos",
  },
  avatarFatima: {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
    alt: "Fatima Ali",
    credit: "Jonas Kakaroto",
    creditUrl: "https://unsplash.com/@jonaskakaroto",
  },
} satisfies Record<string, SourcedPhoto>;
