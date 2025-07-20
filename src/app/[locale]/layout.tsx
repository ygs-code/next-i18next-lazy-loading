import '../globals.css'
import '../base.css'

import { dir } from 'i18next'
import { languages } from '@/i18n/settings'
import { getT } from '@/i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata() {
  const { t } = await getT()
  return {
    title: t('title'),
    content: 'A playground to explore new Next.js 13/14/15 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
  params: { lng: string }
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { lng } = params
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
          {/* <I18nextProvider i18n={i18n}>  */}
        {children}
        {/* </I18nextProvider> */}
      </body>
    </html>
  )
}
