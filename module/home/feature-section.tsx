"use client";
import { CalendarClock, CreditCard, Globe, Headset } from "lucide-react";

const features = [
  {
    name: "Easy Trip Planning",
    description:
      "Plan your next adventure in minutes with smart suggestions, customizable itineraries, and real-time availability.",
    icon: CalendarClock,
  },
  {
    name: "Secure Booking",
    description:
      "Enjoy peace of mind with our secure payment system and instant booking confirmations.",
    icon: CreditCard,
  },
  {
    name: "Global Destinations",
    description:
      "Explore curated trips to over 100+ destinations with guides, activities, and exclusive local experiences.",
    icon: Globe,
  },
  {
    name: "24/7 Travel Support",
    description:
      "Our team is here for you anytime, anywhere — before, during, and after your trip.",
    icon: Headset,
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Why Choose Us
          </h2>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
