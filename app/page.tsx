import HeroCarousel from '@/components/hero-carousel'
import ClientsSection from '@/components/clients-section'
import IntegrationSection from '@/components/integration-section'
import CategoriesSection from '@/components/categories-section'
import InspirationSection from '@/components/inspiration-section'
import FeaturesSection from '@/components/features-section'
import FaqSection, { homeFaqs } from '@/components/faq-section'
import CTASection from '@/components/cta-section'

export default function Page() {
  return (
    <main>
      <HeroCarousel />
      <ClientsSection />
      <IntegrationSection />
      <CategoriesSection />
      <InspirationSection />
      <FeaturesSection />
      <FaqSection
        title="Pertanyaan Umum"
        description="Punya pertanyaan seputar kemasan fleksibel custom full color? Berikut jawaban untuk hal yang paling sering ditanyakan pelanggan kami."
        faqs={homeFaqs}
        whatsappMessage="Halo%2C%20saya%20punya%20pertanyaan%20tentang%20kemasan%20dari%20Simpang%20Utama%20Kemasan"
      />
      <CTASection />
    </main>
  )
}
