import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowLeft, FaHandshake, FaShieldAlt, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './aboutdetailhero.css'

function AboutDetailsHero() {
	const { t } = useTranslation()

	const videoRef = useRef(null)

	return (
		<section className='about-details' id='aboutdetails'>
			<div className='container'>
				<Link to='/' className='btn btn--primary'>
					<FaArrowLeft />
				</Link>

				<div className='about-details__wrapper'>
					<div className='about-details__content'>
						<span className='eyebrow'>{t('aboutDetailsHero.eyebrow')}</span>

						<h1 className='about-details__title'>
							{t('aboutDetailsHero.title.line1')}
							<br />
							{t('aboutDetailsHero.title.line2')}
						</h1>

						<p className='about-details__description'>
							{t('aboutDetailsHero.description')}
						</p>

						<div className='about-details__features'>
							<div className='feature-card'>
								<div className='feature-card__icon'>
									<FaShieldAlt />
								</div>
								<div className='feature-card__content'>
									<h3>{t('aboutDetailsHero.features.quality.title')}</h3>
									<p>{t('aboutDetailsHero.features.quality.description')}</p>
								</div>
							</div>

							<div className='feature-card'>
								<div className='feature-card__icon'>
									<FaUsers />
								</div>
								<div className='feature-card__content'>
									<h3>{t('aboutDetailsHero.features.responsibility.title')}</h3>
									<p>
										{t('aboutDetailsHero.features.responsibility.description')}
									</p>
								</div>
							</div>

							<div className='feature-card'>
								<div className='feature-card__icon'>
									<FaHandshake />
								</div>
								<div className='feature-card__content'>
									<h3>{t('aboutDetailsHero.features.partnership.title')}</h3>
									<p>
										{t('aboutDetailsHero.features.partnership.description')}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='about-details__video'>
						<video
							ref={videoRef}
							src='/video/IMG_4035.MOV'
							controls
							preload='metadata'
							playsInline
						>
							Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
						</video>

						<div className='about-details__video-overlay'>
							<p>{t('aboutDetailsHero.video.text')}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutDetailsHero
