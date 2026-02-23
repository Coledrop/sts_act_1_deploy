import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { ConnectionsAnalysis } from './components/ConnectionsAnalysis';
import { RevolutionaryResume } from './components/RevolutionaryResume';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <ConnectionsAnalysis />
        <RevolutionaryResume />
      </main>
      <Footer />
    </div>
  );
}
