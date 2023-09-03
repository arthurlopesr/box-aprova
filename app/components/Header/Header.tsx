'use client';


import Image from "next/image";
import { NavItem } from "./NavItem";

const NAV_ITENS = [
  {
    label: 'Inicial',
    href: '/'
  }
]

export function Header() {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Image
          src="/images/logo.svg"
          alt="logo notion enenm"
          width={68}
          height={59}
        />
        <nav className="flex items-center gap-4 sm:gap-8">
          {NAV_ITENS.map(item => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>

    </header>
  )
}