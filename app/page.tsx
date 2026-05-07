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

  const subtitle = 'СЕГМЕНТ МЕРЕЖІ'.split('');

  return (
    <main className={`${montserrat.className} relative min-h-screen bg-black flex flex-col overflow-hidden`}>

      {/* Video — centered, no crop */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
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

      {/* Sound toggle */}
      <button
        onClick={toggleSound}
        className="absolute top-6 right-6 z-20 text-white/60 hover:text-white transition-colors duration-300 text-2xl"
        aria-label={muted ? 'Увімкнути звук' : 'Вимкнути звук'}
      >
        {muted ? '🔇' : '🔊'}
      </button>

      {/* WEB 4 + СЕГМЕНТ МЕРЕЖІ — поднято до 8vh */}
      <div className="relative z-10 flex justify-center" style={{ paddingTop: '8vh' }}>
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-6xl font-black tracking-[0.3em] uppercase leading-none text-white whitespace-nowrap">
            WEB 4
          </h1>
          {/* Кожна буква — окремий flex-item, перша під W, остання під 4 */}
          <div className="flex justify-between mt-2 text-sm md:text-base font-bold text-gray-300 uppercase">
            {subtitle.map((char, i) => (
              <span key={i} className={char === ' ' ? 'w-2' : ''}>
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1" />

      {/* КРЕМЕНЧУК */}
      <div className="relative z-10 text-center mb-6">
        <p className="text-2xl md:text-3xl tracking-[0.2em] uppercase font-medium text-white/90">
          КРЕМЕНЧУК
        </p>
      </div>

      {/* Button */}
      <div className="relative z-10 flex justify-center pb-12">
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
