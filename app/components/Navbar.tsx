"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Hakkımızda", href: "#about", id: "about" },
  { label: "Akıllı Sistemler", href: "#systems", id: "systems" },
  { label: "Ekipmanlar", href: "/equipment", id: "equipment" },
  { label: "İletişim", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ["home", "about", "systems", "equipment", "contact"];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 130 && rect.bottom >= 130) {
          setActiveSection(section);
          break;
        }
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-black/10 bg-white/95 shadow-xl shadow-black/5 backdrop-blur-xl"
            : "bg-white/75 backdrop-blur-xl"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
            <div
              className={`overflow-hidden rounded-full shadow-lg shadow-orange-600/20 transition-all duration-300 ${
                scrolled ? "h-10 w-10" : "h-12 w-12"
              }`}
            >
              <Image
                src="/tiger-logo.png"
                alt="Tiger Gym"
                width={80}
                height={80}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            <div className="leading-none">
              <h1
                className={`font-black italic tracking-tight transition-all duration-300 ${
                  scrolled ? "text-xl" : "text-2xl"
                }`}
              >
                <span className="text-orange-600">TIGER</span>{" "}
                <span className="text-black">GYM</span>
              </h1>

              <p
                className={`uppercase tracking-[0.35em] text-zinc-500 transition-all duration-300 ${
                  scrolled ? "hidden" : "text-[10px]"
                }`}
              >
                Premium Fitness Club
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {menuItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group relative text-sm font-black uppercase tracking-wide transition ${
                    active ? "text-orange-600" : "text-black hover:text-orange-600"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/tigerfitt_clup/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-black px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 md:inline-flex"
            >
              Instagram
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-md lg:hidden"
              aria-label="Menüyü aç/kapat"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 bg-black transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-black transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-black transition ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            />

            <motion.aside
              initial={{ opacity: 0, y: -24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="fixed right-4 top-24 z-50 w-[calc(100%-32px)] max-w-sm rounded-[28px] border border-black/10 bg-white p-5 shadow-2xl lg:hidden"
            >
              <div className="mb-5 flex items-center gap-3 border-b border-black/10 pb-5">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/tiger-logo.png"
                    alt="Tiger Gym"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-black italic">
                    <span className="text-orange-600">TIGER</span> GYM
                  </h2>

                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    Premium Fitness Club
                  </p>
                </div>
              </div>

              <nav className="flex flex-col gap-2">
                {menuItems.map((item) => {
                  const active = activeSection === item.id;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`rounded-2xl px-4 py-4 text-sm font-black uppercase tracking-wide transition ${
                        active
                          ? "bg-orange-50 text-orange-600"
                          : "hover:bg-orange-50 hover:text-orange-600"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <a
                href="https://www.instagram.com/tigerfitt_clup/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full justify-center rounded-full bg-orange-600 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-black"
              >
                Instagram
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}