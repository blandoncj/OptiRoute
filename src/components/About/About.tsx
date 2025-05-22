import { useEffect, useState } from 'react'

export const About = () => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const sectionMountClass = hasMounted ? 'opacity-100' : 'opacity-0'
  const imageMountClass = hasMounted ? 'opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0' : 'opacity-0 -translate-x-10 scale-90 -rotate-3'
  const textMountClass = hasMounted ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-90'

  return (
    <section
      id="about"
      className={`relative pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 transition-opacity duration-1000 ease-in ${sectionMountClass}`}
    >
      <div className="absolute inset-0 z-0 opacity-20 motion-safe:animate-pulse-slow">
        <div className="absolute top-[-20%] left-[-10%] w-3/5 h-3/5 bg-gradient-to-br from-purple-600 to-transparent rounded-full filter blur-3xl animation-delay-500"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-3/5 h-3/5 bg-gradient-to-tl from-indigo-700 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute top-[30%] left-[25%] w-1/2 h-1/2 bg-gradient-to-tr from-pink-600/70 to-transparent rounded-full filter blur-2xl animation-delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-5">
        <div className={`w-full lg:w-2/5 flex justify-center transition-all duration-1000 ease-out delay-200 transform ${imageMountClass}`}>
          <div className="relative group p-1.5 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-3xl shadow-2xl shadow-purple-500/40 hover:shadow-purple-400/60 transition-shadow duration-500">
            <div className="absolute -inset-2 bg-white/10 rounded-[1.6rem] opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-slower group-hover:animate-none scale-95 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
            <img
              src="assets/opti.png" alt="Visualización de la app OptiRoute en un dispositivo"
              className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] object-contain rounded-2xl bg-slate-800/70 backdrop-blur-sm
                         transform transition-all duration-500 ease-out group-hover:scale-105 border-2 border-slate-700 group-hover:border-purple-500/50"
            />
          </div>
        </div>

        <div className={`w-full lg:w-3/5 transition-all duration-1000 ease-out delay-500 transform ${textMountClass}`}>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
            <article className="relative bg-slate-800/90 backdrop-blur-lg rounded-xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-700/50 group-hover:border-purple-600/50 transition-colors duration-300">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 text-center lg:text-left">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tight">
                  Innovación en Movimiento: <br className="hidden sm:block" />Así es OptiRoute
                </span>
              </h2>
              <div className="space-y-5 text-gray-300 text-lg md:text-xl leading-relaxed">
                <p>
                  <strong className="font-semibold text-indigo-400 drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]">OptiRoute</strong> no es solo una app, es tu copiloto inteligente. Fusionamos diseño intuitivo con la potencia de Kotlin, Swift, y Google Maps API para ofrecer una optimización de rutas sin precedentes.
                </p>
                <p>
                  Reducimos tiempos, combustible y estrés, maximizando la eficiencia y la satisfacción del cliente con ETAs precisos, gestión de tráfico en tiempo real y consideraciones de carga vehicular.
                </p>
                <p>
                  Diseñada para todos, desde el conductor experto hasta el novato tecnológico, OptiRoute es accesible, confiable y está en constante evolución, con la mira en la optimización para vehículos eléctricos y más allá.
                </p>
              </div>
              <div className="mt-10 text-center lg:text-right">
                <a
                  href="#requirements"
                  className="inline-flex items-center gap-x-2 px-8 py-3.5 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg
                             shadow-lg hover:shadow-xl hover:shadow-purple-500/30 hover:from-indigo-500 hover:to-purple-600
                             transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ease-out
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Explora Funcionalidades
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
