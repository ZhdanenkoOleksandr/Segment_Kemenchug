'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '700', '900'],
});

export default function SplashPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    if (!next) videoRef.current.volume = 1;
    setMuted(next);
  }

  return (
    <main className={`${montserrat.className} relative min-h-screen bg-black flex flex-col overflow-hidden`}>
      <div className="absolute inset-0 bg-black" />

      {/* Video — object-contain prevents top/bottom cropping */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-[30vw] object-contain"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      <button
        onClick={toggleSound}
        className="absolute top-6 right-6 z-20 text-white/60 hover:text-white transition-colors duration-300 text-2xl"
        aria-label={muted ? 'Увімкнути звук' : 'Вимкнути звук'}
      >
        {muted ? '🔇' : '🔊'}
      </button>

      <div className="relative z-10 flex flex-col items-center flex-1 justify-center text-center text-white px-4">
        <h1 className="text-7xl md:text-9xl font-black tracking-[0.3em] uppercase mb-6 leading-none">
          WEB 4
        </h1>
        <p className="text-base md:text-xl tracking-[0.4em] uppercase text-gray-400 mb-3 font-light">
          сегмент мережі
        </p>
        <p className="text-2xl md:text-4xl tracking-[0.15em] uppercase font-medium text-white/90">
          Кременчук
        </p>
      </div>

      <div className="relative z-10 flex justify-center pb-16">
        <Link
          href="/landing"
          className="px-20 py-4 border border-white/70 text-white text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-light"
        >
          Початок
        </Link>
      </div>
    </main>
  );
}
