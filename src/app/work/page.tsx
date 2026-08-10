import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollFade from "@/components/ScrollFade";
import WorkGallery from "@/components/WorkGallery";
import { brand } from "@/config/brand";
import { WORK_PHOTOS } from "@/lib/work";

export const metadata: Metadata = {
  title: `Our Work | ${brand.name}`,
  description: `Photos from real jobs — panel upgrades, chandelier and fixture installs, landscape lighting, and more from the ${brand.name} crew.`,
};

export default function WorkPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <section className="pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="max-w-content mx-auto px-5 md:px-8">
            <ScrollFade className="max-w-2xl">
              <p className="eyebrow">Our work</p>
              <h1 className="mt-4 font-display font-bold text-h1-m md:text-h1-d text-ink text-balance">
                Real jobs, real crew.
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] text-charcoal max-w-[56ch]">
                Panel upgrades, fixture and chandelier installs, landscape lighting, and the
                team behind it — {WORK_PHOTOS.length} photos from recent work across the Valley.
              </p>
            </ScrollFade>

            <div className="mt-12 md:mt-14">
              <WorkGallery photos={WORK_PHOTOS} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
