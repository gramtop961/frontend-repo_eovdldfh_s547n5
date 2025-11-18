import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Inventory from './components/Inventory'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(239,68,68,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.08),transparent_35%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Inventory />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Motion Motors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
