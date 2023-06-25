import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Services from '../Services/Services'

const Hero = () => {
  const handleNavigation = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="Hero">
      <div className="bg-gray-900">
        <div className="relative isolate overflow-hidden pt-20">
          <img
            src="/lavender-dark.jpg"
            alt=""
            className="fixed inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="lg:py-30 mx-auto max-h-full max-w-4xl justify-center  object-cover  py-40 sm:py-40">
            <div className="text-center">
              {/* <div className="hidden py-5 sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full bg-gray-800 bg-opacity-70 px-3 py-1 text-sm  leading-6 text-gray-100 ring-1 ring-white/10 hover:ring-white/20">
                Announcing our newest branch.{' '}
                <a href="#" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Mount Hood
                </a>
              </div>
            </div> */}
              <h1 className="max-w-full justify-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Pinnacle Advocacy
              </h1>
              <h1 className="max-w-full justify-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Mount Hood
              </h1>
              {/* <p className="mt-6 text-lg leading-8 text-gray-100">
              Pinnacle Advocacy embraces a philosophy of representation that is
              built on absolute integrity with an unquestioned commitment to
              success.
            </p> */}
              <div className="mt-5 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => handleNavigation('Contact')}
                  className="rounded-md bg-indigo-500 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => handleNavigation('Services')}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn More <span aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </div>
          <Services />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </section>
  )
}

export default Hero
