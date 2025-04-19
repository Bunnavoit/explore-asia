import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr_auto_1fr] bg-background lg:grid-cols-[max(50%,36rem)_1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <Link href="/">
            <Image
              className="h-16 w-auto"
              src="/images/travel.png"
              alt="explore-asia"
              width={200}
              height={100}
            />
          </Link>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-5xl font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-pretty text-white sm:text-6xl">
              Page not found
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="text-sm/7 font-semibold text-indigo-600"
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </Link>
            </div>
          </div>
        </main>
        <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-gray-100 bg-background py-10">
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm/7 text-gray-600 lg:px-8">
              <Link href="#">Contact support</Link>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="size-0.5 fill-gray-300"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <Link href="#">Status</Link>
            </nav>
          </div>
        </footer>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block relative ">
          <Image
            alt=""
            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            width={500}
            height={400}
            className="absolute inset-0 size-full object-cover"
          />
          <div>
            <Image
              alt=""
              src="/images/404.gif"
              width={500}
              height={400}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
