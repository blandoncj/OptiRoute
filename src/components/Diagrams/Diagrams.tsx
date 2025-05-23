import { useEffect, useState, Fragment, type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react'
import {
  EyeIcon,
  ShareIcon,
  BeakerIcon,
  ArrowsPointingOutIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'

// Definición de la interfaz Diagram (como se mostró arriba)
interface Diagram {
  id: string;
  title: string;
  src: string;
  alt: string;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & { title?: string; titleId?: string; } & RefAttributes<SVGSVGElement>>;
  color: string;
  borderColor: string;
}

export const Diagrams = () => { // O el nombre que estés usando, ej. Diagrams
  const [hasMounted, setHasMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Tipar el estado selectedDiagram
  const [selectedDiagram, setSelectedDiagram] = useState<Diagram | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const diagrams: Diagram[] = [
    {
      id: 'deployment',
      title: 'Diagrama de Despliegue',
      src: 'assets/deployment_diagram.png',
      alt: 'Diagrama de Despliegue de la infraestructura de OptiRoute',
      icon: ShareIcon,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/50',
    },
    {
      id: 'usecase',
      title: 'Diagrama de Casos de Uso',
      src: 'assets/usercase_diagram.png',
      alt: 'Diagrama de Casos de Uso mostrando interacciones de usuarios con OptiRoute',
      icon: EyeIcon,
      color: 'text-teal-400',
      borderColor: 'border-teal-500/50',
    },
    {
      id: 'class',
      title: 'Diagrama de Clases',
      src: 'assets/class_diagram.png',
      alt: 'Diagrama de Clases detallando la estructura del software OptiRoute',
      icon: BeakerIcon,
      color: 'text-sky-400',
      borderColor: 'border-sky-500/50',
    },
  ]

  // TS7006: Parameter 'diagram' implicitly has an 'any' type.
  // Solución: Tipar el parámetro 'diagram' con la interfaz Diagram.
  const openModal = (diagram: Diagram) => { // <<<<<< LÍNEA 52 (aproximada)
    setSelectedDiagram(diagram)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedDiagram(null), 300)
  }

  useEffect(() => {
    // TS7006: Parameter 'event' implicitly has an 'any' type.
    // Solución: Tipar 'event' como KeyboardEvent.
    const handleEsc = (event: KeyboardEvent) => { // <<<<<< LÍNEA 64 (aproximada)
      if (event.key === 'Escape') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])


  const sectionMountClass = hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  const titleMountClass = hasMounted ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-5'
  // TS7006: Parameter 'index' implicitly has an 'any' type.
  // Solución: Tipar 'index' como number. (TypeScript usualmente lo infiere bien en map, pero si esta función es separada, necesita tipo)
  const diagramMountClass = (index: number) => (hasMounted ? `opacity-100 translate-y-0 delay-${300 + index * 100}` : 'opacity-0 translate-y-5') // <<<<<< LÍNEA 76 (aproximada)

  return (
    <>
      <section
        id="diagrams"
        className={`relative py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-slate-900 transition-all duration-1000 ease-out ${sectionMountClass}`}
      >
        {/* ... (contenido de la sección) ... */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-16 sm:mb-20 transition-all duration-700 ease-out ${titleMountClass}`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-400 to-sky-400 tracking-tight">
              Explora Nuestra Arquitectura
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {diagrams.map((diagram, index) => ( // TypeScript infiere 'diagram: Diagram' y 'index: number' aquí
              <div
                key={diagram.id}
                className={`w-full flex flex-col transition-all duration-700 ease-out transform ${diagramMountClass(index)}`}
              >
                <article
                  className={`flex flex-col h-full bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-xl hover:shadow-2xl
                              border border-slate-700/80 group
                              transition-all duration-300 ease-out
                              hover:${diagram.borderColor} p-5 sm:p-6 cursor-pointer`}
                  onClick={() => openModal(diagram)}
                >
                  {/* ... (contenido de la tarjeta) ... */}
                  <div className="flex items-center mb-4">
                    {<diagram.icon className={`h-7 w-7 mr-3 ${diagram.color} flex-shrink-0`} />}
                    <h3 className={`text-lg sm:text-xl font-semibold ${diagram.color} tracking-tight text-left`}>
                      {diagram.title}
                    </h3>
                  </div>
                  <div className="relative flex-grow flex items-center justify-center rounded-lg bg-slate-900/50 border border-slate-700/60 shadow-inner overflow-hidden h-48 sm:h-56 md:h-60 lg:h-64 group">
                    <img
                      src={diagram.src}
                      alt={`Vista previa de ${diagram.title}`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowsPointingOutIcon className="h-12 w-12 text-white/80" />
                    </div>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-gray-400/80 italic text-left">
                    Haz clic para ver en detalle: {diagram.title}.
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Implementation */}
      {/* Errores TS2339: Property 'title'/'src'/'alt' does not exist on type 'never'. */}
      {/* Solución: 'selectedDiagram' ahora es de tipo 'Diagram | null'. Ya hay una comprobación 'selectedDiagram && (...)' */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          {/* ... (resto del modal, que ya tiene la comprobación selectedDiagram && ...) */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                  {selectedDiagram && ( // Esta comprobación es crucial
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-medium leading-6 text-indigo-300 mb-4 flex justify-between items-center"
                      >
                        {selectedDiagram.title} {/* <<<<<< LÍNEA 171 (aproximada) */}
                        <button
                          type="button"
                          className="p-2 rounded-md text-gray-400 hover:text-indigo-400 hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
                          onClick={closeModal}
                        >
                          <XMarkIcon className="h-6 w-6" />
                          <span className="sr-only">Cerrar modal</span>
                        </button>
                      </Dialog.Title>
                      <div className="mt-2 max-h-[80vh] overflow-auto flex justify-center items-center bg-slate-900/50 rounded-lg p-2">
                        <img
                          src={selectedDiagram.src}  // <<<<<< LÍNEA 183 (aproximada)
                          alt={selectedDiagram.alt}  // <<<<<< LÍNEA 184 (aproximada)
                          className="max-w-full max-h-[calc(80vh-80px)] object-contain rounded"
                        />
                      </div>
                      <p className="mt-4 text-sm text-gray-400">
                        {selectedDiagram.alt} {/* <<<<<< LÍNEA 189 (aproximada) */}
                      </p>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
