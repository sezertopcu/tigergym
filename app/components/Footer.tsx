import {
  Camera,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import MotionSection from "./MotionSection";

const instagram = "https://www.instagram.com/tigerfitt_clup/";
const whatsapp = "https://wa.me/905318589153";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-600 to-transparent" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[160px]" />

      <MotionSection>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-4">
            <div>
              <h2 className="text-4xl font-black italic tracking-tight">
                <span className="text-orange-600">TIGER</span> GYM
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                Modern ekipmanlar, akıllı salon teknolojileri ve profesyonel
                antrenman ortamıyla yeni nesil fitness deneyimi.
              </p>
            </div>

            <div>
              <h3 className="mb-7 text-xl font-black">
                Menü
              </h3>

              <div className="space-y-4">
                <a href="#about" className="block text-zinc-400 transition hover:text-orange-500">
                  Hakkımızda
                </a>

                <a href="#systems" className="block text-zinc-400 transition hover:text-orange-500">
                  Akıllı Sistemler
                </a>

                <a href="#equipment" className="block text-zinc-400 transition hover:text-orange-500">
                  Ekipmanlar
                </a>

                <a href="#contact" className="block text-zinc-400 transition hover:text-orange-500">
                  İletişim
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-7 text-xl font-black">
                İletişim
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 text-orange-600" size={20} />

                  <span className="leading-7 text-zinc-400">
                    Tiger Fitness & Boxing
                    <br />
                    Muratpaşa
                    <br />
                    Yakutiye / Erzurum
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-orange-600" size={20} />

                  <div className="text-zinc-400 leading-7">
                    <div>0531 858 91 53</div>
                    <div>0535 553 95 35</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-7 text-xl font-black">
                Sosyal Medya
              </h3>

              <div className="space-y-4">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 transition hover:border-orange-600 hover:bg-white/5"
                >
                  <Camera size={22} />
                  <span>@tigerfitt_clup</span>
                </a>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 transition hover:border-green-500 hover:bg-white/5"
                >
                  <MessageCircle size={22} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
            <p>© 2026 Tiger Gym. Tüm hakları saklıdır.</p>
            <p>Designed & Developed for Tiger Gym</p>
          </div>
        </div>
      </MotionSection>
    </footer>
  );
}