import type { Icon } from '@tabler/icons-react'
import {
  IconBasket,
  IconBox,
  IconCookie,
  IconCup,
  IconFish,
  IconPalette,
  IconPencil,
  IconPlant,
  IconRuler,
  IconSeeding,
  IconShoppingBag,
  IconTool,
  IconSun,
} from '@tabler/icons-react'
import { cn } from '@/lib/utils'

const productIcons: Record<string, Icon> = {
  'Tas & Kantong Plastik': IconShoppingBag,
  'Plastik Mulsa Hitam (Pertanian)': IconPlant,
  'Plastik UV Green House': IconSun,
  'Plastik Mulsa Tambak': IconFish,
  'OPP, PP & Tali Rafia': IconRuler,
  'Karung & Plastik Laundry': IconBasket,
  'Kotak Kardus & Bubble Wrap': IconBox,
  'Paper Cup, Thinwall & Standing Pouch': IconCup,
  'Kemasan Makanan & Baking Paper': IconCookie,
  'Mesin Sealer, Sedotan, Sendok & Garpu': IconTool,
  'Tissue & Alat Tulis': IconPencil,
  'Kemasan Fleksibel Custom Full Color': IconPalette,
}

type ProductCategoryCardProps = {
  name: string
  index: number
}

export default function ProductCategoryCard({ name, index }: ProductCategoryCardProps) {
  const Icon = productIcons[name] ?? IconSeeding
  const featured = name.includes('Custom Full Color')

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-2xl border bg-white p-5 transition duration-300',
        'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
        featured ? 'border-primary/25 bg-gradient-to-br from-white to-primary/5' : 'border-border',
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start gap-4">
        <div
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_3px_0_#9a1b1b] transition duration-300 group-hover:scale-105',
            featured ? 'bg-primary' : 'bg-primary/90',
          )}
        >
          <Icon size={22} stroke={1.5} />
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-primary/50">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-sm font-semibold leading-snug text-foreground md:text-base">
            {name}
          </h3>
        </div>
      </div>
    </article>
  )
}
