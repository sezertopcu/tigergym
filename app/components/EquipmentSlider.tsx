"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    image: "/standing-lateral-raise-machine.png",
    title: "Standing Lateral Raise",
    label: "Omuz odaklı çalışma",
    text: "Yan omuz kaslarını izole eden kontrollü ekipman.",
  },
  {
    image: "/hack-squat-machine.png",
    title: "Hack Squat",
    label: "Alt vücut gücü",
    text: "Bacak kasları için güçlü ve dengeli çalışma alanı.",
  },
  {
    image: "/low-row-machine.png",
    title: "Low Row",
    label: "Sırt odaklı çalışma",
    text: "Sırt kaslarını hedefleyen etkili üst vücut ekipmanı.",
  },
];

export default function EquipmentSlider() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const item = useMemo(() => slides[active], [active]);

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  useEffect(() => {
    const timer = setInterval(next, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="equipment"
      className="relative overflow-hidden bg-[#f7f7f4] py-24 md:py-28"
    >
      <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[150px]" />
      <div className="absolute -right-40 bottom-20 h-[520px] w-[520px] rounded-full bg-orange-200/40 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm font-black uppercase tracking-[0.45em] text-orange-600">
              Ekipmanlar
            </p>

            <h2 className="mt-5 text-5xl font-black italic leading-[0.95] tracking-tight md:text-7xl">
              Güçlü ekipman,
              <br />
              <span className="text-orange-600">net performans.</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              className="grid h-14 w-14 place-items-center rounded-full border border-black/10 bg-white text-3xl font-black shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-orange-600 hover:text-white"
              aria-label="Önceki ekipman"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={next}
              className="grid h-14 w-14 place-items-center rounded-full border border-black/10 bg-white text-3xl font-black shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-orange-600 hover:text-white"
              aria-label="Sonraki ekipman"
            >
              ›
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="overflow-hidden rounded-[34px] border border-black/10 bg-white shadow-[0_35px_90px_rgba(0,0,0,.12)]"
        >
          <div className="grid lg:grid-cols-[420px_1fr]">
            <div className="relative overflow-hidden bg-black p-8 text-white md:p-10">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-orange-600/25 blur-[80px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: direction * 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -35 }}
                  transition={{ duration: 0.35 }}
                  className="relative flex h-full min-h-[330px] flex-col justify-between md:min-h-[430px]"
                >
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-500">
                      {String(active + 1).padStart(2, "0")} / 03
                    </p>

                    <h3 className="mt-8 text-4xl font-black italic uppercase leading-none md:text-5xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-xl font-black text-orange-500">
                      {item.label}
                    </p>

                    <p className="mt-5 max-w-sm text-base leading-8 text-zinc-300">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="mb-5 h-1 w-24 rounded-full bg-orange-600" />

                    <div className="flex gap-3">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => goTo(index)}
                          className={`h-3 rounded-full transition-all ${
                            active === index
                              ? "w-12 bg-orange-600"
                              : "w-3 bg-white/30 hover:bg-white/60"
                          }`}
                          aria-label={`${index + 1}. ekipmana geç`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative flex min-h-[480px] items-center justify-center bg-[#f8f8f5] p-4 md:min-h-[680px] md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.image}
                  initial={{ opacity: 0, scale: 0.96, x: direction * 40 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96, x: direction * -40 }}
                  transition={{ duration: 0.45 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70) next();
                    if (info.offset.x > 70) prev();
                  }}
                  className="flex w-full cursor-grab items-center justify-center active:cursor-grabbing"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={1200}
                    className="h-auto max-h-[560px] w-auto max-w-full select-none object-contain md:max-h-[720px]"
                    priority={active === 0}
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => goTo(index)}
              className={`rounded-2xl border p-4 text-left transition ${
                active === index
                  ? "border-orange-600 bg-white shadow-lg shadow-black/5"
                  : "border-black/10 bg-white/60 hover:border-orange-600 hover:bg-white"
              }`}
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm font-black uppercase text-black">
                {slide.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}