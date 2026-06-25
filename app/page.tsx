import HeroSection from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { GallerySection } from '@/components/sections/gallery';
import { TeamSection } from '@/components/sections/team';
import { FooterSection } from '@/components/sections/footer';

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TeamSection />
      <FooterSection />
    </main>
  );
}
