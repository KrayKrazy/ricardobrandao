
import Image from 'next/image';
import { MarqueeDemo } from '@/components/reviews-marquee';
import { BeforeAfter } from '@/components/before-after';
import { MapPin, Phone, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-serif tracking-widest text-[#d4af37]">RICARDO BRANDÃO</div>
          <a href="https://wa.me/5561991868252" target="_blank" className="bg-[#d4af37] text-black px-6 py-2.5 rounded-sm font-medium text-sm hover:bg-[#e5c158] transition-colors flex items-center gap-2">
            <Phone size={16} /> Agendar Consulta
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/identidade_visual.jpg" alt="Ricardo Brandão Clinic" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        </div>
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <h2 className="text-[#d4af37] tracking-[0.2em] text-xs font-bold uppercase mb-6">Alta Precisão & Discrição</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
            A Excelência em <br/> <span className="italic text-gray-400">Prótese Capilar</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
            Recupere sua autoestima com naturalidade imperceptível ao olhar e ao toque. Atendimento exclusivo e privativo para homens exigentes.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-24 bg-[#111] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Transformação Absoluta</h2>
            <p className="text-gray-400">Arraste para comparar o antes e depois do nosso método exclusivo.</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.05)] border border-white/10">
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* REVIEWS MARQUEE */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-serif mb-4">O que dizem nossos clientes</h2>
          <p className="text-gray-400">Excelência comprovada por quem exige o melhor.</p>
        </div>
        <MarqueeDemo />
      </section>

      {/* ABOUT / LOCATION */}
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6 text-[#d4af37]">Santuário Privativo</h2>
            <p className="text-gray-400 mb-6 font-light leading-relaxed">
              O espaço Ricardo Brandão foi projetado para oferecer o máximo de conforto e sigilo. Localizado no centro de Taguatinga, garantimos um atendimento confidencial, onde a arte da restauração capilar encontra o luxo.
            </p>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#d4af37] shrink-0" />
                <span>St. Central Lotes 1/12 Ed. TTC Lj 01<br/>Taguatinga - Centro, Brasília - DF</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#d4af37] shrink-0" />
                <span>(61) 99186-8252</span>
              </div>
            </div>
            
            <div className="mt-10 flex gap-4">
               <a href="https://wa.me/5561991868252" target="_blank" className="bg-white/5 border border-white/10 hover:border-[#d4af37] text-white px-6 py-3 rounded-sm transition-all flex items-center gap-2">
                 <Phone size={18} /> WhatsApp
               </a>
               <a href="https://www.instagram.com/protesecapilarb/" target="_blank" className="bg-white/5 border border-white/10 hover:border-[#d4af37] text-white px-6 py-3 rounded-sm transition-all flex items-center gap-2">
                 <Instagram size={18} /> Instagram
               </a>
            </div>
          </div>
          <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10">
            <Image src="/identidade_visual.jpg" alt="Ricardo Brandão Clinic" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-600 text-xs border-t border-white/5">
        &copy; {new Date().getFullYear()} Próteses Capilar Ricardo Brandão. Todos os direitos reservados.
      </footer>
    </div>
  );
}
