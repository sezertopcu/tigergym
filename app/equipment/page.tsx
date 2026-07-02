"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Category =
  | "Tümü"
  | "Göğüs"
  | "Sırt"
  | "Bacak"
  | "Omuz"
  | "Kol"
  | "Kardiyo"
  | "Serbest Ağırlık"
  | "Sehpa"
  | "Fonksiyonel";

type Equipment = {
  title: string;
  image: string;
  category: Exclude<Category, "Tümü">;
  description: string;
};

type Section = "men" | "women";

const categories: Category[] = [
  "Tümü",
  "Göğüs",
  "Sırt",
  "Bacak",
  "Omuz",
  "Kol",
  "Kardiyo",
  "Serbest Ağırlık",
  "Sehpa",
  "Fonksiyonel",
];

const equipments: Equipment[] = [
  {
    title: "Treadmill Machine",
    image: "/treadmill-machine.png",
    category: "Kardiyo",
    description: "Son teknoloji koşu bandı ile güçlü ve kontrollü kardiyo deneyimi.",
  },
  {
    title: "Cardio Equipment",
    image: "/cardio-equipment.png",
    category: "Kardiyo",
    description: "Kondisyon bisikletleri, eliptik ve dikey kardiyo ekipmanları.",
  },
  {
    title: "Chest Press Machine",
    image: "/chest-press-machine.png",
    category: "Göğüs",
    description: "Göğüs kaslarını hedefleyen güçlü ve ergonomik press ekipmanı.",
  },
  {
    title: "Peck Deck Fly Machine",
    image: "/peck-deck-fly-machine.png",
    category: "Göğüs",
    description: "Göğüs izolasyonu için kontrollü ve güvenli fly hareket alanı.",
  },
  {
    title: "Chest Dual Machine",
    image: "/chest-dual-machine.png",
    category: "Göğüs",
    description: "Bağımsız kol hareketiyle dengeli göğüs gelişimi.",
  },
  {
    title: "Incline Dual Machine",
    image: "/incline-dual-machine.png",
    category: "Göğüs",
    description: "Üst göğüs kaslarını hedefleyen profesyonel dual sistem.",
  },
  {
    title: "Decline Dual Machine",
    image: "/decline-dual-machine.png",
    category: "Göğüs",
    description: "Alt göğüs gelişimi için güçlü ve stabil decline ekipmanı.",
  },
  {
    title: "Lat Pulldown Machine",
    image: "/lat-pulldown-machine.png",
    category: "Sırt",
    description: "Geniş sırt gelişimi için akıcı hareket mekanizması.",
  },
  {
    title: "Row Machine",
    image: "/row-machine.png",
    category: "Sırt",
    description: "Sırt kaslarını güçlü ve dengeli şekilde çalıştırır.",
  },
  {
    title: "Low Row Machine",
    image: "/low-row-machine.png",
    category: "Sırt",
    description: "Alt sırt ve çekiş kuvveti için kontrollü çalışma alanı.",
  },
  {
    title: "T Bar Row Machine",
    image: "/t-bar-row-machine.png",
    category: "Sırt",
    description: "Kalın ve güçlü sırt gelişimi için profesyonel row ekipmanı.",
  },
  {
    title: "Leg Extension Machine",
    image: "/leg-extension-machine.png",
    category: "Bacak",
    description: "Quadriceps kaslarını izole ederek güçlü bacak gelişimi sağlar.",
  },
  {
    title: "Lying Leg Curl Machine",
    image: "/lying-leg-curl-machine.png",
    category: "Bacak",
    description: "Hamstring kaslarını hedefleyen konforlu leg curl ekipmanı.",
  },
  {
    title: "Hack Squat Machine",
    image: "/hack-squat-machine.png",
    category: "Bacak",
    description: "Alt vücut gücü için güvenli ve stabil squat sistemi.",
  },
  {
    title: "Leg Press Machine",
    image: "/leg-press-machine.png",
    category: "Bacak",
    description: "Bacak kaslarını maksimum güç ve kontrolle çalıştırır.",
  },
  {
    title: "Abductor Machine",
    image: "/abductor-machine.png",
    category: "Bacak",
    description: "Kalça dış kaslarını izole ederek dengeli gelişim sağlar.",
  },
  {
    title: "Calf Machine",
    image: "/calf-machine.png",
    category: "Bacak",
    description: "Baldır kasları için doğru hareket açısı ve güçlü yapı.",
  },
  {
    title: "Shoulder Press Machine",
    image: "/shoulder-press-machine.png",
    category: "Omuz",
    description: "Omuz kaslarını güvenli ve ergonomik şekilde çalıştırır.",
  },
  {
    title: "Dual Shoulder Press Machine",
    image: "/dual-shoulder-press-machine.png",
    category: "Omuz",
    description: "Bağımsız kollar ile dengeli omuz gelişimi.",
  },
  {
    title: "Lateral Raise Machine",
    image: "/lateral-raise-machine.png",
    category: "Omuz",
    description: "Yan omuz kaslarını izole ederek net omuz hattı oluşturur.",
  },
  {
    title: "Standing Lateral Raise Machine",
    image: "/standing-lateral-raise-machine.png",
    category: "Omuz",
    description: "Ayakta lateral raise hareketi için premium omuz ekipmanı.",
  },
  {
    title: "Combo Biceps-Triceps Machine",
    image: "/combo-biceps-triceps-machine.png",
    category: "Kol",
    description: "Biceps ve triceps hareketlerini tek makinede birleştirir.",
  },
  {
    title: "Dumbbell Set",
    image: "/dumbbell-set.png",
    category: "Serbest Ağırlık",
    description: "Tiger Gym serbest ağırlık alanı için düzenli dumbbell takımı.",
  },
  {
    title: "Barbell Set 30KG",
    image: "/barbell-set-30kg.png",
    category: "Serbest Ağırlık",
    description: "Düz ve Z bar seti, maksimum 30 KG ağırlık kapasitesi.",
  },
  {
    title: "Flat Bench",
    image: "/flat-bench.png",
    category: "Sehpa",
    description: "Bench press ve serbest ağırlık çalışmaları için sağlam sehpa.",
  },
  {
    title: "Adjustable Workout Bench",
    image: "/adjustable-workout-bench.png",
    category: "Sehpa",
    description: "Incline, decline ve flat pozisyonları destekleyen ayarlı sehpa.",
  },
  {
    title: "Crunch Bench",
    image: "/crunch-bench.png",
    category: "Sehpa",
    description: "Karın kaslarını hedefleyen konforlu crunch sehpası.",
  },
  {
    title: "Preacher Curl Bench",
    image: "/preacher-curl-bench.png",
    category: "Sehpa",
    description: "Biceps izolasyonu için ayarlanabilir preacher curl sehpası.",
  },
  {
    title: "Dips Station",
    image: "/dips-station.png",
    category: "Fonksiyonel",
    description: "Triceps, göğüs ve omuz kasları için güçlü dips istasyonu.",
  },
  {
    title: "Smith Machine",
    image: "/smith-machine.png",
    category: "Fonksiyonel",
    description: "Squat, press ve çok yönlü hareketler için güvenli bar sistemi.",
  },
  {
    title: "Squat Rack",
    image: "/squat-rack.png",
    category: "Fonksiyonel",
    description: "Serbest ağırlık ve squat çalışmaları için güçlü rack sistemi.",
  },
  {
    title: "Cable Crossover Machine",
    image: "/cable-crossover-machine.png",
    category: "Fonksiyonel",
    description: "Farklı açılarda kablo egzersizleri için profesyonel istasyon.",
  },
  {
    title: "DAP Cable Crossover Machine",
    image: "/dap-cable-crossover-machine.png",
    category: "Fonksiyonel",
    description: "Bağımsız DAP kolları ile çok yönlü kablo antrenmanı.",
  },
];

