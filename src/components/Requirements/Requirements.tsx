import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeBracketIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  MapPinIcon,
  PresentationChartLineIcon,
  TruckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/solid'
import { useEffect, useMemo, useState } from 'react'

const iconMapping = {
  UserGroupIcon,
  MapPinIcon,
  TruckIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CodeBracketIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  PresentationChartLineIcon
}

type IconName = keyof typeof iconMapping;

interface RequirementItem {
  title: string;
  description: string;
  iconName: IconName;
  color: string;
  bgColor: string;
}

export const Requirements = () => {
  const requirementsData: RequirementItem[] = [
    { title: 'Registro y Autenticación Segura', description: 'Roles definidos (admin, conductor, cliente) con acceso seguro y personalizado al sistema.', iconName: 'UserGroupIcon', color: 'text-sky-400', bgColor: 'bg-sky-500/10' },
    { title: 'Gestión Inteligente de Rutas', description: 'Creación, edición y eliminación de rutas personalizadas con optimización dinámica en tiempo real.', iconName: 'MapPinIcon', color: 'text-emerald-400', bgColor: 'bg-emerald-500/10' },
    { title: 'Asignación Eficiente', description: 'Vinculación ágil de vehículos a rutas y asignación inteligente de conductores disponibles.', iconName: 'TruckIcon', color: 'text-amber-400', bgColor: 'bg-amber-500/10' },
    { title: 'Monitoreo en Tiempo Real', description: 'Seguimiento GPS preciso del estado y ubicación de viajes, visualizado en mapas interactivos.', iconName: 'DevicePhoneMobileIcon', color: 'text-rose-400', bgColor: 'bg-rose-500/10' },
    { title: 'Visualización Optimizada de Rutas', description: 'Integración con Google Maps API para mostrar la ruta más eficiente (tráfico, distancia, ETA).', iconName: 'EyeIcon', color: 'text-teal-400', bgColor: 'bg-teal-500/10' },
    { title: 'Gestión Proactiva de Incidencias', description: 'Registro y notificación instantánea de problemas o eventos imprevistos durante el recorrido.', iconName: 'ExclamationTriangleIcon', color: 'text-red-400', bgColor: 'bg-red-500/10' },
    { title: 'Desarrollo Nativo Multiplataforma', description: 'Apps en Kotlin (Android) y Swift (iOS) para un rendimiento y experiencia de usuario óptimos.', iconName: 'CodeBracketIcon', color: 'text-cyan-400', bgColor: 'bg-cyan-500/10' },
    { title: 'Interfaz Intuitiva y Amigable', description: 'Diseño centrado en la usabilidad para conductores, incluso con poca experiencia tecnológica.', iconName: 'CogIcon', color: 'text-fuchsia-400', bgColor: 'bg-fuchsia-500/10' },
    { title: 'Preferencias de Conductor Avanzadas', description: 'Ajuste de rutas según preferencias: evitar peajes, autopistas, y optimización de paradas.', iconName: 'WrenchScrewdriverIcon', color: 'text-orange-400', bgColor: 'bg-orange-500/10' },
    { title: 'Reportes Operativos Detallados', description: 'Generación de informes sobre viajes, rendimiento de rutas, consumo y alertas de mantenimiento.', iconName: 'PresentationChartLineIcon', color: 'text-lime-400', bgColor: 'bg-lime-500/10' }
  ]

  const iconComponents = useMemo(() => iconMapping, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const nextRequirement = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % requirementsData.length)
  }

  const prevRequirement = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + requirementsData.length) % requirementsData.length)
  }

  const sectionMountClass = hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  const titleMountClass = hasMounted ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-5'
  const carouselMountClass = hasMounted ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-5'

  return (
    <section
      id="requirements"
      className={`relative py-20 md:py-32 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900 transition-all duration-1000 ease-out ${sectionMountClass}`}
    >
      <div className="absolute inset-0 z-0 opacity-15 motion-safe:animate-pulse-slow">
        <div className="absolute top-[10%] left-[5%] w-2/5 h-2/5 bg-gradient-to-br from-cyan-600/70 to-transparent rounded-full filter blur-3xl animation-delay-500"></div>
        <div className="absolute bottom-[15%] right-[0%] w-1/2 h-1/2 bg-gradient-to-tl from-blue-700/70 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 sm:mb-16 transition-all duration-700 ease-out ${titleMountClass}`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 tracking-tight">
            Funcionalidades Clave de OptiRoute
          </span>
        </h2>

        <div className={`relative w-full max-w-2xl lg:max-w-3xl mx-auto transition-all duration-700 ease-out ${carouselMountClass}`}>
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {requirementsData.map((req) => {
                const IconComponent = iconComponents[req.iconName]
                return (
                  <div key={req.title} className="w-full flex-shrink-0">
                    <article className="bg-slate-800/80 backdrop-blur-lg p-6 sm:p-8 lg:p-10 border border-slate-700/60 h-full flex flex-col justify-start min-h-[380px] sm:min-h-[340px] md:min-h-[320px]">
                      <div className="flex items-start sm:items-center mb-5">
                        {IconComponent && ( // Es una buena práctica verificar si el componente existe
                          <div className={`p-3 rounded-lg ${req.bgColor} mr-4 shadow-md flex-shrink-0`}>
                            <IconComponent className={`h-7 w-7 sm:h-8 sm:w-8 ${req.color}`} />
                          </div>
                        )}
                        <h3 className={`text-xl sm:text-2xl font-semibold ${req.color} tracking-tight text-left`}>{req.title}</h3>
                      </div>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-left">
                        {req.description}
                      </p>
                    </article>
                  </div>
                )
              })}
            </div>
          </div>

          {requirementsData.length > 1 && (
            <>
              <button
                onClick={prevRequirement}
                aria-label="Funcionalidad anterior"
                className="absolute top-1/2 -left-3 sm:-left-5 md:-left-10 transform -translate-y-1/2 p-2.5 sm:p-3 bg-slate-700/80 hover:bg-indigo-500 text-white rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transform hover:scale-110"
              >
                <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                onClick={nextRequirement}
                aria-label="Siguiente funcionalidad"
                className="absolute top-1/2 -right-3 sm:-right-5 md:-right-10 transform -translate-y-1/2 p-2.5 sm:p-3 bg-slate-700/80 hover:bg-indigo-500 text-white rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 transform hover:scale-110"
              >
                <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </>
          )}

          {requirementsData.length > 1 && (
            <div className="flex justify-center space-x-2.5 mt-8 sm:mt-10">
              {requirementsData.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ir a la funcionalidad ${index + 1}`}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ease-out
                                  ${currentIndex === index ? 'bg-indigo-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
