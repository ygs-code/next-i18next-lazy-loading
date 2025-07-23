import { getTranslations } from '@/i18n'
import { LinkBase } from './LinkBase'

export const Link = async ({ href, children }) => {
  const { i18n } = await getTranslations()
  return <LinkBase lng={i18n.resolvedLanguage} href={href}>{children}</LinkBase>
}
