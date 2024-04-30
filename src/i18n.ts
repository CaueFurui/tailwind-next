import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { enData, ptData  } from 'module-translations'

// Can be imported from a shared config
const locales = ['en', 'pt']

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()
    let translation

    if (locale === 'en') {
      translation = enData
    } else {
      translation = ptData
    }


  return {
    messages: translation,
  }
})
