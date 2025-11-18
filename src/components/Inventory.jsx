import { Car, Gauge, Fuel, Sparkles } from 'lucide-react'

const cars = [
  { id: 1, name: 'Apex RZ', price: '$89,900', img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1e?q=80&w=1974&auto=format&fit=crop', specs: ['AWD', 'Dual Motor', '0-60 in 3.2s'] },
  { id: 2, name: 'Vortex GT', price: '$74,500', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop', specs: ['RWD', 'Twin Turbo', 'Top Speed 205mph'] },
  { id: 3, name: 'Nebula S', price: '$62,300', img: 'https://images.unsplash.com/photo-1511396275276-2a0610773d2d?q=80&w=2070&auto=format&fit=crop', specs: ['AWD', 'Hybrid', '0-60 in 3.9s'] },
]

export default function Inventory() {
  return (
    <section id="inventory" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white/0" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Inventory</h2>
            <p className="text-gray-400 mt-1">Handpicked performance models available now</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
            <Sparkles size={16}/> All vehicles
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div key={car.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={car.img} alt={car.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{car.name}</h3>
                  <span className="text-red-500 font-semibold">{car.price}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {car.specs.map((s) => (
                    <span key={s} className="text-xs rounded-full border border-white/10 px-2 py-1 text-gray-300">{s}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500">Reserve</a>
                  <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
