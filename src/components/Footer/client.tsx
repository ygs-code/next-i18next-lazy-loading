'use client'

import { FooterBase } from './FooterBase'
import { useTranslations } from '@/i18n/client'

export const Footer = ({ path }) => {
  const { t, i18n } = useTranslations('footer')
  return <FooterBase t={t} lng={i18n.resolvedLanguage} path={path} />
}
