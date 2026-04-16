'use client';

import { useState } from 'react';

export default function AdminPanel() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bookedPlaces, setBookedPlaces] = useState(12);
  const [totalPlaces] = useState(70);
  const [saved, setSaved] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (in production, use proper auth)
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Неверный пароль');
      setPassword('');
    }
  };

  const handleSave = async () => {
    try {
      // Save to file - in production, save to database
      const response = await fetch('/api/admin/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookedPlaces }),
      });

      if (response.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (error) {
      console.error('Error saving:', error);
      alert('Ошибка при сохранении');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6">Админ панель</h1>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Введите пароль"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 font-bold rounded hover:bg-gray-800 transition"
            >
              Вход
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            (По умолчанию: admin123)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Админ панель</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-sm text-gray-600 hover:text-black"
            >
              Выход
            </button>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-bold mb-6">Обновить счётчик мест</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">
                  Забронировано мест: {bookedPlaces} / {totalPlaces}
                </label>
                <input
                  type="range"
                  min="0"
                  max={totalPlaces}
                  value={bookedPlaces}
                  onChange={(e) => setBookedPlaces(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                  <span>0</span>
                  <span>{totalPlaces}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Или введите число напрямую:
                </label>
                <input
                  type="number"
                  min="0"
                  max={totalPlaces}
                  value={bookedPlaces}
                  onChange={(e) => setBookedPlaces(Math.min(totalPlaces, Math.max(0, parseInt(e.target.value))))}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm">
                  <span className="font-bold">Осталось мест:</span> {totalPlaces - bookedPlaces}
                </p>
                <p className="text-sm">
                  <span className="font-bold">Заполнено:</span> {((bookedPlaces / totalPlaces) * 100).toFixed(1)}%
                </p>
              </div>

              <button
                onClick={handleSave}
                className="w-full bg-black text-white py-3 font-bold rounded hover:bg-gray-800 transition"
              >
                Сохранить изменения
              </button>

              {saved && (
                <div className="p-4 bg-green-50 border border-green-200 rounded text-green-800 text-center">
                  ✓ Изменения сохранены
                </div>
              )}
            </div>
          </div>

          <div className="border-t mt-8 pt-6">
            <h2 className="text-xl font-bold mb-4">Инструкции</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Обновляйте счётчик вручную при каждой новой заявке</li>
              <li>• Данные сохраняются в конфиге сайта</li>
              <li>• Контакты клиентов сохраняются в Google Sheet</li>
              <li>• Измените пароль в переменных окружения перед запуском</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
