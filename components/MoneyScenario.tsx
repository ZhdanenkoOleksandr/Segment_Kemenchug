import { MONEY_SCENARIOS } from '@/lib/config';

export default function MoneyScenario() {
  return (
    <section className="bg-gray-50 py-20 px-4 border-b">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Денежный сценарий
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Примеры реального дохода в зависимости от активности ваших клиентов
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MONEY_SCENARIOS.map((scenario, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border">
              <div className="text-sm text-gray-600 mb-4">
                {scenario.clients} клиентов в месяц
              </div>
              <div className="text-lg font-bold mb-4">
                {scenario.percentage}% подключены к сети
              </div>
              <div className="text-3xl font-bold text-black mb-2">
                {scenario.monthly.toLocaleString()}{scenario.currency}
              </div>
              <div className="text-sm text-gray-600">
                новый доход в месяц
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12">
          Цифры условные — ваш результат зависит от активности клиентов и их потребностей
        </p>
      </div>
    </section>
  );
}
