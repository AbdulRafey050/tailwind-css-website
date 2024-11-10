import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div>
        <h2 className="text-xl font-semibold">Pakwheel</h2>
      </div>

      <ul className="hidden md:flex space-x-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="text-2xl" />
        </SheetTrigger>
        <SheetContent side="right" className="w-64 p-4 bg-gray-100">
          <ul className="space-y-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
