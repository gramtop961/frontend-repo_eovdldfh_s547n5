import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90" />
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full blur-3xl" style={{background:'radial-gradient(circle at 30% 30%, rgba(239,68,68,0.35), transparent 60%)'}} />
        <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl" style={{background:'radial-gradient(circle at 70% 70%, rgba(148,163,184,0.25), transparent 60%)'}} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <p className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider text-gray-300 mb-4">2025 Lineup</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Precision engineered.
            <span className="block text-red-500">Built to thrill.</span>
          </h1>
          <p className="mt-5 max-w-xl text-gray-300">
            Explore premium performance vehicles with bold design, advanced tech, and uncompromising reliability. Schedule a test drive today.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#inventory" className="rounded-xl bg-red-600 text-white px-5 py-3 text-sm font-semibold shadow shadow-red-600/30 hover:bg-red-500">Browse Inventory</a>
            <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10">Book a Test Drive</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-gray-400">
            <div>
              <p className="text-2xl font-bold text-white">0-60</p>
              <p className="text-sm">as quick as 2.9s</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">500+ hp</p>
              <p className="text-sm">track-capable</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Top safety</p>
              <p className="text-sm">ratings</p>
            </div>
          </div>
        </div>

        <div className="relative h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-black/30">
          <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </div>
      </div>
    </section>
  )
}
