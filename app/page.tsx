import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import MoneyScenario from '@/components/MoneyScenario';
import BonusTable from '@/components/BonusTable';
import YourRole from '@/components/YourRole';
import Steps from '@/components/Steps';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="text-sm font-bold">Web4 Кременчуга</div>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <Benefits />
      <MoneyScenario />
      <BonusTable />
      <YourRole />
      <Steps />
      <LeadForm />
      <FAQ />

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">
            Партнёр компании <span className="font-bold">Sholia</span>
          </p>
          <p className="text-sm text-gray-400">
            © 2026 Web4 Segment Kremenchug. Все права защищены.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Вопросы? Напишите нам или позвоните.
          </p>
        </div>
      </footer>
    </main>
  );
}
