import { CheckCircleIcon } from '@heroicons/react/20/solid'

import { MetaTags } from '@redwoodjs/web'

const ServicesPage = () => {
  return (
    <>
      <MetaTags title="Services" description="Services page" />

      <div className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Pinnacle Mount Hood
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Will Help You
          </h1>
          <p className="mt-6 text-xl leading-8">
            Through decades of experience shaping policy in state and federal
            government, our team has achieved significant, measurable policy
            victories for clients before the Oregon Legislature. In addition, we
            have succeeded in delivering millions in benefits and cost savings
            in agency rulemakings and contested case proceedings. We have also
            worked with Oregon’s federal Congressional delegation in numerous of
            arenas, including land-use, inter-governmental relations, tribal
            matters, broadband policy, mergers and acquisitions, and
            infrastructure planning. And we have worked with federal agencies
            from the Department of Agriculture to the Federal Communications
            Commission to resolve client’s issues.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              Pinnacle Mt. Hood works closely with local government to solve
              policy issues, utilizing its deep understanding of state and
              relevant federal law. When we engage with local government, we do
              so in-person using relationships we have cultivated over the
              course of two decades traversing the state by plane, train, and
              automobile. At the time of this writing, Oregon contained 242
              incorporated municipalities, 36 counties, 22 port districts, and
              28 types of special districts. They are all critical to Oregon’s
              economy and can have a significant impact on business activity and
              regulation. We make the job of interfacing with them simple, easy,
              and successful for your business.
            </p>
            <ul className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    State and Federal Government Affairs
                  </strong>{' '}
                  We have succeeded in delivering millions in benefits and cost
                  savings in agency rulemakings and contested case proceedings
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Local Government Affairs
                  </strong>{' '}
                  We leverage decades of experience to help our clients navigate
                  the economic impacts of local government regulation
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Procurement Consulting
                  </strong>{' '}
                  We have unsurpassed expertise of the complex procurement
                  process
                </span>
              </li>
            </ul>
            <p className="mt-8">
              We have a procurement perspective no other Oregon firm offers.
              Pinnacle Mt. Hood’s ability to represent our client’s business and
              technology solutions makes us uniquely positioned to support
              Oregon’s procurement development professionals. Our team’s depth
              of experience includes decades of Oregon government sales
              experience, grant writing, and policy development surrounding the
              procurement process, working directly with Oregon’s Department of
              Administrative Services and two Oregon CIOs.
            </p>

            {/* <figure className="mt-10 border-l border-indigo-600 pl-9">
              <blockquote className="font-semibold text-gray-900">
                <p>
                  "Pinnacle's strategic approach enabled us to save countless
                  amounts of time and money navigating the procurement process.
                  They are a trusted partner."
                </p>
              </blockquote>
              <figcaption className="mt-6 flex gap-x-4">
                <img
                  className="h-6 w-6 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="text-sm leading-6">
                  <strong className="font-semibold text-gray-900">
                    Maria Hill
                  </strong>{' '}
                  – Marketing Manager
                </div>
              </figcaption>
            </figure> */}
            {/* <p className="mt-10">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p> */}
          </div>
          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src="/portrait2.jpg"
              alt=""
            />
          </figure>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Everything you need to get up and running
            </h2>
            <p className="mt-6">
              Contact us today to discuss your business needs. We will work with
              you to develop a plan that will help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesPage
