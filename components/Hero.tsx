import { CONFIG } from '@/lib/config';

export default function Hero() {
  const placesLeft = CONFIG.totalPlaces - CONFIG.bookedPlaces;

  return (
    <section className="bg-white py-20 px-4 text-center border-b">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Запуск Web4 в {CONFIG.city}
        </h1>
        <p className="text-2xl text-gray-600 mb-4">
          Набор {CONFIG.totalPlaces} бизнес-партнёров до {CONFIG.eventDate}
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Получайте новых клиентов, дополнительный доход и цифровую репутацию — раньше всех
        </p>

        {/* Counter */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 inline-block">
          <div className="text-4xl font-bold mb-2">{placesLeft}</div>
          <div className="text-gray-600">мест осталось из {CONFIG.totalPlaces}</div>
          <div className="text-sm text-gray-500 mt-2">
            Уже забронировано: {CONFIG.bookedPlaces} бизнесов
          </div>
        </div>

        {/* Visual Counter */}
        <div className="mb-8">
          <div className="grid grid-cols-10 gap-1 max-w-md mx-auto">
            {Array.from({ length: CONFIG.totalPlaces }).map((_, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-sm ${
                  i < CONFIG.bookedPlaces ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            ■ Забронировано | □ Свободно
          </p>
        </div>

        <button className="bg-black text-white px-8 py-4 text-lg rounded hover:bg-gray-800 transition">
          Получить приглашение
        </button>
      </div>
    </section>
  );
}
