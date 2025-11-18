import { ShieldCheck, Wrench, GaugeCircle, CreditCard, Star, Headphones } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Certified Quality', desc: 'Every vehicle undergoes a 150‑point inspection with full history reports.' },
  { icon: GaugeCircle, title: 'Performance Focused', desc: 'Track-ready tuning and advanced driver assistance on select models.' },
  { icon: CreditCard, title: 'Flexible Financing', desc: 'Transparent rates with pre-approval in minutes and zero hidden fees.' },
  { icon: Wrench, title: 'Service & Care', desc: 'Factory-trained technicians and premium parts for long-term reliability.' },
  { icon: Star, title: 'Top Rated', desc: 'Thousands of 5‑star reviews from enthusiasts and families alike.' },
  { icon: Headphones, title: 'Concierge Support', desc: 'Personal advisors to help with trade-ins, custom orders, and delivery.' },
]

export default function Features() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Why choose us</h2>
          <p className="mt-2 text-gray-400">Premium experience from browsing to delivery</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/20 text-red-400">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-gray-400 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
