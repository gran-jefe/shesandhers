"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const productImages = [
  "product-1.jpg",
  "product-2.jpg",
  "product-3.jpg",
  "product-4.jpg",
  "product-5.jpg",
  "product-6.jpg",
  "WhatsApp Image 2026-04-14 at 11.51.09.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.10.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.11 (1).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.12.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.13.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.13 (2).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.13 (3).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.14.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.14 (1).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.15.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.16.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.17.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.19.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.19 (1).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.20.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.20 (1).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.20 (2).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.20 (4).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.21.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.21 (1).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.22.jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.22 (1).jpeg",
  "WhatsApp Image 2026-04-14 at 11.51.22 (2).jpeg",
];

export function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="products" className="py-24 bg-white dark:bg-sh-deep">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <SectionLabel>What we offer</SectionLabel>
          <h2 className="font-playfair font-700 text-4xl md:text-5xl text-sh-base dark:text-white mt-4 mb-8">
            Everything she needs, beautifully curated.
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-sh-gold rounded-full" />
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {productImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex-shrink-0 w-72 h-80 rounded-2xl overflow-hidden border border-sh-border dark:border-sh-deep hover:scale-[1.05] hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-full bg-gray-200 dark:bg-gray-700">
                  <img
                    src={`/images/${image}`}
                    alt={`Product ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-sh-base/20 group-hover:bg-sh-base/30 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-sh-plum hover:bg-sh-magenta text-white p-2 rounded-full transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-sh-plum hover:bg-sh-magenta text-white p-2 rounded-full transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
