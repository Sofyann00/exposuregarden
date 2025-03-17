import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Basic Video Editing Package",
    description: "Essential video editing service for short content. Includes trimming, basic transitions, simple effects, and color correction for videos up to 5 minutes.",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1574717024453-354056afd6fc",
    category: "Video Editing"
  },
  {
    id: 2,
    name: "Professional Video Production",
    description: "Comprehensive video editing for professional content. Includes advanced transitions, motion graphics, sound design, and color grading for videos up to 15 minutes.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279",
    category: "Video Editing"
  },
  {
    id: 3,
    name: "Social Media Video Package",
    description: "Specialized editing for social media platforms. Optimized for engagement with eye-catching effects, text animations, and platform-specific formatting for Instagram, TikTok, and YouTube.",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    category: "Video Editing"
  },
  {
    id: 4,
    name: "Corporate Video Editing",
    description: "Professional editing for corporate presentations, training videos, and promotional content. Includes branding elements, professional transitions, and corporate-style graphics.",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1551817958-d9d86fb29431",
    category: "Video Editing"
  },
  {
    id: 5,
    name: "Portrait Photo Retouching",
    description: "Professional retouching for portrait photography. Includes skin smoothing, blemish removal, color enhancement, and subtle facial contouring while maintaining natural appearance.",
    price: 750000,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
    category: "Photo Editing"
  },
  {
    id: 6,
    name: "Product Photography Enhancement",
    description: "Specialized editing for e-commerce and product photos. Includes background removal/replacement, color correction, shadow addition, and image optimization for online stores.",
    price: 1000000,
    image: "https://images.unsplash.com/photo-1620674156044-52b714665d46",
    category: "Photo Editing"
  },
  {
    id: 7,
    name: "Wedding Photo Editing Package",
    description: "Comprehensive editing for wedding photography. Includes color correction, exposure balancing, skin retouching, and artistic effects for your special day memories.",
    price: 2000000,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    category: "Photo Editing"
  },
  {
    id: 8,
    name: "Real Estate Photo Enhancement",
    description: "Professional editing for real estate photography. Includes perspective correction, HDR blending, sky replacement, and color enhancement to showcase properties at their best.",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    category: "Photo Editing"
  },
  {
    id: 9,
    name: "Advanced Video Special Effects",
    description: "High-end visual effects for videos requiring complex elements. Includes green screen compositing, particle effects, 3D integration, and advanced motion tracking.",
    price: 5000000,
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580",
    category: "Video Editing"
  },
  {
    id: 10,
    name: "Documentary Editing Service",
    description: "Specialized editing for documentary-style videos. Includes narrative structuring, interview compilation, archival footage integration, and documentary-style color grading.",
    price: 4000000,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    category: "Video Editing"
  },
  {
    id: 11,
    name: "Quick Photo Editing",
    description: "Fast turnaround basic photo editing. Includes exposure correction, color balancing, cropping, and basic retouching for up to 10 photos.",
    price: 350000,
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5",
    category: "Photo Editing"
  },
  {
    id: 12,
    name: "Bulk Photo Editing",
    description: "Efficient editing for large batches of photos. Consistent adjustments for exposure, color, contrast, and basic retouching for events, products, or portfolio images.",
    price: 1500000,
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
    category: "Photo Editing"
  }
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
