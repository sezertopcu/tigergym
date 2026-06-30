import {
  Dumbbell,
  ShieldCheck,
  TimerReset,
  Zap,
  LockKeyhole,
} from "lucide-react";
import MotionSection from "./MotionSection";

const features = [
  {
    icon: <Dumbbell size={34} />,
    title: "Profesyonel Ekipman",
    text: "Güç, kondisyon ve kas gelişimi için seçilmiş modern spor makineleri.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Güvenli Alan",
    text: "Düzenli, ferah ve konforlu antrenman ortamı ile rahat kullanım.",
  },
  {
    icon: <TimerReset size={34} />,
    title: "Hızlı Giriş",
    text: "Akıllı turnike sistemiyle salona pratik ve kontrollü erişim.",
  },
  {
    icon: <LockKeyhole size={34} />,
    title: "Akıllı Dolap",
    text: "Kişisel eşyalar için modern ve güvenli dolap kullanım deneyimi.",
  },
];

const stats = [
  { value: "01", label: "Modern salon deneyimi" },
  { value: "02", label: "Akıllı sistem altyapısı" },
  { value: "03", label: "Güçlü ekipman düzeni" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f8f8f5] py-28">
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-orange-500/15 blur-[130px]" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-200/40 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <MotionSection>
          <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-orange-600">
                Hakkımızda
              </p>

              <h2 className="mt-5 text-5xl font-black italic leading-[0.95] tracking-tight md:text-7xl">
                Sadece spor değil,
                <br />
                <span className="text-orange-600">yeni nesil deneyim.</span>
              </h2>
            </div>

            <div className="rounded-[32px] border border-black/10 bg-white p-7 shadow-xl shadow-black/5">
              <p className="text-lg leading-8 text-zinc-700">
                Tiger Gym; güçlü ekipmanları, akıllı turnike sistemi, akıllı dolap
                altyapısı ve motive edici atmosferiyle üyelerine daha düzenli,
                daha hızlı ve daha kaliteli bir spor salonu deneyimi sunar.
              </p>
            </div>
          </div>
        </MotionSection>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stats.map((item, index) => (
            <MotionSection key={item.value} delay={index * 0.08}>
              <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-2 hover:border-orange-600">
                <p className="text-5xl font-black italic text-orange-600">
                  {item.value}
                </p>

                <p className="mt-3 text-sm font-black uppercase tracking-wide text-zinc-700">
                  {item.label}
                </p>
              </div>
            </MotionSection>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => (
            <MotionSection key={item.title} delay={index * 0.08}>
              <div className="group h-full rounded-[30px] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-2 hover:border-orange-600">
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

        <MotionSection delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-[34px] bg-black p-8 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600 text-white">
                  <Zap size={34} />
                </div>

                <h3 className="mt-6 text-4xl font-black italic md:text-5xl">
                  Motivasyonunu yükselten atmosfer.
                </h3>
              </div>

              <p className="text-lg leading-9 text-zinc-300">
                Tiger Gym; modern ekipmanları, yenilikçi salon anlayışı ve yüksek
                enerjili atmosferiyle sporu sıradan bir rutin olmaktan çıkarıp daha
                motive edici ve profesyonel bir yaşam tarzına dönüştürür.
              </p>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}