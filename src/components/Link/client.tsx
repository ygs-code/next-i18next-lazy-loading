'use client'

import { LinkBase } from './LinkBase'
import { useTranslations } from '@/i18n/client'

export const Link = ({ href, children }) => {
  const { i18n } = useTranslations()
  return <LinkBase lng={i18n.resolvedLanguage} href={href}>{children}</LinkBase>
}
