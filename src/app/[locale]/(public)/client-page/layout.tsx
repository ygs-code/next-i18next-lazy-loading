import { languages } from '@/i18n/settings'
import { getTranslations } from '@/i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata() {
  const { t } = await getTranslations('client-page')
  return {
    title: t('title')
  }
}

export default async function Layout({ children }:{
  children: React.ReactNode
}) {
  return children
}
