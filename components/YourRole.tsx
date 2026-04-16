export default function YourRole() {
  const services = [
    'Консультации по цифровым финансам',
    'Внедрение модели дохода в ваш бизнес',
    'Сопровождение запуска в сеть',
    'Помощь в упаковке бизнеса в систему',
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 border-b">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Вы получаете поддержку партнёра Sholia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Лично от меня:</h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-3 text-xl">✓</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-black">
            <p className="text-sm text-gray-600 mb-2">Доступ к командде экспертов:</p>
            <ul className="space-y-2">
              <li className="font-bold">📊 Консультант по цифровым финансам</li>
              <li className="font-bold">🔐 Эксперт в цифровой идентичности</li>
              <li className="font-bold">🪙 Эксперт по токенизации активов</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border text-center">
          <p className="text-gray-700">
            <span className="font-bold">Партнёр компании Sholia</span> — это гарантия качества и надёжности
          </p>
        </div>
      </div>
    </section>
  );
}
