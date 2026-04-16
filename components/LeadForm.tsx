'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    email: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('Спасибо! Мы вскоре свяжемся с вами');
        setFormData({ name: '', phone: '', businessType: '', email: '' });
      } else {
        setStatus('error');
        setMessage('Ошибка при отправке. Попробуйте снова');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Ошибка соединения. Попробуйте позже');
    }
  };

  return (
    <section className="bg-gray-50 py-20 px-4 border-b">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Получить приглашение
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Оставьте заявку и получите консультацию от наших экспертов
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 border">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Ваше имя *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Иван Петров"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Телефон *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="+380..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Тип бизнеса *</label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Выберите тип</option>
              <option value="salon">Салон красоты</option>
              <option value="auto">Автосервис</option>
              <option value="cafe">Кафе / Ресторан</option>
              <option value="shop">Магазин</option>
              <option value="service">Услуги</option>
              <option value="other">Другое</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="ivan@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-black text-white py-3 font-bold rounded hover:bg-gray-800 transition disabled:bg-gray-600"
          >
            {status === 'loading' ? 'Отправка...' : 'Получить приглашение'}
          </button>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded text-green-800">
              ✓ {message}
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded text-red-800">
              ✗ {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
