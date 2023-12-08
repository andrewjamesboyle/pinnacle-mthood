// import {
//   ArrowPathIcon,
//   CloudArrowUpIcon,
//   LockClosedIcon,
// } from '@heroicons/react/20/solid'

// const features = [
//   {
//     name: 'Professional Government Relations',
//     description:
//       'Navigating through the vast and diversified terrains of Oregon’s political landscape, Pinnacle Mt. Hood leverages its seasoned expertise in government relations to build consensus, forge connections, and realize tangible policy victories, always with a panoramic view of the state’s myriad interests and stakes.',
//     href: '/Services',
//     icon: CloudArrowUpIcon,
//   },

//   {
//     name: 'Superior Legislative Lobbying Services',
//     description:
//       'With a finger firmly on the pulse of legislative currents, our team provides unparalleled lobbying services, offering an in-depth understanding of policy-making processes, identifying opportunities, and advocating for your interests with a persuasive, informed, and strategic approach.',
//     href: '/Services',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Decades of experience',
//     description:
//       'Rooted in decades of multi-faceted experience within Oregon, our team brings to the table an intimate understanding of its geographical, demographic, and economic nuances, ensuring our policy advances are not just informed but also intricately aligned with the heartbeat of the state and its people.',
//     href: '/Services',
//     icon: ArrowPathIcon,
//   },
// ]

// const featuresTwo = [
//   {
//     name: 'Integration and engagement with local government',
//     description:
//       'Engaging meticulously with 242 municipalities, 36 counties, and more, our deep-seated relationships and a two-decade traversal of the state enable us to interface with local government entities effortlessly, ensuring your business navigates smoothly through the regulatory and economic landscapes.',
//     href: '/Services',
//     icon: CloudArrowUpIcon,
//   },

//   {
//     name: 'Management of critical regulatory economic impacts',
//     description:
//       'Mitigating regulatory impacts and steering through economic challenges, Pinnacle Mt. Hood strategically manages and influences policy, ensuring it is conducive to both business and the wider communities, while safeguarding the unique environmental and societal ecosystems of Oregon.',
//     href: '/Services',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Key Relationships and Coalition Building',
//     description:
//       'Harnessing the power of unity, we cultivate and leverage key relationships across various sectors and interests, orchestrating coalitions that amplify our advocacy efforts. Our strategic alliances span the spectrum of Oregon’s socio-political arena, enabling broad-based support and consensus-building.',
//     href: '/Services',
//     icon: ArrowPathIcon,
//   },
// ]

// const featuresThree = [
//   {
//     name: 'Intelligence gathering on procurement actions',
//     description:
//       'Armed with acute business acumen and a unique perspective, we meticulously gather intelligence on procurement actions, providing you with invaluable insights and a strategic edge in navigating through Oregon’s procurement landscape, ensuring your solutions are aptly positioned.',
//     href: '/Services',
//     icon: CloudArrowUpIcon,
//   },

//   {
//     name: 'Collaboration to improve policies and streamline processes',
//     description:
//       'We do not merely navigate existing procurement processes but also collaborate to enhance them. Through astute policy collaboration and process streamlining, we augment your opportunities, fostering an environment where your business and technology solutions seamlessly intersect with state needs.',
//     href: '/Services',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Unsurpassed expertise of the complex procurement process.',
//     description:
//       'With an unrivaled depth of experience, including tangible engagements with Oregon’s Department of Administrative Services and Chief Information Officers, we navigate the complexities of the procurement process, delivering optimum value and navigating through bureaucratic intricacies with unmatched expertise.',
//     href: '/Services',
//     icon: ArrowPathIcon,
//   },
// ]

export default function Services() {
  return (
    <>
      <section id="Services">
        <div className="sm:py-18 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center lg:mx-0 lg:text-left">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Our Services
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                State and Federal Government Affairs
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Through decades of experience shaping policy in state and
                federal government, our team has achieved significant,
                measurable policy victories for clients before the Oregon
                Legislature. In addition, we have succeeded in delivering
                millions in benefits and cost savings in agency rulemakings and
                contested case proceedings. We have also worked with Oregon’s
                federal Congressional delegation in numerous of arenas,
                including land-use, inter-governmental relations, tribal
                matters, broadband policy, mergers and acquisitions, and
                infrastructure planning. And we have worked with federal
                agencies from the Department of Agriculture to the Federal
                Communications Commission to resolve client’s issues.
              </p>
            </div>
            {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <feature.icon
                        className="h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6 text-indigo-600"
                        >
                          Learn more <span aria-hidden="true"></span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div> */}
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="/mthood.jpg"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-20 max-w-2xl lg:mx-0 lg:text-left">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Local Government Affairs
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Pinnacle Mt. Hood works closely with local government to deliver
                positive outcomes for clients, utilizing its deep understanding
                of state and relevant federal law. When we engage with local
                government, we do so in-person with relationships we have
                cultivated over the course of two decades traversing the state.
                Oregon local government consists of 242 incorporated
                municipalities, 36 counties, 22 port districts, and 28 types of
                special districts. They are all critical to Oregon’s economy and
                can have a significant impact on business activity and
                regulation. We make the job of interfacing with them simple,
                easy, and successful for your business.
              </p>
            </div>
            {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {featuresTwo.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <feature.icon
                        className="h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6 text-indigo-600"
                        >
                          Learn more <span aria-hidden="true"></span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div> */}
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="/capitol2.jpg"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-20 max-w-2xl lg:mx-0 lg:text-left">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Procurement Consulting
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We have a procurement perspective that is unique in the
                industry. Pinnacle Mt. Hood staff has supported SLED sales
                professionals within the largest organizations and understands
                the needs of government sales teams. Our depth of experience
                includes decades of Oregon government sales experience, grant
                writing, and policy development surrounding the procurement
                process, working directly with Oregon’s Department of
                Administrative Services and two Oregon CIOs.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We deliver…
                <ul className="list-disc space-y-2 pl-5 text-lg text-gray-600">
                  <li>Intelligence gathering on procurement actions.</li>
                  <li>
                    Collaboration to improve policies and streamline processes.
                  </li>
                  <li>
                    New opportunities and increasing the value of existing
                    solicitations.
                  </li>
                  <li>
                    Unsurpassed expertise of the complex procurement process.
                  </li>
                </ul>
              </p>
            </div>
            {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {featuresThree.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <feature.icon
                        className="h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6 text-indigo-600"
                        >
                          Learn more <span aria-hidden="true"></span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
