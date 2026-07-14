import { useTranslation } from 'react-i18next'

function Footer() {
	const { t } = useTranslation()
	return (
		<div className='footer-cta'>
			<div className='footer-cta__content container'>
				<h2 className='footer-cta__title'>{t('faq.cta.title')}</h2>
				<p className='footer-cta__description'>{t('faq.cta.description')}</p>
			</div>
		</div>
	)
}

export default Footer
