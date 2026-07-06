import type { Icon } from '@tabler/icons-react'
import {
  IconBuildingSkyscraper,
  IconBuildingStore,
  IconFish,
  IconToolsKitchen2,
  IconShoppingCart,
} from '@tabler/icons-react'

const industryIcons: Record<string, Icon> = {
  'Pertanian & perikanan': IconFish,
  'Hotel & perhotelan': IconBuildingSkyscraper,
  'Kafe & restoran (HoReCa)': IconToolsKitchen2,
  'Retail & grosir': IconShoppingCart,
  'UMKM & industri makanan': IconBuildingStore,
}

type IndustryCardProps = {
  name: string
}

export default function IndustryCard({ name }: IndustryCardProps) {
  const Icon = industryIcons[name] ?? IconBuildingStore

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 text-center transition duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
        <Icon size={26} stroke={1.5} />
      </div>

      <h3 className="text-sm font-semibold leading-snug text-foreground md:text-base">{name}</h3>
    </article>
  )
}
