# Web4 Kremenchug Landing Page

Одностраничный лендинг для набора 70 бизнес-партнёров в сегмент сети Web4.

## 🚀 Быстрый старт

```bash
# 1. Установить зависимости
npm install

# 2. Создать .env.local (копируем .env.example)
cp .env.example .env.local

# 3. Добавить Google Sheets API credentials в .env.local
# (см. инструкции ниже)

# 4. Запустить локально
npm run dev
```

Сайт откроется на `http://localhost:3000`
Админ панель на `http://localhost:3000/admin` (пароль: `admin123`)

## 📋 Структура

```
├── app/
│   ├── page.tsx              # Главная страница лендинга
│   ├── admin/page.tsx        # Админ панель
│   └── api/
│       ├── leads/route.ts    # API для контактов → Google Sheet
│       └── admin/config/     # API админ панели
├── components/               # Все компоненты лендинга
├── lib/config.ts            # Конфиг (счётчик, контент)
└── .env.example             # Переменные окружения
```

## ⚙️ Настройка Google Sheets API

1. Перейти на [Google Cloud Console](https://console.cloud.google.com/)
2. Создать новый проект
3. Включить **Google Sheets API**
4. Создать Service Account → JSON ключ
5. Скачать JSON и извлечь:
   - `project_id`
   - `private_key_id`
   - `private_key`
   - `client_email`
   - `client_id`
   - `client_x509_cert_url`

6. Добавить в `.env.local`:
```env
GOOGLE_PROJECT_ID=your-project-id
GOOGLE_PRIVATE_KEY_ID=your-key-id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your-service@project.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_X509_CERT_URL=your-cert-url
```

7. Поделиться Google Sheet с email Service Account

## 🎨 Кастомизация контента

Всё в `lib/config.ts`:

```typescript
// Обновить счётчик мест
bookedPlaces: 12,  // Замените на текущее число

// Изменить преимущества, бонусы, FAQ и т.д.
BENEFITS, BONUSES, MONEY_SCENARIOS, FAQ
```

## 📊 Админ панель

Доступна на `/admin`:
- Вход с паролем (по умолчанию: `admin123`)
- Обновить счётчик мест (слайдер или числовое поле)
- Сохранить изменения

**Для production:** сохраняйте счётчик в БД, не в `config.ts`

## 🔗 Деплой

### Vercel (рекомендуется)
1. Запушить код на GitHub
2. Подключить в Vercel
3. Добавить переменные окружения
4. Deploy

### Собственный сервер
```bash
npm run build
npm start
```

## 📝 Тестирование

1. **Форма контактов** → проверить Google Sheet
2. **Админ панель** → обновить счётчик → проверить на лендинге
3. **Мобильная версия** → все компоненты адаптивные

## 🛠️ Что дальше

- [ ] Подключить CRM (Pipedrive, HubSpot)
- [ ] Email-уведомления при новой заявке
- [ ] Аналитика (Google Analytics)
- [ ] Настроить домен и SSL
- [ ] SEO оптимизация
- [ ] Live чат для поддержки

## 💡 Важное

- **Счётчик мест** — обновляйте вручную через админ панель
- **Контакты** — автоматически сохраняются в Google Sheet
- **Пароль админ панели** — измените перед production
- **Google Sheets** — должна быть доступна Service Account

---

**Made with ❤️ for Web4 Kremenchug**
