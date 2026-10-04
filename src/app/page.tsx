import Image from 'next/image';
import { MarqueeDemo } from '@/components/reviews-marquee';
import { BeforeAfter } from '@/components/before-after';
import { MapPin, Phone } from 'lucide-react';

export default function Home() {
  const whatsappUrl = "https://wa.me/5561991868252?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

  const beforeAfterPairs = [
    { before: "/antes.jpg", after: "/depois.jpg" },
    // Adicione mais fotos aqui copiando a linha de cima e mudando os nomes dos arquivos
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-serif tracking-widest text-[#d4af37]">RICARDO BRANDÃO</div>
          <a href={whatsappUrl} target="_blank" className="bg-[#d4af37] text-black px-6 py-2.5 rounded-sm font-medium text-sm hover:bg-[#e5c158] transition-colors flex items-center gap-2">
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

      {/* BEFORE / AFTER SLIDER */}
      <section className="py-24 bg-[#111] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Transformação Absoluta</h2>
            <p className="text-gray-400">Arraste para comparar o antes e depois do nosso método exclusivo.</p>
          </div>
          
          {/* Carousel Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar md:justify-center">
            {beforeAfterPairs.map((pair, index) => (
              <div key={index} className="w-full md:w-[800px] shrink-0 snap-center shadow-[0_0_50px_rgba(212,175,55,0.05)] border border-white/10 rounded-xl overflow-hidden mx-auto">
                <BeforeAfter beforeImage={pair.before} afterImage={pair.after} />
              </div>
            ))}
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
               <a href={whatsappUrl} target="_blank" className="bg-white/5 border border-white/10 hover:border-[#d4af37] text-white px-6 py-3 rounded-sm transition-all flex items-center gap-2">
                 <Phone size={18} /> WhatsApp
               </a>
               <a href="https://www.instagram.com/protesecapilarb/" target="_blank" className="bg-white/5 border border-white/10 hover:border-[#d4af37] text-white px-6 py-3 rounded-sm transition-all flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram
               </a>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10 bg-[#0a0a0a]">
            <iframe 
              src="https://maps.google.com/maps?q=St.%20Central%20Lotes%201/12%20Ed.%20TTC%20Taguatinga&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-600 text-xs border-t border-white/5">
        &copy; {new Date().getFullYear()} Próteses Capilar Ricardo Brandão. Todos os direitos reservados.
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        className="fixed bottom-6 right-6 z-50 bg-[#d4af37] text-black px-5 py-3 rounded-full font-medium shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 hover:bg-[#e5c158] transition-all flex items-center gap-2 group"
      >
        <div className="bg-black/10 rounded-full p-1">
          <Phone size={18} />
        </div>
        <span className="text-sm">Agende uma Avaliação Grátis</span>
      </a>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
