import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 font-bold rounded-full border-2 cursor-pointer no-underline transition-[filter,opacity] duration-150'

const variants = {
  primary:
    'bg-gradient-to-b from-[#e53935] via-[#d32f2f] to-[#c62828] text-white border-[#9a1b1b] shadow-[0_4px_0_#9a1b1b] hover:brightness-105',
  white:
    'bg-gradient-to-b from-white to-[#f0f0f0] text-[#D32F2F] border-[#d0d0d0] shadow-[0_4px_0_#d0d0d0] hover:brightness-[1.02]',
  outline:
    'bg-gradient-to-b from-white to-[#fafafa] text-[#D32F2F] border-[#D32F2F] shadow-[0_4px_0_#D32F2F] hover:brightness-[1.02]',
  whatsapp:
    'bg-gradient-to-b from-[#2edb5e] via-[#25D366] to-[#1da851] text-white border-[#128C7E] shadow-[0_4px_0_#128C7E] hover:brightness-105',
  glass:
    'bg-gradient-to-b from-white/30 to-white/10 text-white border-white/45 shadow-[0_4px_0_rgba(255,255,255,0.2)] hover:bg-white/25',
} as const

export type Button3dVariant = keyof typeof variants

export function button3d(variant: Button3dVariant, className?: string) {
  return cn(base, variants[variant], className)
}
