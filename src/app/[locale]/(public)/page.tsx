import { Trans } from 'react-i18next/TransWithoutContext'
import { getTranslations } from '@/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Link } from '@/components/Link'

export default async function Page() {
  const { t } = await getTranslations('index')

  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        <div style={{ width: '100%' }}>
          <p>
            <Trans t={t} i18nKey="blog.text">
               Check out the corresponding <a >blog post</a> describing this example.
            </Trans>
          </p>
          <a  >
            <img
              style={{ width: '50%' }}
              src="https://cdn.prod.website-files.com/67a323e323a50df7f24f0a94/67f268673fcfae53e5d4697c_i18n-next-app-router.jpg"
            />
          </a>
        </div>
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>
          <Link href="/second-page">
            <button type="button">{t('to-second-page')}</button>
          </Link>
          <Link href="/client-page">
            <button type="button">{t('to-client-page')}</button>
          </Link>


          <Link href="/second-client-page">
            <button type="button">{t('second-client-page')}</button>
          </Link>

        </div>
      </main>
      <Footer />
    </>
  )
}
