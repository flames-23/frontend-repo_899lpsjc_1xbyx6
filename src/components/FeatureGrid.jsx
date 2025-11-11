import { motion } from 'framer-motion'
import { Sparkles, Layers, Rocket, Cloud, Shield, Cog } from 'lucide-react'

const features = [
  { icon: Sparkles, title: 'AI-assisted Workflows', desc: 'Automate repetitive tasks, generate assets, and accelerate delivery.' },
  { icon: Layers, title: 'Unified Collaboration', desc: 'Design, product, and engineering stay in sync from day one.' },
  { icon: Rocket, title: 'Launch-Ready', desc: 'From prototype to production with one connected pipeline.' },
  { icon: Cloud, title: 'Cloud Native', desc: 'Realtime sync, scalable infrastructure, and zero-config.' },
  { icon: Shield, title: 'Enterprise Secure', desc: 'SOC2-ready security, SSO, and granular permissions.' },
  { icon: Cog, title: 'Extensible', desc: 'APIs, integrations, and plugins for your stack.' },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything your team needs</h2>
          <p className="mt-4 text-slate-600">A minimalist toolkit with powerful capabilities, wrapped in delightful motion.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-slate-50 p-3 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {f.icon && <f.icon className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