const womenEquipments: Equipment[] = [
  {
    title: "Treadmill Machine",
    image: "/treadmill-machine.png",
    category: "Kardiyo",
    description: "Son teknoloji koşu bandı ile güçlü ve kontrollü kardiyo deneyimi.",
  },
  {
    title: "Cardio Equipment",
    image: "/cardio-equipment-women.png",
    category: "Kardiyo",
    description: "Kadın bölümüne özel kardiyo ekipmanları ile etkili kondisyon alanı.",
  },
  {
    title: "Chest Press Machine",
    image: "/chest-press-machine.png",
    category: "Göğüs",
    description: "Göğüs kaslarını hedefleyen güçlü ve ergonomik press ekipmanı.",
  },
  {
    title: "Peck Deck Fly Machine",
    image: "/peck-deck-fly-machine.png",
    category: "Göğüs",
    description: "Göğüs izolasyonu için kontrollü ve güvenli fly hareket alanı.",
  },
  {
    title: "Shoulder Press Machine",
    image: "/shoulder-press-machine.png",
    category: "Omuz",
    description: "Omuz kaslarını güvenli ve ergonomik şekilde çalıştırır.",
  },
  {
    title: "Lat Pulldown Machine",
    image: "/lat-pulldown-machine.png",
    category: "Sırt",
    description: "Geniş sırt gelişimi için akıcı hareket mekanizması.",
  },
  {
    title: "Multipress Combo Machine",
    image: "/multipress-combo-machine.png",
    category: "Fonksiyonel",
    description: "Çok yönlü press ve güç hareketleri için profesyonel combo sistem.",
  },
  {
    title: "Leg Extension Machine",
    image: "/leg-extension-machine.png",
    category: "Bacak",
    description: "Quadriceps kaslarını izole ederek güçlü bacak gelişimi sağlar.",
  },
  {
    title: "Lying Leg Curl Machine",
    image: "/lying-leg-curl-machine.png",
    category: "Bacak",
    description: "Hamstring kaslarını hedefleyen konforlu leg curl ekipmanı.",
  },
  {
    title: "Leg Press Machine",
    image: "/leg-press-machine.png",
    category: "Bacak",
    description: "Bacak kaslarını maksimum güç ve kontrolle çalıştırır.",
  },
  {
    title: "Abductor Machine",
    image: "/abductor-machine.png",
    category: "Bacak",
    description: "Kalça dış kaslarını izole ederek dengeli gelişim sağlar.",
  },
  {
    title: "Glute Machine",
    image: "/glute-machine.png",
    category: "Bacak",
    description: "Kalça kaslarını hedefleyen kontrollü ve güçlü çalışma ekipmanı.",
  },
  {
    title: "Hip Thrust Machine",
    image: "/hip-thrust-machine.png",
    category: "Bacak",
    description: "Kalça ve alt vücut gücü için profesyonel hip thrust makinesi.",
  },
  {
    title: "Dumbbell Set",
    image: "/dumbbell-set.png",
    category: "Serbest Ağırlık",
    description: "Tiger Gym serbest ağırlık alanı için düzenli dumbbell takımı.",
  },
  {
    title: "Adjustable Workout Bench",
    image: "/adjustable-workout-bench.png",
    category: "Sehpa",
    description: "Incline, decline ve flat pozisyonları destekleyen ayarlı sehpa.",
  },
  {
    title: "Exercise Mat",
    image: "/exercise-mat.png",
    category: "Fonksiyonel",
    description: "Yer egzersizleri, esneme ve core çalışmaları için konforlu mat.",
  },
  {
    title: "Pilates Ball",
    image: "/pilates-ball.png",
    category: "Fonksiyonel",
    description: "Denge, core ve pilates çalışmaları için kullanışlı egzersiz topu.",
  },
  {
    title: "Step Platform",
    image: "/step-platform.png",
    category: "Fonksiyonel",
    description: "Kardiyo, bacak ve fonksiyonel antrenmanlar için step platformu.",
  },
  {
    title: "Crunch Bench",
    image: "/crunch-bench.png",
    category: "Sehpa",
    description: "Karın kaslarını hedefleyen konforlu crunch sehpası.",
  },
];

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tümü");
  const [activeSection, setActiveSection] = useState<Section>("men");
  const [selected, setSelected] = useState<Equipment | null>(null);

  const activeEquipments = activeSection === "men" ? equipments : womenEquipments;

  const filteredEquipments = useMemo(() => {
    if (activeCategory === "Tümü") return activeEquipments;
    return activeEquipments.filter((item) => item.category === activeCategory);
  }, [activeCategory, activeEquipments]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ef] text-black">
      <section className="relative px-5 pt-5 pb-16 md:pt-8">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 top-64 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-orange-600"
            >
              ← Ana Sayfaya Dön
            </Link>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveSection("men")}
                className={`rounded-full px-6 py-3 text-xs font-black uppercase tracking-wider transition ${
                  activeSection === "men"
                    ? "bg-orange-600 text-white"
                    : "border border-black/10 bg-white text-zinc-400 hover:border-orange-600 hover:text-orange-600"
                }`}
              >
                👨 Erkek Bölümü Ekipman Listesi
              </button>

              <button
                type="button"
                onClick={() => setActiveSection("women")}
                className={`rounded-full px-6 py-3 text-xs font-black uppercase tracking-wider transition ${
                  activeSection === "women"
                    ? "bg-orange-600 text-white"
                    : "border border-black/10 bg-white text-zinc-400 hover:border-orange-600 hover:text-orange-600"
                }`}
              >
                👩 Bayan Bölümü Ekipman Listesi
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="block"
          >
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.55em] text-orange-600">
                Tiger Gym Ekipmanları
              </p>

              <h1 className="max-w-4xl text-5xl font-black italic leading-[0.94] tracking-tight md:text-7xl">
                Güçlü ekipman,
                <br />
                <span className="text-orange-600">net performans.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-zinc-600 md:text-lg">
                Tiger Gym’de bulunan profesyonel makineler, serbest ağırlık
                alanları, kardiyo ekipmanları ve fonksiyonel çalışma
                istasyonları.
              </p>
            </div>

            </motion.div>

          <div className="mt-10 flex gap-3 overflow-x-auto pb-3">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full border px-5 py-3 text-xs font-black uppercase tracking-wider transition ${
                    active
                      ? "border-orange-600 bg-orange-600 text-white shadow-lg shadow-orange-600/25"
                      : "border-black/10 bg-white text-black hover:border-orange-600 hover:text-orange-600"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="wait">
              {filteredEquipments.map((item, index) => (
                <motion.button
                  key={`${activeSection}-${item.title}`}
                  type="button"
                  onClick={() => setSelected(item)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, delay: index * 0.025 }}
                  className="group overflow-hidden rounded-[34px] border border-black/10 bg-white text-left shadow-xl shadow-black/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-black px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-black italic uppercase leading-none">
                      {item.title}
                    </h2>

                    <p className="mt-4 min-h-[56px] text-sm font-medium leading-7 text-zinc-600">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-600">
                        İncele
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition group-hover:bg-orange-600">
                        →
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[34px] bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl font-black text-white transition hover:bg-orange-600"
                aria-label="Kapat"
              >
                ×
              </button>

              <div className="flex flex-col justify-center bg-black p-8 text-white">
                <p className="text-xs font-black uppercase tracking-[0.45em] text-orange-600">
                  {selected.category}
                </p>

                <h3 className="mt-4 text-4xl font-black italic uppercase leading-none md:text-6xl">
                  {selected.title}
                </h3>

                <p className="mt-6 text-base font-medium leading-8 text-white/70">
                  {selected.description}
                </p>
              </div>

              <div className="relative flex items-center justify-center bg-white p-4 lg:min-h-[520px]">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={900}
                  height={1200}
                  sizes="100vw"
                  className="h-auto max-h-[55vh] w-auto max-w-full object-contain lg:max-h-[85vh]"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
