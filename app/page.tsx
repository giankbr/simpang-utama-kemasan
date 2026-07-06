import HeroCarousel from '@/components/hero-carousel'
import ClientsSection from '@/components/clients-section'
import IntegrationSection from '@/components/integration-section'
import CategoriesSection from '@/components/categories-section'
import InspirationSection from '@/components/inspiration-section'
import FeaturesSection from '@/components/features-section'
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
      <CTASection />
    </main>
  )
}
