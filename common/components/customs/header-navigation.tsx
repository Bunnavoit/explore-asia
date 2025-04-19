'use client';

import { User, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import Link from 'next/link';

const navigation = [
  { name: 'Destiny', href: '/desnity' },
  { name: 'Contact-Us', href: '/contact-us' },
  { name: 'About-Us', href: '/about-us' },
];

export default function HeaederNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-16 w-auto"
                src="/images/travel.png"
                alt="explore-asia"
                width={200}
                height={100}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Explore-Asia</span>
                    <Image
                      className="h-16 w-auto"
                      src="/images/travel.png"
                      alt="explore-asia"
                      width={200}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded px-3 py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href="#"
                    className="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded px-3 py-2"
                  >
                    Log in
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
