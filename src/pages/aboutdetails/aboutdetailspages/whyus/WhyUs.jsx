import { useTranslation } from 'react-i18next'
import {
	FaCheckCircle,
	FaHeadset,
	FaIndustry,
	FaShippingFast,
	FaTshirt,
	FaUsersCog,
} from 'react-icons/fa'
import './whyus.css'
function WhyUs() {
	const { t } = useTranslation()
	return (
		<section className='why-us section'>
			<div className='container'>
				<div className='why-us__box'>
					<div className='section-header section-header--left'>
						<span className='eyebrow'>{t('whyUs.eyebrow')}</span>
						<h2 className='section-title'>{t('whyUs.title')}</h2>
					</div>

					<div className='why-us__grid'>
						<div className='why-card'>
							<div className='why-card__icon'>
								<FaTshirt />
							</div>
							<h3>{t('whyUs.cards.materials.title')}</h3>
							<p>{t('whyUs.cards.materials.description')}</p>
						</div>

						<div className='why-card'>
							<div className='why-card__icon'>
								<FaIndustry />
							</div>
							<h3>{t('whyUs.cards.equipment.title')}</h3>
							<p>{t('whyUs.cards.equipment.description')}</p>
						</div>

						<div className='why-card'>
							<div className='why-card__icon'>
								<FaUsersCog />
							</div>
							<h3>{t('whyUs.cards.team.title')}</h3>
							<p>{t('whyUs.cards.team.description')}</p>
						</div>

						<div className='why-card'>
							<div className='why-card__icon'>
								<FaCheckCircle />
							</div>
							<h3>{t('whyUs.cards.quality.title')}</h3>
							<p>{t('whyUs.cards.quality.description')}</p>
						</div>

						<div className='why-card'>
							<div className='why-card__icon'>
								<FaShippingFast />
							</div>
							<h3>{t('whyUs.cards.delivery.title')}</h3>
							<p>{t('whyUs.cards.delivery.description')}</p>
						</div>

						<div className='why-card'>
							<div className='why-card__icon'>
								<FaHeadset />
							</div>
							<h3>{t('whyUs.cards.approach.title')}</h3>
							<p>{t('whyUs.cards.approach.description')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhyUs
