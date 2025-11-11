import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold"
          >
            Ready to build the future together?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/70"
          >
            Join CollaBridge and turn ideas into reality. Start free, upgrade when you scale.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-900 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">Create an account</a>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
