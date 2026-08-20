// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

"use client";

import { useState } from "react";
import { GalleryOverlay } from "@/components/originkit/ui/hero-03/gallery-overlay";
import { HeroContent } from "@/components/originkit/ui/hero-03/hero-content";
import { PerspectiveBackground } from "@/components/originkit/ui/hero-03/perspective-background";

export const Section12Hero = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const handleExplore = () => {
    const el = document.getElementById("servicos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setGalleryOpen(true);
    }
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
  };

  const handleBook = () => {
    window.open(
      "https://wa.me/5511975115131?text=Ol%C3%A1%20Lucas!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.",
      "_blank"
    );
  };

  return (
    <section
      aria-label="Portrait perspective gallery"
      className="relative isolate w-full overflow-hidden bg-[#fffbe1]"
    >
      <div className="relative mx-auto flex h-screen w-full max-w-[1600px] flex-col wide-lg:max-w-none">
        <PerspectiveBackground />

        {/* Content centered in the visible area below the fixed header (~80px) */}
        <div className="pointer-events-none relative z-20 flex flex-1 flex-col items-center justify-center px-4 pb-12 pt-20 ipad:px-12 desktop-sm:px-6 desktop-sm:pb-20 desktop-sm:pt-20">
          <HeroContent onExplore={handleExplore} onBook={handleBook} />
        </div>
      </div>

      <GalleryOverlay open={galleryOpen} onClose={handleCloseGallery} />
    </section>
  );
};
