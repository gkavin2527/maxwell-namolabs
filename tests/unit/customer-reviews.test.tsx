import * as React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { testimonials, type Testimonial } from "@/content/testimonials";

// Placeholder data for the tests only. Real reviews must come from the client (PRD FR-005).
const review = (id: string, overrides: Partial<Testimonial> = {}): Testimonial => ({
  id,
  quote: `Quote ${id}`,
  author: `Author ${id}`,
  ...overrides,
});

const quotes = (container: HTMLElement) => [...container.querySelectorAll("blockquote")];

describe("CustomerReviews", () => {
  it("shows each supplied review with its author", async () => {
    const { container } = render(<CustomerReviews reviews={[review("a"), review("b")]} />);

    await waitFor(() => {
      expect(quotes(container).map((quote) => quote.textContent)).toEqual([
        "“Quote a”",
        "“Quote b”",
      ]);
    });
    expect(screen.getByText("Author a")).toBeTruthy();
    expect(screen.getByText("Author b")).toBeTruthy();
  });

  it("shows stars only for reviews that have a rating", async () => {
    render(<CustomerReviews reviews={[review("a", { rating: 5 }), review("b", { rating: 4 }), review("c")]} />);

    await waitFor(() => {
      expect(screen.getAllByRole("img").map((stars) => stars.getAttribute("aria-label"))).toEqual([
        "Rated 5 out of 5",
        "Rated 4 out of 5",
      ]);
    });
  });

  it("keeps ratings between 0 and 5", async () => {
    render(<CustomerReviews reviews={[review("a", { rating: 9 }), review("b", { rating: -2 })]} />);

    await waitFor(() => {
      expect(screen.getAllByRole("img").map((stars) => stars.getAttribute("aria-label"))).toEqual([
        "Rated 5 out of 5",
        "Rated 0 out of 5",
      ]);
    });
  });

  it("joins the location and type of cover under the author", async () => {
    render(
      <CustomerReviews reviews={[review("a", { location: "Auckland", insuranceType: "Life cover" })]} />
    );

    expect(await screen.findByText("Auckland · Life cover")).toBeTruthy();
  });

  it("shows at most three reviews and links to the rest", async () => {
    const { container } = render(
      <CustomerReviews reviews={[review("a"), review("b"), review("c"), review("d")]} />
    );

    await waitFor(() => {
      expect(quotes(container)).toHaveLength(3);
    });
    expect(screen.queryByText("Author d")).toBeNull();
    expect(
      screen.getByRole("link", { name: "Read more customer feedback" }).getAttribute("href")
    ).toBe("/testimonials");
  });

  it("invites people to share an experience instead of inventing reviews", async () => {
    const { container } = render(<CustomerReviews reviews={[]} />);

    expect(await screen.findByRole("heading", { level: 2 })).toBeTruthy();
    expect(quotes(container)).toHaveLength(0);
    expect(screen.queryAllByRole("img")).toHaveLength(0);
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("What Our Customers Say");
    expect(screen.getByRole("link", { name: "Share your experience" }).getAttribute("href")).toBe(
      "/contact"
    );
  });

  it("uses the client-supplied reviews by default", () => {
    const { container } = render(<CustomerReviews />);

    expect(quotes(container)).toHaveLength(Math.min(3, testimonials.length));
  });
});
