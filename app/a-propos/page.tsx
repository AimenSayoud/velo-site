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