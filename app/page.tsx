import Link from 'next/link';

export default function SplashPage() {
  return (
    <main
      className="relative min-h-screen bg-black flex flex-col overflow-hidden"
      style={{
        backgroundImage: 'url(/defender.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

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
