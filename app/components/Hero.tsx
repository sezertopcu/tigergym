"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    label: "Modern",
    title: "Premium Spor Salonu",
    text: "Ferah alan, güçlü atmosfer ve modern ekipmanlarla kaliteli antrenman deneyimi.",
  },
  {
    label: "Smart",
    title: "Akıllı Sistemler",
    text: "Kartlı turnike ve akıllı dolap sistemiyle hızlı, güvenli ve pratik kullanım.",
  },
  {
    label: "Power",
    title: "Güçlü Ekipmanlar",
    text: "Profesyonel makinelerle omuz, sırt, bacak ve tüm vücut antrenmanları.",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f7f4] px-4 pb-16 pt-28 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[140px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.15 }}
        className="absolute right-[-180px] top-40 h-[520px] w-[520px] rounded-full bg-orange-200/50 blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-orange-600">
              Premium Fitness Club
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black italic leading-[0.95] tracking-tight text-black md:text-7xl">
              Gücünü keşfet,
              <br />
              sınırlarını <span className="text-orange-600">aş.</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-orange-600 px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-orange-600/25 transition hover:-translate-y-1 hover:bg-black"
            >
              İletişime Geç
            </a>

            <a
              href="#systems"
              className="rounded-full border border-black/15 bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:-translate-y-1 hover:border-orange-600 hover:text-orange-600"
            >
              Keşfet
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.14)]"
        >
          <Image
            src="/hero-tigergym.png"
            alt="Tiger Gym Hero"
            width={1600}
            height={900}
            priority
            className="h-auto w-full object-contain"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        </motion.div>

        <div className="-mt-4 grid gap-5 md:-mt-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 + index * 0.1 }}
              className="relative rounded-[28px] border border-black/10 bg-white p-6 shadow-xl shadow-black/10 transition hover:-translate-y-2 hover:border-orange-600"
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-600">
                {card.label}
              </p>

              <h3 className="mt-3 text-2xl font-black italic">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <a href="#about" className="group flex flex-col items-center gap-3">
            <span className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500 transition group-hover:text-orange-600">
              Aşağı Kaydır
            </span>

            <div className="flex h-14 w-14 animate-bounce items-center justify-center rounded-full border border-black/15 bg-white text-2xl shadow-lg transition group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
              ↓
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}