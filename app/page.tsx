import HeroSection from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <section
        id="laboratories"
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Laboratories</h2>
          <p className="text-center text-gray-600">5 laboratorium siap melayani.</p>
        </div>
      </section>
      <section
        id="gallery"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <p className="text-center text-gray-600">Dokumentasi kegiatan laboratorium.</p>
        </div>
      </section>
      <section
        id="team"
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Team</h2>
          <p className="text-center text-gray-600">Tim aslab yang berdedikasi.</p>
        </div>
      </section>
    </main>
  );
}
