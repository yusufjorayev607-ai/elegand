import { useTranslation } from 'react-i18next'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import './testimonials.css'

function Testimonials() {
	const { t } = useTranslation()

	const testimonials = [1, 2, 3, 4]

	return (
		<section className='testimonials section'>
			<div className='container'>
				<div className='section-header section-header--left'>
					<span className='eyebrow'>{t('testimonials.eyebrow')}</span>

					<h2 className='section-title'>{t('testimonials.title')}</h2>
				</div>

				<div className='testimonials__grid'>
					{testimonials.map(id => (
						<div className='testimonial-card' key={id}>
							<div className='testimonial-card__rating'>
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>

							<p className='testimonial-card__text'>
								<FaQuoteLeft className='testimonial-card__quote-icon' />
								{t(`testimonials.items.${id}.text`)}
							</p>

							<div className='testimonial-card__author'>
								<h4>{t(`testimonials.items.${id}.name`)}</h4>
								<span>{t(`testimonials.items.${id}.company`)}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
