
"use client";

const reviews = [{"name":"Edson Fachinetti","text":"Excelente atendimento e profissionalismo. Mesmo não residindo mais em Brasília, faço questão de continuar encomendando minha prótese com ele."},{"name":"Emily Estelita","text":"Ótimo profissional, ambiente aconchegante e agradável. Qualidade do produto muito boa, tudo de excelente qualidade!"},{"name":"Cliente VIP","text":"Melhor atendimento da região, qualidade no serviço, ótima estrutura."},{"name":"João Carlos","text":"Nota 10 - obs: ótimos preços, atendimento impecável e discrição total."}];

export function MarqueeDemo() {
  return (
    <div className="relative flex overflow-x-hidden group bg-[#0a0a0a] py-8 border-y border-white/5">
      <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
        {[...reviews, ...reviews, ...reviews].map((r, i) => (
          <div key={i} className="inline-block w-80 mx-4 bg-[#111] border border-white/5 p-6 rounded-sm whitespace-normal">
             <div className="flex text-[#d4af37] mb-3">
               ★★★★★
             </div>
             <p className="text-sm text-gray-300 italic mb-4 line-clamp-4">"{r.text}"</p>
             <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">{r.name}</p>
          </div>
        ))}
      </div>
      
      {/* Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0a0a0a]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0a0a0a]"></div>
    </div>
  );
}
