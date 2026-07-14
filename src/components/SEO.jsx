import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function SEO({ page, image = '/og-image.jpg' }) {
	const { t } = useTranslation()

	const title = t(`seo.${page}.title`)
	const description = t(`seo.${page}.description`)
	const url = window.location.href

	return (
		<Helmet>
			<html lang={document.documentElement.lang || 'uz'} />

			<title>{title}</title>

			<meta name='description' content={description} />
			<meta name='robots' content='index, follow' />

			<link rel='canonical' href={url} />

			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
			<meta property='og:url' content={url} />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
		</Helmet>
	)
}

export default SEO
