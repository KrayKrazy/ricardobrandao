"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function BeforeAfter({ beforeImage = "/antes1.jpg", afterImage = "/depois1.jpg" }: { beforeImage?: string, afterImage?: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event 
      ? event.touches[0].clientX - containerRect.left
      : (event as MouseEvent).clientX - containerRect.left;
      
    const percent = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percent);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => handleMove(e);
    const handleTouchMove = (e: TouchEvent) => handleMove(e);
    
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-square md:aspect-[4/3] select-none overflow-hidden cursor-ew-resize group rounded-xl bg-[#0a0a0a]"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* DEPOIS (Background / Base Image) */}
      <div className="absolute inset-0">
        <Image src={afterImage} alt="Depois" fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 text-xs font-bold uppercase rounded-sm border border-white/20 backdrop-blur-sm z-10">Depois</div>
      </div>
      
      {/* ANTES (Foreground / Clipped Image) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 calc(100% - ${sliderPosition}%) 0 0)` }}
      >
        <Image src={beforeImage} alt="Antes" fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-xs font-bold uppercase rounded-sm border border-white/20 backdrop-blur-sm z-10">Antes</div>
      </div>

      {/* DRAGGER LINE */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)] z-20"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0a0a0a] border-2 border-[#d4af37] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}
