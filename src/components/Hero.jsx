import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(40%_30%_at_80%_10%,rgba(99,102,241,0.2),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Now live — the new CollaBridge experience
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight">
            Bridge ideas to impact with collaborative tech
          </h1>
          <p className="mt-6 text-lg text-white/70">
            A futuristic platform for teams to design, build, and launch faster. Minimal, immersive, and interactive by default.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-900 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">Get started</a>
            <a href="#showcase" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors">See showcase</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
