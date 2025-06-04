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

        {/* Bloc Nos Valeurs */}
        <section className="py-16 bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 mx-2 rounded-2xl shadow mb-8">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-primary-red text-center">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-pink-200 hover:border-yellow-300 transition-all duration-300">
                <span className="text-5xl mb-4">🍏</span>
                <h3 className="text-xl font-bold text-primary-red mb-2">Santé & Bien-être</h3>
                <p className="text-gray-700">Nourrir son corps doit être à la fois délicieux et agréable.</p>
              </div>
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-pink-200 hover:border-yellow-300 transition-all duration-300">
                <span className="text-5xl mb-4">🌱</span>
                <h3 className="text-xl font-bold text-primary-red mb-2">Durabilité</h3>
                <p className="text-gray-700">Nous soutenons les producteurs locaux et adoptons des pratiques éco-responsables.</p>
              </div>
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-pink-200 hover:border-yellow-300 transition-all duration-300">
                <span className="text-5xl mb-4">🤝</span>
                <h3 className="text-xl font-bold text-primary-red mb-2">Communauté</h3>
                <p className="text-gray-700">Nous créons du lien et de la joie en rassemblant les gens autour de nos expériences smoothies.</p>
              </div>
              <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-pink-200 hover:border-yellow-300 transition-all duration-300">
                <span className="text-5xl mb-4">💪</span>
                <h3 className="text-xl font-bold text-primary-red mb-2">Inclusion & Empowerment</h3>
                <p className="text-gray-700">Nous inspirons petits et grands, de tous horizons, à participer, créer et s'énergiser — tout le monde mérite de faire partie du changement positif !</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}