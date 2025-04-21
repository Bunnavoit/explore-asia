export default function Testimonail() {
  return (
    <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-2/1 h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                alt="Angkor Wat Temple"
                src="/images/angkor-wat-temple.jpg"
                className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                fill="none"
                viewBox="0 0 162 128"
                aria-hidden="true"
                className="absolute top-0 left-0 -z-10 h-32 stroke-white/20"
              >
                <path d="M65.5697 118.507L..." id="quote" />
                <use x={86} href="#quote" />
              </svg>
              <blockquote className="text-xl/8 font-semibold text-white sm:text-2xl/9">
                <p>
                  Wandering through the majestic temples of Angkor Wat is like
                  stepping into another world. From sunrise to sunset, every
                  corner tells a story of history, culture, and wonder.
                </p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Sokunthy Meas</div>
                <div className="mt-1 text-gray-400">
                  Travel Enthusiast from Phnom Penh
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
