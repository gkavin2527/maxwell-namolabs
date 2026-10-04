export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  insuranceType?: string;
  rating?: number;
}

export interface Award {
  title: string;
  event: string;
  date: string;
  venue: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export const awards: Award[] = [
  {
    title: "Top Achiever Award 2023",
    event: "mySolutions Business Excellence Awards",
    date: "March 14th, 2024",
    venue: "Hyundai Marine Events Centre, Tamaki Drive, Auckland",
    description:
      "On March 14th, 2024, Maxwell Financial Services received the prestigious Top Achiever Award 2023 at the mySolutions business excellence awards held at the Hyundai Marine Events Centre located in Auckland’s Tamaki Drive.",
    images: [
      {
        src: "/images/trust/award-002.jpeg",
        alt: "Maxwell Financial Services achieved top recognition of the prestigious Top Achiever Award 2023",
      },
      {
        src: "/images/trust/award-001.jpeg",
        alt: "Roger Venkatesh receiving Top Achiever Award at mySolutions awards",
      },
    ],
  },
];

// NOTE(audit C-3): Scraped site used an unrendered external iframe widget for Google/client reviews.
// TODO(client): Provide client quotes or enable Google Review integration.
export const testimonials: Testimonial[] = [];
