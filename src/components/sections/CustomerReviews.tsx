import * as React from "react";
import { MessageSquareQuote, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/utils";

const MAX_REVIEWS = 3;

function Stars({ rating }: { rating: number }) {
  const filled = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <div role="img" aria-label={`Rated ${filled} out of 5`} className="flex gap-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn("w-4 h-4", index < filled ? "fill-amber-500 text-amber-500" : "text-silver")}
        />
      ))}
    </div>
  );
}

export interface CustomerReviewsProps {
  /** Defaults to the client-supplied reviews in src/content/testimonials.ts. */
  reviews?: Testimonial[];
}

/**
 * Customer reviews for the home page.
 *
 * Only shows reviews supplied by the client (PRD FR-005 forbids invented testimonials). While
 * src/content/testimonials.ts is empty it shows an invitation to share an experience instead.
 */
export function CustomerReviews({ reviews = testimonials }: CustomerReviewsProps) {
  const shown = reviews.slice(0, MAX_REVIEWS);

  return (
    <section aria-labelledby="home-reviews-heading" className="space-y-10">
      <div className="text-center max-w-[700px] mx-auto space-y-3">
        <Eyebrow>Customer Reviews</Eyebrow>
        <Heading as="h2" id="home-reviews-heading" size="heading-lg">
          What Our Customers Say
        </Heading>
      </div>

      {shown.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((review) => {
              const details = [review.location, review.insuranceType].filter(Boolean).join(" · ");

              return (
                <li key={review.id}>
                  <figure className="h-full bg-white border border-mist rounded-3xl p-7 flex flex-col gap-4">
                    {review.rating !== undefined && <Stars rating={review.rating} />}
                    <blockquote className="text-[15px] text-graphite leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-auto pt-4 border-t border-mist">
                      <span className="block text-[14px] font-semibold text-deep-indigo">
                        {review.author}
                      </span>
                      {details && <span className="block text-[13px] text-slate">{details}</span>}
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>

          <div className="text-center">
            <Button href="/testimonials" variant="secondary" size="default">
              Read more customer feedback
            </Button>
          </div>
        </>
      ) : (
        <div className="max-w-[640px] mx-auto bg-white border border-mist rounded-3xl p-8 md:p-10 text-center space-y-5">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-glacial-wash text-electric-cobalt flex items-center justify-center">
            <MessageSquareQuote className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h3 className="text-[22px] font-bold text-deep-indigo">Worked with Roger or Kiri?</h3>
            <p className="text-[15px] text-graphite leading-relaxed">
              We&rsquo;d love to hear about your experience with Maxwell Financial Services.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="default">
            Share your experience
          </Button>
        </div>
      )}
    </section>
  );
}
