import { Bars3BottomLeftIcon, BuildingStorefrontIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  const navLinks = [
    { href: '#about', text: 'Descubre' },
    { href: '#requirements', text: 'Funcionalidades' },
    { href: '#diagrams', text: 'Arquitectura' },
  ]

  useEffect(() => {
    setHasMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const headerBaseClass = 'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out'
  const headerScrollClass = isScrolled || isMobileMenuOpen
    ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-slate-700/60 py-3'
    : 'bg-transparent border-b border-transparent py-5'
  const headerMountClass = hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'

  return (
    <header className={`${headerBaseClass} ${headerScrollClass} ${headerMountClass}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" onClick={closeMobileMenu} className="flex items-center gap-2 group outline-none" aria-label="OptiRoute Home">
            <BuildingStorefrontIcon
              className={`h-9 w-9 transition-all duration-300 ease-out
                        ${isScrolled || isMobileMenuOpen ? 'text-indigo-400' : 'text-indigo-500'}
                        group-hover:text-indigo-300 group-hover:animate-pulse`}
            />
            <span className="text-3xl font-extrabold tracking-tight transition-colors duration-300 ease-out">
              <span className={`${isScrolled || isMobileMenuOpen ? 'text-gray-100' : 'text-white'} group-hover:text-indigo-300`}>Opti</span>
              <span className={`${isScrolled || isMobileMenuOpen ? 'text-indigo-400' : 'text-indigo-500'} group-hover:text-gray-100`}>Route</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <a
                key={link.text}
                href={link.href}
                style={{ transitionDelay: `${index * 100 + (hasMounted ? 0 : 500)}ms` }}
                className={`relative px-3 py-2 lg:px-4 text-base lg:text-lg font-medium rounded-lg transition-all duration-300 ease-out group transform hover:-translate-y-0.5
                            ${isScrolled || isMobileMenuOpen ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}
                            ${hasMounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
              >
                <span className="relative z-10">{link.text}</span>
                <span
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100
                              ${isScrolled || isMobileMenuOpen ? 'bg-indigo-600/30 group-hover:bg-indigo-600/50' : 'bg-white/10 group-hover:bg-white/20'}`}
                ></span>
              </a>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="relative z-50 p-2 text-gray-300 hover:text-indigo-300 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span className="sr-only">Abrir menú</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-8 w-8 transition-transform duration-300 transform rotate-0 hover:rotate-90" />
              ) : (
                <Bars3BottomLeftIcon className="h-8 w-8 transition-transform duration-300 transform rotate-0 hover:rotate-[-10deg]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Animación mejorada */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-40 transform transition-all duration-500 ease-in-out
                    ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'}
                    bg-slate-900 shadow-2xl flex flex-col h-screen max-h-screen`}
        style={{ paddingTop: isMobileMenuOpen && isScrolled ? '5.5rem' : '5rem' }}
      >
        <div className="flex-grow overflow-y-auto px-6 pb-6 pt-8">
          <nav className="flex flex-col items-center space-y-5">
            {navLinks.map((link, index) => (
              <a
                key={`mobile-${link.text}`}
                href={link.href}
                onClick={closeMobileMenu}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
                className={`block w-full max-w-xs text-center py-3 px-5 text-xl font-semibold rounded-xl transition-all duration-300 ease-out
                            text-gray-200 hover:text-slate-900 hover:bg-indigo-400
                            transform focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900
                            ${isMobileMenuOpen ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'} hover:scale-105`}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
        <div className="py-6 text-center">
          <BuildingStorefrontIcon className="h-10 w-10 text-indigo-600 mx-auto mb-2" />
          <p className="text-sm text-indigo-500">OptiRoute &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </header>
  )
}
