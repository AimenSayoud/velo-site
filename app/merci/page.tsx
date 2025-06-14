"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function ThankYouPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <section className="thank-you-hero py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="thank-you-content max-w-3xl mx-auto text-center">
              <div className="success-icon mb-8">
                <CheckCircle className="h-20 w-20 text-accent-green mx-auto" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-6">{t('title')}</h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                {t('subtitle')}
              </p>

              <div className="next-steps bg-light-gray rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-semibold text-dark-charcoal mb-6">{t('nextSteps.title')}</h2>
                <ol className="text-left space-y-4 max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <span className="bg-primary-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">
                      1
                    </span>
                    <span className="text-gray-700">{t<string>('nextSteps.steps')[0]}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">
                      2
                    </span>
                    <span className="text-gray-700">{t<string[]>('nextSteps.steps')[1]}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">
                      3
                    </span>
                    <span className="text-gray-700">{t<string[]>('nextSteps.steps')[2]}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1 flex-shrink-0">
                      4
                    </span>
                    <span className="text-gray-700">{t<string[]>('nextSteps.steps')[3]}</span>
                  </li>
                </ol>
              </div>

              <div className="contact-reminder bg-secondary-yellow/20 rounded-xl p-6 mb-8">
                <p className="text-lg text-dark-charcoal mb-4">{t('urgentQuestions.text')}</p>
                <a
                  href="tel:+1-XXX-XXX-XXXX"
                  className="inline-flex items-center bg-secondary-yellow text-dark-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {t('urgentQuestions.callButton')}
                </a>
              </div>

              <div className="social-links">
                <p className="text-lg text-dark-charcoal mb-6">{t('socialLinks.text')}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="bg-primary-red text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary-red text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary-red text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary-red text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="return-home mt-12">
                <Link href="/">
                  <Button variant="outline" className="px-8 py-3">
                    {t('returnHome')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
