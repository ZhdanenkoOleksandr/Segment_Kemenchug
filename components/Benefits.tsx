import { BENEFITS } from '@/lib/config';

export default function Benefits() {
  return (
    <section className="bg-white py-20 px-4 border-b">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Что получает ваш бизнес
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <ul className="space-y-2">
                {benefit.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 font-bold">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
