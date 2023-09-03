import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonSalesProps = ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonSales({ children, className, ...props }: ButtonSalesProps) {
  return (
    <button className={cn(
      'bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all w-full mt-8'
    )}>

      {children}
    </button>
  )
}