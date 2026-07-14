import { useTranslation } from 'react-i18next'
import { FaClipboardCheck, FaClock, FaHandshake, FaMedal } from 'react-icons/fa'
import './value.css'
function Values() {
	const { t } = useTranslation()
	return (
		<section className='values section'>
			<div className='container'>
				<div className='values__box'>
					<div className='section-header section-header--left'>
						<span className='eyebrow'>{t('values.eyebrow')}</span>
						<h2 className='section-title'>{t('values.title')}</h2>
					</div>

					<div className='values__grid'>
						<div className='values-card'>
							<div className='values-card__icon'>
								<FaMedal />
							</div>
							<h3>{t('values.cards.quality.title')}</h3>
							<p>{t('values.cards.quality.description')}</p>
						</div>

						<div className='values-card'>
							<div className='values-card__icon'>
								<FaHandshake />
							</div>
							<h3>{t('values.cards.trust.title')}</h3>
							<p>{t('values.cards.trust.description')}</p>
						</div>

						<div className='values-card'>
							<div className='values-card__icon'>
								<FaClock />
							</div>
							<h3>{t('values.cards.time.title')}</h3>
							<p>{t('values.cards.time.description')}</p>
						</div>

						<div className='values-card'>
							<div className='values-card__icon'>
								<FaClipboardCheck />
							</div>
							<h3>{t('values.cards.precision.title')}</h3>
							<p>{t('values.cards.precision.description')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Values
