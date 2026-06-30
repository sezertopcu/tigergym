import Image from "next/image";
import { LockKeyhole, ScanLine, ShieldCheck, Zap } from "lucide-react";
import MotionSection from "./MotionSection";

const systems = [
  {
    icon: <ScanLine size={32} />,
    title: "Akıllı Turnike",
    text: "Üyelik doğrulaması ile salona hızlı ve kontrollü giriş.",
  },
  {
    icon: <LockKeyhole size={32} />,
    title: "Akıllı Dolap",
    text: "Kişisel eşyalar için modern, düzenli ve güvenli dolap kullanımı.",
  },
  {
    icon: <Zap size={32} />,
    title: "Hızlı Kullanım",
    text: "Beklemeden giriş, pratik kullanım ve daha akıcı salon deneyimi.",
  },
];

export default function SmartSystems() {
  return (
    <section
      id="systems"
      className="relative overflow-hidden bg-white py-28"
    >
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-orange-200/40 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <MotionSection>
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-orange-600">
                Akıllı Sistemler
              </p>

              <h2 className="mt-5 text-5xl font-black italic leading-[0.95] tracking-tight md:text-7xl">
                Girişten dolaba
                <br />
                <span className="text-orange-600">tek akıllı deneyim.</span>
              </h2>
            </div>

            <div className="rounded-[32px] border border-black/10 bg-[#f8f8f5] p-7 shadow-xl shadow-black/5">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600 text-white">
                <ShieldCheck size={30} />
              </div>

              <p className="text-lg leading-8 text-zinc-700">
                Tiger Gym; üyelerin salona hızlı girmesi, dolaplarını güvenle
                kullanması ve antrenmana zaman kaybetmeden başlaması için akıllı
                sistem altyapısını merkeze alır.
              </p>
            </div>
          </div>
        </MotionSection>

        <MotionSection delay={0.08}>
          <div className="overflow-hidden rounded-[38px] border border-black/10 bg-[#f8f8f5] p-3 shadow-[0_35px_90px_rgba(0,0,0,.12)]">
            <Image
              src="/akilli-sistemler.png"
              alt="Tiger Gym Akıllı Sistemler"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-[30px] object-contain transition duration-700 hover:scale-[1.015]"
              priority
            />
          </div>
        </MotionSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {systems.map((item, index) => (
            <MotionSection key={item.title} delay={index * 0.08}>
              <div className="group h-full rounded-[30px] border border-black/10 bg-[#f8f8f5] p-8 shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-2 hover:border-orange-600 hover:bg-white">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-2xl font-black italic">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-600">
                  {item.text}
                </p>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}