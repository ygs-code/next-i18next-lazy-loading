'use client'

import * as React from 'react'
import { useTranslations } from '@/i18n/client'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer/client'
import { Link } from '@/components/Link/client'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const { t, i18n } = useTranslations('second-client-page')
  return (
    <>
      <main>
        <Header heading={t('title')} />

        <h1>{t("h1")}</h1>
        <Link href="/">
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
        <button type="button" onClick={() => router.push(`/${i18n.resolvedLanguage}/client-page`)}>
          {t('to-client-page')}
        </button>
      </main>
      <Footer path="/second-client-page" />
    </>
  )
}