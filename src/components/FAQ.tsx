"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollFade from "./ScrollFade";
import { FAQS as QA } from "@/lib/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <ScrollFade className="max-w-2xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
            Questions before we come out.
          </h2>
        </ScrollFade>

        <div className="mt-12 md:mt-14 max-w-3xl mx-auto divide-y divide-hairline border-y border-hairline">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <ScrollFade key={item.q} delay={i * 40} as="div">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left"
                >
                  <span className="font-display font-bold text-[18px] md:text-[20px] text-ink text-pretty">
                    {item.q}
                  </span>
                  <span
                    className={`w-9 h-9 inline-flex items-center justify-center rounded-full border shrink-0 transition-colors ${
                      isOpen
                        ? "bg-brand text-white border-brand"
                        : "bg-white text-ink border-hairline"
                    }`}
                  >
                    {isOpen ? <Minus size={16} strokeWidth={2.25} /> : <Plus size={16} strokeWidth={2.25} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] md:text-[16px] leading-[1.65] text-charcoal pr-12 max-w-[64ch]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </ScrollFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
