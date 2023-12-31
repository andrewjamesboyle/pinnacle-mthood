import { MetaTags } from '@redwoodjs/web'

// const people = [
//   {
//     name: 'Tre Hendricks',
//     role: 'Founder / CEO',
//     imageUrl: '/portrait2.jpg',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   {
//     name: 'Tre Hendricks',
//     role: 'Founder / CEO',
//     imageUrl: '/portrait2.jpg',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   {
//     name: 'Tre Hendricks',
//     role: 'Founder / CEO',
//     imageUrl: '/portrait2.jpg',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   // More people...
// ]

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <div className="bg-white">
        <main className="isolate">
          {/* Image section */}
          <div
            className="mt-8 sm:mt-8
           xl:mx-auto xl:max-w-7xl xl:px-8"
          >
            <img
              src="/lavender-dark.jpg"
              alt=""
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            />
          </div>

          {/* Values section */}
          <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-8 lg:px-8">
            <div className="mx-auto max-w-5xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Pinnacle Mt. Hood’s success in advocacy is inspired by Oregon’s
                monolithic landmark. From Mt. Hood’s peak, one can see most of
                the state; the vast eastern High Desert, the great Columbia
                River Basin, the spine of the Cascade Mountains, the burgeoning
                wine country of the Willamette Valley, the metropolis of
                Portland, the Coast Range, and hidden just behind it the expanse
                of the Pacific Ocean and the communities that inhabit its
                shores.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We achieve results by building consensus among diverse and often
                opposing interests. We can do this because we deeply understand
                Oregon, the issues it faces, its people, and the leaders who
                make and implement policy. Our approach reflects the great
                diversity of Oregon, its geography, its natural bounty, its
                resources, and its people. When we at Pinnacle Mt. Hood advance
                policy, we do it knowing the outcome will affect not just one
                part of the state and its people, but all parts and all people.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                When we solve critical policy issues that Oregon’s people,
                business community, and government face, our solutions are
                informed by a life’s work in Oregon’s Columbia River Gorge,
                which is the bridge between the East and West – the lush Pacific
                Coast, the arid rangeland of our Eastern breadbasket, the
                industrial staccato of Portland, the vineyards of the Willamette
                Valley, and the sprawling orchards of the upper-Hood River
                Valley. We understand Oregon because we have lived, worked, and
                raised our families here.
              </p>
            </div>
          </div>

          {/* <div className="mt-8 bg-white py-8 sm:mt-8 sm:py-12 md:mt-12 md:py-16 lg:mt-16 lg:py-20 xl:mt-20 xl:py-24 2xl:mt-24 2xl:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-5xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our team
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We’re a dynamic group of individuals who are passionate about
                  what we do and dedicated to delivering the best results for
                  our clients.
                </p>
              </div>
              <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {people.map((person) => (
                  <li key={person.name}>
                    <img
                      className="aspect-[3/2] w-full rounded-2xl object-cover"
                      src={person.imageUrl}
                      alt=""
                    />
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-base leading-7 text-gray-600">
                      {person.role}
                    </p>
                    <ul className="mt-6 flex gap-x-6">
                      <li>
                        <a
                          href={person.twitterUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </main>
      </div>
    </>
  )
}

export default AboutPage
