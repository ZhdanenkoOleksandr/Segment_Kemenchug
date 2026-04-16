import { BONUSES, CONFIG } from '@/lib/config';

export default function BonusTable() {
  const getRank = (index: number): string => {
    if (index < 10) return '1-10';
    if (index < 30) return '11-30';
    return '31-70';
  };

  return (
    <section className="bg-white py-20 px-4 border-b">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Бонусы для первых партнёров
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left py-4 font-bold">Место</th>
                <th className="text-left py-4 font-bold">Статус</th>
                <th className="text-left py-4 font-bold">Скидка на токенизацию</th>
              </tr>
            </thead>
            <tbody>
              {BONUSES.map((bonus, idx) => (
                <tr key={idx} className="border-b border-gray-200">
                  <td className="py-4 font-bold">{bonus.range}</td>
                  <td className="py-4">{bonus.label}</td>
                  <td className="py-4 font-bold text-lg">{bonus.discount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            ⚡ <span className="font-bold">Это создаёт реальную гонку:</span> чем раньше вы подключитесь, тем больше экономия
          </p>
        </div>
      </div>
    </section>
  );
}
