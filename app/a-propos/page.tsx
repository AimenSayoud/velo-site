"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  MotionDiv, 
  MotionSection, 
  AnimatedImage, 
  StaggerContainer, 
  RedLineSeparator,
  ScrollReveal,
  TextReveal,
  ImageMaskReveal
} from "@/components/motion/motion-components"
import { useI18n } from "@/lib/i18n"

export default function AboutPage() {
  const { t } = useI18n()
  
  // Add fallback empty array to prevent "map is not a function" error
  const values = t<any[]>('mission.values', [])

  const cities = ['Montréal', 'Québec', 'Laval', 'Ottawa']

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-pink-200 via-yellow-100 to-orange-200 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <TextReveal>
                <h1 className="text-5xl md:text-6xl font-bold text-dark-charcoal mb-6">
                  {t('hero.title', "À Propos de Nous")}
                </h1>
              </TextReveal>
              
              <RedLineSeparator className="mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-2xl italic text-gray-700 mb-8 leading-relaxed">
                  {t('hero.quote', "\"Nous engageons et inspirons les gens d'une manière amusante et saine!\"")}
                </p>
              </ScrollReveal>
              
              <AnimatedImage hoverEffect="scale" className="mb-6">
                <Image
                  src="/images/founders.jpg"
                  alt="Leen et Micha, fondatrices de Voilà Vélo Fruité"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl mx-auto"
                />
              </AnimatedImage>
              
              <ScrollReveal delay={0.5}>
                <p className="text-lg text-gray-600">{t('hero.founders', "Leen et Micha, fondatrices de Voilà Vélo Fruité")}</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FEEL GOOD VIBES SECTION */}
        <section className="py-16 bg-gradient-to-br from-pink-400 via-yellow-300 to-orange-300 text-white text-center rounded-3xl shadow-xl mx-2 my-8">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3">
              <span role="img" aria-label="smile">😄</span>
              Feel Good Vibes
              <span role="img" aria-label="bicycle">🚲</span>
            </h2>
            <p className="text-2xl md:text-3xl font-semibold mb-6">Chez Voilà Vélo Fruité, on pédale dans la bonne humeur !</p>
            <p className="text-lg md:text-xl mb-4">Que tu sois petit ou grand, sportif ou non, viens créer ton smoothie, partager un sourire et vivre un moment unique.</p>
            <p className="text-lg md:text-xl mb-4">Ici, tout le monde est le bienvenu pour faire le plein d'énergie, de saveurs et de fun ! <span role="img" aria-label="fruits">🍓🍌🍍</span></p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 text-xl font-bold shadow-lg"><span role="img" aria-label="inclusion">🤗</span> Inclusif</span>
              <span className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 text-xl font-bold shadow-lg"><span role="img" aria-label="energy">⚡</span> Énergique</span>
              <span className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 text-xl font-bold shadow-lg"><span role="img" aria-label="fun">🎉</span> Fun</span>
              <span className="inline-flex items-center bg-white/30 rounded-full px-6 py-3 text-xl font-bold shadow-lg"><span role="img" aria-label="wellness">🌱</span> Bien-être</span>
            </div>
          </div>
        </section>

        {/* Company Section - Red Background */}
        <MotionSection className="py-24 bg-gradient-to-br from-primary-red via-pink-200 to-yellow-100">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ImageMaskReveal className="rounded-lg">
                <Image
                  src="/images/equipe-frooshy.jpg"
                  alt="Équipe Voilà Vélo Fruité"
                  width={1200}
                  height={940}
                  className="rounded-lg shadow-lg w-full"
                />
              </ImageMaskReveal>
              
              <StaggerContainer className="text-white pl-0 lg:pl-12">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-4xl font-bold text-black mb-4">
                    {t('company.title', "Voilà Vélo Fruité")}
                  </h2>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <h5 className="text-2xl text-secondary-yellow mb-6">
                    {t('company.subtitle', "Nous créons des événements innovants et durables")}
                  </h5>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4">
                    {t('company.description1', "Voilà Vélo Fruité est une entreprise d'événements pop-up qui promeut le cyclisme, la durabilité, la santé et le bonheur en utilisant nos vélos mélangeurs fabriqués au Québec.")}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4">
                    {t('company.description2', "Nous sommes une équipe d'organisateurs d'événements passionnés qui croient aux pratiques éthiques et durables pour créer un monde plus heureux et plus sain — un événement smoothie à la fois! Nous utilisons des gobelets lavables ou biodégradables, compensons notre carbone, compostons ou recyclons tous les déchets produits et faisons des dons à UNICEF.")}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-4">
                    {t('company.description3', "Voilà Vélo Fruité est parfait pour engager et inspirer votre public grâce à un service traiteur divertissant, une exposition de marque ou la promotion de la durabilité et de la santé lors d'événements.")}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p>
                    {t('company.description4', "L'entreprise a été fondée par Leen et Micha en 2020 avec l'aide de leur équipe dévouée. Elles dirigent maintenant des événements à Montréal, Québec, Laval et Ottawa.")}
                  </p>
                </MotionDiv>
              </StaggerContainer>
            </div>
          </div>
        </MotionSection>

        {/* Founder Section - Blue Background */}
        <MotionSection className="py-24 bg-gradient-to-br from-blue-300 via-blue-100 to-pink-100">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <StaggerContainer className="text-white order-2 lg:order-1 pr-0 lg:pr-12">
                <MotionDiv variant="fadeUp">
                  <h2 className="text-4xl font-bold text-black mb-4">
                    {t('founders.title', "Nos Fondatrices")}
                  </h2>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <h5 className="text-2xl text-primary-red mb-6">
                    {t('founders.subtitle', "Leen et Micha")}
                  </h5>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <p className="mb-6">
                    {t('founders.description', "Nous sommes Leen et Micha — deux sœurs avec un grand amour pour la nature, la vie saine et le vélo. C'est ainsi que Voilà Vélo Fruité a vu le jour — un concept joyeux où les gens de tous âges peuvent monter sur un vélo smoothie, pédaler de tout leur cœur et créer leur propre boisson délicieuse, alimentée entièrement par leur énergie! Pour en savoir plus sur la façon dont nous avons commencé Voilà Vélo Fruité, consultez notre histoire.")}
                  </p>
                </MotionDiv>
                <MotionDiv variant="fadeUp">
                  <AnimatedImage hoverEffect="lift">
                    <Button className="bg-white text-primary-red hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                      {t('founders.button', "En savoir plus")}
                    </Button>
                  </AnimatedImage>
                </MotionDiv>
              </StaggerContainer>
              
              <ImageMaskReveal className="order-1 lg:order-2 rounded-lg">
                <Image
                  src="/images/team-1.jpg"
                  alt="Leen et Micha - Fondatrices de Voilà Vélo Fruité"
                  width={700}
                  height={644}
                  className="rounded-lg shadow-lg w-full"
                />
              </ImageMaskReveal>
            </div>
          </div>
        </MotionSection>

        {/* Mission Section - White Background */}
        <MotionSection id="notre-mission" className="py-24 bg-gradient-to-br from-yellow-100 via-pink-100 to-green-100">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-yellow mb-8">
                {t('mission.title', "Notre Mission")}
              </h2>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value: { icon: string; title: string; description: string }, index: number) => (
                <MotionDiv 
                  key={index} 
                  variant="fadeUp"
                  custom={index}
                  className="text-center bg-white/80 rounded-2xl shadow-lg p-8 border-4 border-pink-200 hover:border-yellow-300 transition-all duration-300">
                  <AnimatedImage hoverEffect="rotate" className="text-6xl mb-6">
                    <span>
                      {value.icon || (index === 0 ? '🍏' : index === 1 ? '🌱' : index === 2 ? '🤝' : index === 3 ? '💪' : '🍓')}
                    </span>
                  </AnimatedImage>
                  <h2 className="text-2xl font-bold text-primary-red mb-4">
                    {value.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* "We do this by" Section - Light Gray Background */}
        <MotionSection className="py-24 bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-yellow mb-8">
                {t('howWeDo.title', "Nous le faisons en:")}
              </h2>
            </ScrollReveal>

            <StaggerContainer className="max-w-4xl mx-auto text-center space-y-8">
              {t<string[]>('howWeDo.points', []).map((point: string, index: number) => (
                <MotionDiv key={index} variant="fadeUp" custom={index}>
                  <p className={index === 0 || index === 3 ? "text-2xl font-medium text-dark-charcoal leading-relaxed" : "text-lg text-gray-700"}>
                    {point}
                  </p>
                </MotionDiv>
              ))}
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Partners Section - White Background */}
        <MotionSection id="nos-partenaires" className="py-24 bg-gradient-to-br from-pink-100 via-yellow-100 to-white">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-yellow mb-8">
                {t('partners.title', "Nos Partenaires")}
              </h2>
            </ScrollReveal>

            <StaggerContainer className="max-w-2xl mx-auto text-center">
              <AnimatedImage hoverEffect="scale" className="mb-12">
                <Image
                  src="/placeholder.svg?height=131&width=250"
                  alt="Logo Partenaire"
                  width={250}
                  height={131}
                  className="mx-auto mb-6"
                />
              </AnimatedImage>
              
              <MotionDiv variant="fadeUp">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {t('partners.description', "Nos partenaires spécialisent dans les événements alimentés par pédale en utilisant des vélos pour engager, éduquer et divertir les enfants et les adultes.")}
                </p>
              </MotionDiv>
              
              <MotionDiv variant="fadeUp">
                <AnimatedImage hoverEffect="lift">
                  <Button className="bg-primary-red text-white hover:bg-primary-red/90 px-8 py-3 text-lg font-semibold">
                    {t('partners.button', "En savoir plus")}
                  </Button>
                </AnimatedImage>
              </MotionDiv>
            </StaggerContainer>
          </div>
        </MotionSection>

        {/* Service Areas Footer Section - Red Background */}
        <MotionSection className="py-16 bg-gradient-to-br from-primary-red via-pink-400 to-yellow-200">
          <div className="container mx-auto px-4">
            <StaggerContainer className="text-center">
              <AnimatedImage hoverEffect="scale" className="mb-16">
                <Link href="/">
                  <Image
                    src="/placeholder.svg?height=240&width=275"
                    alt="Logo Voilà Vélo Fruité"
                    width={275}
                    height={240}
                    className="mx-auto"
                  />
                </Link>
              </AnimatedImage>
              
              <StaggerContainer fast className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                {cities.map((city, index) => (
                  <MotionDiv 
                    key={city}
                    variant="fadeUp"
                    custom={index}
                  >
                    <AnimatedImage hoverEffect="bounce">
                      <h3 className="text-3xl font-bold cursor-pointer">{city}</h3>
                    </AnimatedImage>
                  </MotionDiv>
                ))}
              </StaggerContainer>
            </StaggerContainer>
          </div>
        </MotionSection>
      </main>

      <Footer />
    </div>
  )
}