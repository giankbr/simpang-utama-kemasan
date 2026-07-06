import { button3d } from '@/lib/button-3d'
import { whatsappUrl } from '@/lib/site'
import { IconPackage, IconBox, IconCup, IconCylinder } from '@tabler/icons-react'

const kemasanTypes = [
  {
    id: 1,
    name: 'Sachet / 3 Side Seal',
    description:
      'Kemasan sachet fleksibel dengan seal 3 sisi, ideal untuk bumbu, bubuk minuman, sampel produk, dan kemasan retail kecil.',
    Icon: IconPackage,
    items: ['Sachet Metallized', 'Sachet Transparan', 'Sachet Full Color', 'Sachet Food Grade'],
  },
  {
    id: 2,
    name: 'Standing Pouch',
    description:
      'Kemasan berdiri (doypack) dengan zip lock opsional, cocok untuk snack, kopi, teh, dan produk FMCG.',
    Icon: IconBox,
    items: ['Standing Pouch Metallized', 'Standing Pouch Transparan', 'Zip Lock Pouch', 'Pouch Full Color'],
  },
  {
    id: 3,
    name: 'Lid Cup',
    description:
      'Tutup cup fleksibel untuk kemasan minuman, yogurt, dan produk dairy dengan seal yang rapat.',
    Icon: IconCup,
    items: ['Lid Cup Sealing', 'Lid Cup Custom Print', 'Lid Cup Food Grade', 'Lid Cup Full Color'],
  },
  {
    id: 4,
    name: 'Roll Stock',
    description:
      'Material kemasan dalam bentuk roll untuk mesin filling otomatis, efisien untuk produksi skala besar.',
    Icon: IconCylinder,
    items: ['Roll Stock Metallized', 'Roll Stock Transparan', 'Roll Stock Full Color', 'Roll Stock Custom Size'],
  },
]

export default function ProductsPage() {
  return (
    <main>
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Jenis Kemasan</h1>
            <p className="text-lg text-white text-opacity-90 max-w-2xl">
              Pilih jenis kemasan fleksibel custom full color dari Simpang Utama Kemasan untuk produkmu.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kemasanTypes.map((type) => (
                <div
                  key={type.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <type.Icon size={64} stroke={1.5} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{type.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                    <div className="mb-4 space-y-2">
                      {type.items.map((item) => (
                        <div key={item} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={whatsappUrl()}
                      className="inline-block text-primary font-semibold hover:text-accent transition text-sm"
                    >
                      Konsultasi Sekarang →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Butuh Rekomendasi Kemasan?</h2>
            <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Tim kami siap membantu kamu memilih jenis kemasan yang tepat untuk produkmu.
            </p>
            <a
              href={whatsappUrl()}
              className={button3d('white', 'px-8 py-3')}
            >
              Hubungi Tim Kami
            </a>
          </div>
        </section>
    </main>
  )
}
