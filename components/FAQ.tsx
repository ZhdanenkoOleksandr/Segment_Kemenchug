'use client';

import { useState } from 'react';
import { FAQ as FAQData } from '@/lib/config';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 px-4 border-b">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Часто задаваемые вопросы
        </h2>

        <div className="space-y-4">
          {FAQData.map((item, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 text-left font-bold flex justify-between items-center hover:bg-gray-50 transition"
              >
                {item.q}
                <span className="text-2xl">{openIdx === idx ? '−' : '+'}</span>
              </button>

              {openIdx === idx && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700 border-t">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
