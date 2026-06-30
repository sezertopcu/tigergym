import {
  Camera,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import MotionSection from "./MotionSection";

const mapUrl =
  "https://www.google.com/maps/dir//Tiger+Fitness+%26+Boxing,+Muratpa%C5%9Fa,+25100+Yakutiye%2FErzurum/@39.9048704,41.271296,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x406e5f9ece37eec7:0xf71a345ca68fd6!2m2!1d41.2708983!2d39.9022249?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D";

const instagramUrl = "https://www.instagram.com/tigerfitt_clup/";
const whatsappUrl = "https://wa.me/905318589153";

const cards = [
  {
    icon: <MapPin size={32} />,
    title: "Konum",
    text: "Tiger Fitness & Boxing\nMuratpaşa, Yakutiye / Erzurum",
    href: mapUrl,
    color: "orange",
    action: "Yol tarifi al",
  },
  {
    icon: <Phone size={32} />,
    title: "Telefon",
    text: "0531 858 91 53\n0535 553 95 35",
    href: "tel:05318589153",
    color: "orange",
    action: "Ara",
  },
  {
    icon: <MessageCircle size={32} />,
    title: "WhatsApp",
    text: "Tek dokunuşla mesaj gönder.\nÜyelik ve salon bilgisi al.",
    href: whatsappUrl,
    color: "green",
    action: "Mesaj gönder",
  },
  {
    icon: <Camera size={32} />,
    title: "Instagram",
    text: "@tigerfitt_clup\nGüncel paylaşımları takip et.",
    href: instagramUrl,
    color: "orange",
    action: "Profili aç",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#101010] py-28 text-white"
    >
      <div className="absolute -left-40 top-0 h-[460px] w-[460px] rounded-full bg-orange-600/20 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-[190px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <MotionSection>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-orange-500">
                İletişim
              </p>

              <h2 className="mt-5 text-5xl font-black italic leading-[0.95] tracking-tight md:text-7xl">
                Tiger Gym’e
                <br />
                <span className="text-orange-500">ulaş.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-9 text-zinc-300">
              Spor salonumuzu ziyaret edebilir, konum üzerinden yol tarifi alabilir
              veya Instagram hesabımızdan bize ulaşabilirsin.
            </p>
          </div>
        </MotionSection>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {cards.map((card, index) => (
            <MotionSection key={card.title} delay={index * 0.08}>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group block h-full rounded-[30px] border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-2 ${
                  card.color === "green"
                    ? "hover:border-green-500 hover:bg-green-500/10"
                    : "hover:border-orange-500 hover:bg-white/[0.09]"
                }`}
              >
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white ${
                    card.color === "green" ? "bg-green-500" : "bg-orange-600"
                  }`}
                >
                  {card.icon}
                </div>

                <h3 className="mt-7 text-2xl font-black italic">
                  {card.title}
                </h3>

                <p className="mt-4 whitespace-pre-line leading-8 text-zinc-300">
                  {card.text}
                </p>

                <span
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide ${
                    card.color === "green" ? "text-green-400" : "text-orange-500"
                  }`}
                >
                  {card.action}
                  {card.title === "Konum" && <Navigation size={18} />}
                </span>
              </a>
            </MotionSection>
          ))}
        </div>

        <MotionSection delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <h3 className="text-4xl font-black italic md:text-5xl">
                  Salona gelmeden önce yol tarifini aç.
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                  Tiger Fitness & Boxing konumuna tek dokunuşla Google Maps
                  üzerinden ulaşabilirsin.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-orange-600 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
                >
                  Google Maps Aç
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:border-orange-500 hover:text-orange-500"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}