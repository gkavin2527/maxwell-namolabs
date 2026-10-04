import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export default function NotFound() {
  return (
    <div className="py-20">
      <Container narrow>
        <div className="bg-[#ffffff] border border-[#e9e9e9] rounded-[40px] p-8 md:p-14 shadow-sm text-center space-y-6">
          <Tag variant="glacial">404 &bull; Page Not Found</Tag>

          <Heading as="h1" size="display">
            Looking for Insurance Advice?
          </Heading>

          <p className="text-[16px] text-[#4f4f4f] max-w-[500px] mx-auto leading-relaxed">
            The page you are looking for may have been moved or updated. Use the links below to return home or explore our insurance products.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/" variant="primary" size="lg">
              Return to Homepage
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Roger Venkatesh
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
