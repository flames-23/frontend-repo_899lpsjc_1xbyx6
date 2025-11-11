import { motion } from 'framer-motion'

const items = Array.from({ length: 8 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  desc: 'A futuristic collaboration built on CollaBridge.',
}))

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Showcase</h2>
          <p className="mt-4 text-slate-600">Real examples of teams shipping faster with our platform.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/40 to-indigo-500/40 blur-2xl group-hover:scale-125 transition-transform" />
              <div className="relative">
                <div className="h-32 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700" />
                <h3 className="mt-4 font-semibold text-slate-900">{it.title}</h3>
                <p className="text-sm text-slate-600">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
