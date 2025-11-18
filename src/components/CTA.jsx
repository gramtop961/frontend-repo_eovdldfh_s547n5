export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/20 via-red-600/10 to-transparent p-8 md:p-12 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Book your test drive</h3>
              <p className="mt-2 text-gray-200/80">Leave your details and our team will get back within minutes.</p>
              <ul className="mt-4 text-gray-300 text-sm space-y-1">
                <li>• Priority scheduling</li>
                <li>• Trade‑in appraisal</li>
                <li>• Personalized recommendations</li>
              </ul>
            </div>
            <form className="grid grid-cols-1 gap-3">
              <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-red-500/60" placeholder="Full name" />
              <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-red-500/60" placeholder="Email" />
              <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-red-500/60" placeholder="Phone" />
              <button type="button" className="mt-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow shadow-red-600/30 hover:bg-red-500">Request callback</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
