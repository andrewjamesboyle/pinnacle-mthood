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
              <h1 className="max-w-full justify-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Pinnacle Advocacy
              </h1>
              <h1 className="max-w-full justify-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Mount Hood
              </h1>
              <div className="mt-5 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => handleNavigation('Contact')}
                  className="rounded-md bg-indigo-500 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Contact
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
