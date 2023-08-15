
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"

interface NavItemProps {
  label: string;
  href: string;
}

export function NavItem({ label, href }: NavItemProps) {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link href={href} className={cn(
      "text-gray-400 flex items-center gap-2 font-medium font-mono",
      isActive && "text-gray-100"
    )}>
      {label}
    </Link>
  )
}