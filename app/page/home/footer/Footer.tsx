import Image from "next/image";

export function Footer() {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat mt-10">
      <span className='flex items-center gap-1.5 text-xs sm:text-sm font-mono text-white'>
        Copyright © 2023
        <strong className='font-medium'>Box Aprova</strong>
      </span>
    </footer>
  )
}