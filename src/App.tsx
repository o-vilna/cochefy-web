import { Header } from './components/Header';
import { TwoColumnLayout } from './components/TwoColumnLayout';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <TwoColumnLayout />
      </main>
    </div>
  );
}

export default App;
